import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import { Link } from 'react-router'
import findEntities from 'utils/findEntities'
import BlockToolbar from 'components/BlockToolbar'
import InlineToolbar from 'components/InlineToolbar'
import EntityToolbar from 'components/EntityToolbar'
import EditorLink from 'components/Link'
import { blockTypes, inlineTypes } from 'components/ToolSpec'
import {
    Editor,
    EditorState,
    RichUtils,
    convertFromRaw,
    Entity,
    CompositeDecorator,
    Modifier
} from 'draft-js'

import 'styles/custom.scss'

export default class Home extends Component {
    displayName = 'homepage component';
    constructor(props) {
        super(props)
        this.decorator = new CompositeDecorator([
            {
                strategy: findEntities.bind(null, 'link'),
                component: EditorLink
            }
        ])

        // front page editable paragraph
        const subIntro = `
The collection is being built by requesting published strains and plasmids. We encourage \
and also periodically remind investigators to send new mutants, natural isolates, and \
plasmids, once they have been published. We do regular quality checks, however, a large \
component of the quality control program consists of feedback from the recipients of \
materials. DSC orders are placed through a shopping cart system and are filled in the \
order they are received.`
        // front page editable paragraph - draftjs raw data
        this.rawData = {
            entityMap: {},
            blocks: [
                {
                    text: subIntro,
                    type: 'unstyled'
                }
            ]
        }
        this.state = {
            editorState:
                EditorState.createWithContent(convertFromRaw(this.rawData), this.decorator),
            showURLInput: false,
            urlValue: '',
            readOnly: true
        }
    }
    onChange = (editorState) => this.setState({editorState})
    focus = () => this.refs.editor.focus()
    onEdit = (e) => {
        e.preventDefault()
        this.setState({
            readOnly: false
        })
    }
    onSave = () => {
        // save new content
        this.setState({
            showURLInput: false,
            urlValue: '',
            readOnly: true
        })
    }
    onCancel = () => {
        // cancel editing
        this.setState({
            editorState:
                EditorState.createWithContent(convertFromRaw(this.rawData), this.decorator),
            showURLInput: false,
            urlValue: '',
            readOnly: true
        })
    }
    handleKeyCommand = (command) => {
        const { editorState } = this.state
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            this.onChange(newState)
            return true
        }
        return false
    }
    addLineBreak = () => {
        let newContent
        let newEditorState
        const { editorState } = this.state
        const content = editorState.getCurrentContent()
        const selection = editorState.getSelection()
        const block = content.getBlockForKey(selection.getStartKey())

        if (block.type === 'code-block') {
            newContent = Modifier.insertText(content, selection, '\n')
            newEditorState = EditorState.push(editorState, newContent, 'add-new-line')
            this.onChange(newEditorState)
            return true
        }
        return false
    }
    handleReturn = (e) => {
        if (e.metaKey === true) {
            return this.addLineBreak()
        }
        return false
    }
    onToggleBlock = (type) => {
        this.onChange(
            RichUtils.toggleBlockType(
              this.state.editorState,
              type
            )
          )
    }
    onToggleInline = (type) => {
        this.onChange(
            RichUtils.toggleInlineStyle(
              this.state.editorState,
              type
            )
          )
    }
    onURLChange = (e) => {
        this.setState({urlValue: e.target.value})
    }
    onLinkInputKeyDown = (e) => {
        if (e.which === 13) {
            this.confirmLink(e)
        }
    }
    addLink = () => {
        const { editorState } = this.state
        const selection = editorState.getSelection()
        if (!selection.isCollapsed()) {
            this.setState({
                showURLInput: true,
                urlValue: ''
            }, () => {
                setTimeout(() => this.refs.url.focus(), 0)
            })
        }
    }
    confirmLink = (e) => {
        e.preventDefault()
        const { editorState, urlValue } = this.state
        const entityKey = Entity.create('link', 'MUTABLE', { url: urlValue })
        this.setState({
            editorState: RichUtils.toggleLink(
              editorState,
              editorState.getSelection(),
              entityKey
            ),
            showURLInput: false,
            urlValue: ''
        }, () => {
            setTimeout(() => this.refs.editor.focus(), 0)
        })
    }
    removeLink = () => {
        const { editorState } = this.state
        const selection = editorState.getSelection()
        if (selection.isCollapsed()) {
            return
        }
        this.onChange(RichUtils.toggleLink(editorState, selection, null))
    }
    renderGreeting = () => {
        const { user } = this.props.auth
        return (
            <span>Hello, { user.name }</span>
        )
    }
    renderToolbar = () => {
        const entityControls = [
          { label: 'Add Link',
              action: this.addLink,
              icon: <i className="fa fa-link"></i>
          },
          { label: 'Remove Link',
              action: this.removeLink,
              icon: <i className="fa fa-chain-broken"></i>
          }
        ]
        let urlInput
        if (this.state.showURLInput) {
            urlInput = (
              <Grid smallCellWidth="1" mediumCellWidth="1/2" cellWidth="1/3">
                  <Cell>
                      <div className="input-group">
                        <input
                          className="form-control input-sm"
                          onChange={ this.onURLChange }
                          ref="url"
                          type="text"
                          value={ this.state.urlValue }
                          onKeyDown={ this.onLinkInputKeyDown }
                        />
                        <span className="input-group-btn">
                            <button
                              className="btn btn-default btn-sm"
                              onMouseDown={ this.confirmLink }>
                              Confirm Link
                            </button>
                        </span>
                      </div>
                  </Cell>
              </Grid>
            )
        }
        const { editorState } = this.state
        return (
            <div className="toolbar-nav">
                <Grid cellWidth="1">
                  <Cell>
                    <BlockToolbar
                      editorState={ editorState }
                      clickFn={ this.onToggleBlock }
                      toolSpec={ blockTypes }
                    />
                  </Cell>
                  <Cell>
                    <InlineToolbar
                      editorState={ editorState }
                      clickFn={ this.onToggleInline }
                      toolSpec={ inlineTypes }
                    />
                  </Cell>
                  <Cell>
                    <EntityToolbar
                      editorState={ editorState }
                      toolSpec={ entityControls }
                    />
                  </Cell>
                  <Cell>{ urlInput }</Cell>
                </Grid>
            </div>
        )
    }
    render() {
        const { user } = this.props.auth
        const { readOnly, editorState } = this.state
        const intro = `
        The DSC is a rapidly growing central repository for Dictyostelium discoideum strains
        and those of related species, plasmids, commonly used food bacteria, and other materials
        such as antibodies. The DSC is located at Northwestern University in Chicago, IL, USA.`

        const links = [
            {name: 'Contact the DSC', to: ''},
            {name: 'DSC FAQ', to: ''},
            {name: 'Nomenclature Guide', to: ''},
            {name: 'DSC History', to: ''},
            {name: 'Other Stock Centers', to: ''}
        ]
        const info = [
            {name: 'Order Information', to: '/orders/information'},
            {name: 'Payment Information', to: '/payments/information'},
            {name: 'Deposit Information', to: '/deposits/information'}
        ]
        const availability = [
            {name: 'Strains', amount: 1927},
            {name: 'Plasmids', amount: 882},
            {name: 'Antibodies', amount: 12},
            {name: 'cDNA library', amount: 1},
            {name: 'Genomic library', amount: 1}
        ]
        const downloads = [
            {name: 'Phenotype Ontology', to: ''},
            {name: 'Strain Characteristics', to: ''},
            {name: 'Mutagenesis Methods', to: ''},
            {name: 'Plasmid Keywords', to: ''}
        ]
        const materials = [
            {name: 'Strain Catalog', to: ''},
            {name: 'Plasmid Catalog', to: ''},
            {name: 'Bacterial Strains', to: ''},
            {name: 'Other Materials', to: ''}
        ]
        return (
            <div className="container">
                <Grid cellWidth="1">
                    <Cell>{ user && this.renderGreeting() }</Cell>
                    <Cell>
                        <h1 className="page-header">
                            Welcome to Dicty Stock Center (DSC)
                        </h1>
                    </Cell>
                    <Cell>
                        <p>{ intro }</p>
                    </Cell>
                </Grid>
                <Grid smallCellWidth="1">
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell>
                              { !readOnly && this.renderToolbar() }
                            </Cell>
                            <Cell>
                                <div>
                                  <Editor
                                    editorState={ editorState }
                                    onChange={ this.onChange }
                                    handleReturn={ this.handleReturn }
                                    handleKeyCommand={ this.handleKeyCommand }
                                    ref="editor"
                                    readOnly = { readOnly }
                                  />
                                  { user && readOnly &&
                                    (
                                      <a href="#" onClick={ this.onEdit } title="Edit">
                                        <i className="fa fa-pencil"></i>
                                      </a>
                                    )
                                  }
                                </div>
                            </Cell>
                            <Cell width="1/2">
                              { !readOnly && (<button
                                style={ {margin: '5px auto'} }
                                type="button"
                                className="btn btn-block btn-default"
                                onClick = { this.onCancel }>
                                  Cancel
                              </button>) }
                            </Cell>
                            <Cell width="1/2">
                              { !readOnly && (<button
                                style={ {margin: '5px auto'} }
                                type="button"
                                className="btn btn-block btn-success"
                                onClick = { this.onSave }>
                                  Save
                              </button>) }
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    { links.map((link, index) => {
                                        return (
                                            <h4 key={ index }>
                                                <Link to={ link.to }>{ link.name }</Link>
                                            </h4>
                                        )
                                    }) }
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    { info.map((link, index) => {
                                        return (
                                            <h4 key={ index }>
                                                <Link to={ link.to }>{ link.name }</Link>
                                            </h4>
                                        )
                                    }) }
                                </div>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-gray">
                                    <h4>Availability</h4>
                                    { availability.map((item, index) => {
                                        return (
                                            <h5 key={ index }>
                                                <strong>{ item.amount }</strong> { item.name }
                                            </h5>
                                        )
                                    }) }
                                </div>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    <h4>Download / View</h4>
                                    { downloads.map((link, index) => {
                                        return (
                                            <h5 key={ index }>
                                                <Link to={ link.to }>{ link.name }</Link>
                                            </h5>
                                        )
                                    }) }
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell align="center">
                                <figure>
                                  <img className="img-responsive"
                                    src="http://wiki.dictybase.org/dictywiki/images/c/cd/DG1100.jpg"
                                  />
                                  <figcaption>
                                      The mutant pictures shown here here
                                      have been provided by Bill Loomis.
                                      Many mutants are available at the DSC
                                  </figcaption>
                                </figure>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-gray">
                                { materials.map((link, index) => {
                                    return (
                                        <h4 key={ index }>
                                            <Link to={ link.to }>{ link.name }</Link>
                                        </h4>
                                    )
                                }) }
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
