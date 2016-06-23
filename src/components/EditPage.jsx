import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js'
import BlockToolbar from 'components/BlockToolbar'
import InlineToolbar from 'components/InlineToolbar'
import { blockTypes, inlineTypes } from 'components/ToolSpec'
import 'styles/editor.scss'
import 'styles/toolbar.scss'
import simpleStorage from 'simplestorage.js'

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
    onClick = () => {
      // save the text in local storage
        const { editorState } = this.state
        const { routerActions } = this.props
        const rawData = convertToRaw(editorState.getCurrentContent())
        simpleStorage.set('page', rawData)
        routerActions.push('/')
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
    onToogleBlock = (type) => {
        this.onChange(
            RichUtils.toggleBlockType(
              this.state.editorState,
              type
            )
          )
    }
    onToogleInline = (type) => {
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
            <div className="row">
              <div className="col-xs-12">
                <div className="edit-panel">
                  <div className="toolbar-nav">
                    <div className="row">
                      <div className="col-md-3">
                        <BlockToolbar
                          editorState={ editorState }
                          clickFn={ this.onToogleBlock }
                          toolSpec={ blockTypes }
                        />
                      </div>
                      <div className="col-md-3">
                        <InlineToolbar
                          editorState={ editorState }
                          clickFn={ this.onToogleInline }
                          toolSpec={ inlineTypes }
                        />
                      </div>
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
                  <div className="row">
                    <div className="col-md-offset-10 col-md-2">
                      <button
                        type="button"
                        className="btn btn-block btn-success"
                        onClick = { this.onClick }>
                          Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
