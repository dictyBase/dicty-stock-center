import React, { Component } from 'react'
import {Editor, EditorState, convertFromRaw, CompositeDecorator} from 'draft-js'
import { Grid, Cell } from 'radium-grid'
import findEntities from 'utils/findEntities'
import Link from 'components/Link'
import timeSince from 'utils/timeSince'

export default class InfoPageView extends Component {
    displayName = 'information page component'
    constructor(props) {
        super(props)

        const decorator = new CompositeDecorator([
            {
                strategy: findEntities.bind(null, 'link'),
                component: Link
            }
        ])
        this.state = {
            editorState: EditorState.createWithContent(
                convertFromRaw(props.page.content),
                decorator
            )
        }
    }
    onClick = (e) => {
        e.preventDefault()

        const { pageActions, routeProps, page } = this.props
        pageActions.editPage(
            page.content,
            routeProps.match.params.name
        )
    }
    render() {
        const { lastEdited } = this.props.page
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
                        editorState={ this.state.editorState }
                        ref="editor"
                        readOnly
                      />
                  </Cell>
              </Grid>
          </div>
        )
    }
}
