import React, { Component } from 'react'
import {
    EditorState,
    convertToRaw,
    convertFromRaw
} from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createLinkPlugin from 'draft-js-anchor-plugin'
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
  BlockquoteButton,
  CodeBlockButton
} from 'draft-js-buttons'

import { Grid, Cell } from 'radium-grid'

import 'styles/toolbar.scss'
import 'styles/editorStyles.scss'
import 'styles/buttonStyles.scss'
import 'draft-js-static-toolbar-plugin/lib/plugin.css'
import 'draft-js-undo-plugin/lib/plugin.css'

const undoPlugin = createUndoPlugin()
const linkPlugin = createLinkPlugin()
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
        BlockquoteButton,
        CodeBlockButton,
        // linkPlugin.LinkButton
    ]
})
const { Toolbar } = toolbarPlugin
// const { UndoButton, RedoButton } = undoPlugin
const plugins = [toolbarPlugin, undoPlugin, linkPlugin]

export default class EditInfoPage extends Component {
    displayName = 'information page editor'
    constructor(props) {
        super(props)

        if (props.page.content) {
            this.state = {
                editorState:
                    EditorState.createWithContent(
                      convertFromRaw(props.page.content)
                    )
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
    render() {
        const { editorState } = this.state
        return (
          <div className="container">
                <div className="edit-panel">
                  <div className="toolbar-nav">
                      <div className="btn-group">
                        <Toolbar />
                        {/* <UndoButton />
                        <RedoButton /> */}
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
