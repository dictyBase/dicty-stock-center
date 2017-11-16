import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js'
import BlockToolbar from 'components/BlockToolbar'
import InlineToolbar from 'components/InlineToolbar'
import { blockTypes, inlineTypes } from 'components/ToolSpec'
import { Grid, Cell } from 'radium-grid'
import simpleStorage from 'simplestorage.js'
import 'styles/editor.scss'
import 'styles/toolbar.scss'

export default class EditPage extends Component {
    displayName = 'page editor'
    constructor(props) {
        super(props)
        if (props.page.content) {
            this.state = {
                editorState:
                    EditorState.createWithContent(props.page.content)
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
        simpleStorage.set(routeProps.match.params.name, rawData)
        routerActions.push('/page/' + routeProps.match.params.name)
    }
    onCancel= () => {
        const { routerActions, routeProps } = this.props
        routerActions.push('/page/' + routeProps.match.params.name)
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
    render() {
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
