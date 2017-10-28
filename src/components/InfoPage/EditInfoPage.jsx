import React, { Component } from 'react'
import RichTextEditor from 'react-rte'

import { Grid, Cell } from 'radium-grid'
import 'styles/editor.scss'
import 'styles/toolbar.scss'

// Consider react-rte or react-draft-wysiwyg for new toolbar

export default class EditInfoPage extends Component {
    displayName = 'information page editor'
    state = {
        value: RichTextEditor.createEmptyValue()
    }

  onChange = (value) => {
      this.setState({value})
      if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
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
