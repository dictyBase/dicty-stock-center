import React, { Component } from 'react'
import {
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    Entity,
    CompositeDecorator,
    Modifier,
    convertFromRaw
} from 'draft-js'
import RichTextEditor from 'react-rte'

import Link from 'components/Link'
import { Grid, Cell } from 'radium-grid'
import findEntities from 'utils/findEntities'
import 'styles/editor.scss'
import 'styles/toolbar.scss'

export default class EditInfoPage extends Component {
    displayName = 'information page editor'

    constructor(props) {
        super(props)
        let newValue = RichTextEditor.createEmptyValue()
        newValue._editorState = EditorState.createWithContent(
          convertFromRaw(props.page.content)
        )

        if (props.page.content) {
            this.state = {
                value: newValue
            }
        }
    }

    // state = {
    //     value: RichTextEditor.createEmptyValue()
    // }

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

  onChange = (value) => {
      this.setState({value})
      if (this.props.onChange) {
          this.props.onChange(
        value.toString('html')
      )
      }
  };

    render() {
        return (
          <div className="container">
                <div className="edit-panel">
                  <div>
                    <RichTextEditor
                      value={ this.state.value }
                      onChange={ this.onChange }
                      autoFocus={ true }
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
