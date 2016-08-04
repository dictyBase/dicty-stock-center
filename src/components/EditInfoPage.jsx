import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw, Entity, CompositeDecorator } from 'draft-js'
import BlockToolbar from 'components/BlockToolbar'
import InlineToolbar from 'components/InlineToolbar'
import EntityToolbar from 'components/EntityToolbar'
import Link from 'components/Link'
import { blockTypes, inlineTypes } from 'components/ToolSpec'
import { Grid, Cell } from 'radium-grid'
import simpleStorage from 'simplestorage.js'
import findEntities from 'utils/findEntities'
import 'styles/editor.scss'
import 'styles/toolbar.scss'

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
                    EditorState.createWithContent(props.page.content, decorator)
            }
        }
    }
    onChange = (editorState) => this.setState({editorState})
    focus = () => this.refs.editor.focus()
    onSave = () => {
      // save the text in local storage
        const { editorState } = this.state
        const { routerActions, routeProps } = this.props
        const rawData = convertToRaw(editorState.getCurrentContent())
        simpleStorage.set(routeProps.params.name, rawData)
        routerActions.push('/' + routeProps.params.name + '/information')
    }
    onCancel= () => {
        const { routerActions, routeProps } = this.props
        routerActions.push('/' + routeProps.params.name + '/information')
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
    addLink() {
        const { editorState } = this.state
        const selection = editorState.getSelection()
        if (selection.isCollapsed()) {
            return
        }
        // hardcoded url for now
        const href = 'http://www.google.com'
        const entityKey = Entity.create('link', 'MUTABLE', {href})
        this.onChange(RichUtils.toggleLink(editorState, selection, entityKey))
    }
    removeLink() {
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
              action: this.addLink.bind(this),
              icon: <i className="fa fa-link"></i>
          },
          { label: 'Remove Link',
              action: this.removeLink.bind(this),
              icon: <i className="fa fa-chain-broken"></i>
          }
        ]
        const { editorState } = this.state
        return (
          <div className="container">
                <div className="edit-panel">
                  <div className="toolbar-nav">
                      <div className="btn-group">
                        <BlockToolbar
                          editorState={ editorState }
                          clickFn={ this.onToggleBlock }
                          toolSpec={ blockTypes }
                        />
                        <InlineToolbar
                          editorState={ editorState }
                          clickFn={ this.onToggleInline }
                          toolSpec={ inlineTypes }
                        />
                        <EntityToolbar
                          editorState={ editorState }
                          toolSpec={ entityControls }
                        />
                      </div>
                  </div>
                  <div className="editor">
                    <Editor
                      editorState={ editorState }
                      onChange={ this.onChange }
                      handleKeyCommand={ this.handleKeyCommand }
                      ref="editor"
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
