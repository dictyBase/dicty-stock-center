import React, { Component } from 'react'
import {
    EditorState,
    RichUtils,
    convertToRaw,
    Entity,
    CompositeDecorator,
    convertFromRaw
} from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createUndoPlugin from 'draft-js-undo-plugin'
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin'
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton
} from 'draft-js-buttons'

import EntityToolbar from 'components/EntityToolbar'
import Link from 'components/Link'
import { Grid, Cell } from 'radium-grid'
import findEntities from 'utils/findEntities'

import 'styles/toolbar.scss'
import 'styles/editorStyles.css'
import 'draft-js-static-toolbar-plugin/lib/plugin.css'

const undoPlugin = createUndoPlugin()

const toolbarPlugin = createToolbarPlugin({
    structure: [
        BoldButton,
        ItalicButton,
        UnderlineButton,
        CodeButton,
        Separator,
        HeadlineOneButton,
        HeadlineTwoButton,
        HeadlineThreeButton,
        Separator,
        UnorderedListButton,
        OrderedListButton,
        BlockquoteButton
    ]
})
const { Toolbar } = toolbarPlugin
const { UndoButton, RedoButton } = undoPlugin
const plugins = [toolbarPlugin, undoPlugin]

export default class EditInfoPage extends Component {
    displayName = 'information page editor'
    constructor(props) {
        super(props)
        const decorator = new CompositeDecorator([
            {
                strategy: findEntities.bind(null, 'link'),
                component: Link
            }
        ])
        if (props.page.content) {
            this.state = {
                editorState:
                    EditorState.createWithContent(
                      convertFromRaw(props.page.content),
                      decorator
                    ),
                showURLInput: false,
                urlValue: ''
            }
        }
    }

    onChange = (editorState) => this.setState({editorState})
    focus = () => this.refs.editor.focus()
    onSave = () => {
        const { editorState } = this.state
        const { routeProps, pageActions } = this.props
        const rawData = convertToRaw(editorState.getCurrentContent())
        pageActions.saveEditing(
            routeProps.params.name,
            rawData
        )
    }
    onCancel = () => {
        const { pageActions, routeProps } = this.props
        pageActions.cancelEditing(
            routeProps.params.name
        )
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
    render() {
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
          <div className="container">
                <div className="edit-panel">
                  <div className="toolbar-nav">
                      <div className="btn-group">
                        {/* <BlockToolbar
                          editorState={ editorState }
                          clickFn={ this.onToggleBlock }
                          toolSpec={ blockTypes }
                        />
                        <InlineToolbar
                          editorState={ editorState }
                          clickFn={ this.onToggleInline }
                          toolSpec={ inlineTypes }
                        /> */}
                        {/* <EntityToolbar
                          editorState={ editorState }
                          toolSpec={ entityControls }
                        /> */}
                        <Toolbar />
                        <UndoButton />
                        <RedoButton />
                        { urlInput }
                      </div>
                  </div>
                  <div className="editor">
                    <Editor
                      editorState={ editorState }
                      onChange={ this.onChange }
                      plugins={ plugins }
                      ref="{(element) => { this.editor = element }}"
                    />
                  </div>
                  <Grid cellWidth="1/4" smallCellWidth="1">
                      <Cell />
                      <Cell />
                      <Cell>
                          <button
                            style={ {margin: '5px auto'} }
                            type="button"
                            className="btn btn-block btn-default"
                            onClick = { this.onCancel }>
                              Cancel
                          </button>
                      </Cell>
                      <Cell>
                          <button
                            style={ {margin: '5px auto'} }
                            type="button"
                            className="btn btn-block btn-success"
                            onClick = { this.onSave }>
                              Save
                          </button>
                      </Cell>
                  </Grid>
              </div>
          </div>
        )
    }
}
