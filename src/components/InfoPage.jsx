import React, { Component } from 'react'
import {Editor, EditorState, convertFromRaw, CompositeDecorator} from 'draft-js'
import simpleStorage from 'simplestorage.js'
import { Grid, Cell } from 'radium-grid'
import findEntities from 'utils/findEntities'
import Link from 'components/Link'
import timeSince from 'utils/timeSince'

// import raw data from utils
import infoPages from 'utils/infoPages'

export default class InfoPage extends Component {
    displayName = 'information page component'
    constructor(props) {
        super(props)
        const decorator = new CompositeDecorator([
            {
                strategy: findEntities.bind(null, 'link'),
                component: Link
            }
        ])

        // name of the page
        const page = props.routeProps.params.name

        // temp page content json data structure.
        // must come through props. from the server.
        this.pageContent = {
            data: {
                type: 'page',
                id: 'orderInfo',
                attributes: {
                    content: infoPages[page],
                    lastEdited: {
                        author: {
                            name: 'John Smith',
                            role: 'curator'
                        },
                        time: '2016-08-08T14:30:00'
                    }
                }
            }
        }

        // if there is raw draftjs data for the specific page in localstorage,
        // then display that. Otherwise display the default page content.
        this.state = {
            editorState: simpleStorage.get(page) ? EditorState.createWithContent(
                convertFromRaw(simpleStorage.get(page)), decorator
            ) : EditorState.createWithContent(
                convertFromRaw(infoPages[page]), decorator
            )
        }
    }
    onClick = (e) => {
        const { editorState } = this.state
        const { pageActions, routeProps } = this.props
        e.preventDefault()
        pageActions.editPage(
            editorState.getCurrentContent(),
            routeProps.params.name
        )
    }
    render() {
        const { editorState } = this.state
        const { lastEdited } = this.pageContent.data.attributes
        return (
          <div className="container">
              <Grid cellWidth="1">
                  <Cell>
                      <div className="toolbar-nav">
                      <Grid cellWidth="1/2">
                        <Cell align="left">
                            <span className="text-info">
                                <strong>
                                  <i className="fa fa-user"></i> { lastEdited.author.name }
                                </strong> edited { timeSince(lastEdited.time) } ago
                            </span>
                        </Cell>
                        <Cell align="right">
                            <div>
                                <span className="label label-primary ">
                                  { lastEdited.author.role }
                                </span> &nbsp; &nbsp;
                                <a href="#" onClick={ this.onClick }>
                                  <i className="fa fa-pencil" title="Edit page"></i>
                                </a>
                            </div>
                        </Cell>
                      </Grid>
                      </div>
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
