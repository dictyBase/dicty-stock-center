import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
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

export default class InlineEditor extends Component {
    displayName = 'inline editor component';
    constructor(props) {
        super(props)
        this.decorator = new CompositeDecorator([
            {
                strategy: findEntities.bind(null, 'link'),
                component: EditorLink
            }
        ])
        this.state = {
            editorState:
                EditorState.createWithContent(
                  convertFromRaw(this.props.rawContent),
                  this.decorator
                ),
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
                EditorState.createWithContent(
                  convertFromRaw(this.props.rawContent),
                  this.decorator
                ),
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
        const { editorState, readOnly } = this.state
        const { user } = this.props.auth
        return (
            <div>
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
                              <a href="#"
                                onClick={ this.onEdit }
                                title="Edit"
                                className="text-info small">
                                  <i className="fa fa-pencil"></i> Edit
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
                </Grid>
            </div>
        )
    }
}
