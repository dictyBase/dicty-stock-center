import React, { Component } from 'react'
import {Editor, EditorState, convertFromRaw} from 'draft-js'
import simpleStorage from 'simplestorage.js'
import { Grid, Cell } from 'radium-grid'

// import raw data from utils
import infoPages from 'utils/infoPages'

export default class InfoPage extends Component {
    displayName = 'information page component'
    constructor(props) {
        super(props)
        const page = props.routeProps.params.name
        this.state = {
            editorState: simpleStorage.get(page) ? EditorState.createWithContent(
                convertFromRaw(simpleStorage.get(page))
            ) : EditorState.createWithContent(
                convertFromRaw(infoPages[page])
            )
        }
    }
    onClick = (e) => {
        const { editorState } = this.state
        const { pageActions, routeProps } = this.props
        e.preventDefault()
        pageActions.editInfoPage(
            editorState.getCurrentContent(),
            routeProps.params.name
        )
    }
    render() {
        const { editorState } = this.state
        return (
          <div className="container">
              <Grid cellWidth="1">
                  <Cell align="right">
                      <a href="#" onClick={ this.onClick }>
                        <i className="fa fa-2x fa-pencil" title="Edit page"></i>
                      </a>
                  </Cell>
                  <Cell>
                      <Editor
                        editorState={ editorState }
                        ref="editor"
                        readOnly
                      />
                  </Cell>
              </Grid>
          </div>
        )
    }
}
