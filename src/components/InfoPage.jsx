import React, { Component } from 'react'
import {Editor, EditorState, convertFromRaw, CompositeDecorator, convertToRaw} from 'draft-js'
import { Grid, Cell } from 'radium-grid'
import findEntities from 'utils/findEntities'
import Link from 'components/Link'
import timeSince from 'utils/timeSince'

export default class InfoPage extends Component {
    displayName = 'information page component'
    componentDidMount() {
        console.log('componentDidMount', this.props.page)
        const { routeProps, pageActions } = this.props
        pageActions.fetchInfoPage(routeProps.params.name)
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps.page)
        // const decorator = new CompositeDecorator([
        //     {
        //         strategy: findEntities.bind(null, 'link'),
        //         component: Link
        //     }
        // ])
        // this.setState({
        //     editorState: EditorState.createWithContent(
        //         convertFromRaw(nextProps.page.content),
        //         decorator
        //     )
        // })
    }
    editorState = () => {
        const decorator = new CompositeDecorator([
            {
                strategy: findEntities.bind(null, 'link'),
                component: Link
            }
        ])
        return EditorState.createWithContent(
            convertFromRaw(this.props.content),
            decorator
        )
    }
    onClick = (e) => {
        e.preventDefault()

        const { pageActions, routeProps } = this.props
        const { editorState } = this.state
        pageActions.editPage(
            convertToRaw(editorState.getCurrentContent()),
            routeProps.params.name
        )
    }
    render() {
        console.log('render', this.props.page)
        const { lastEdited, content } = this.props.page
        return (
          <div className="container">
              { content ? (
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
                        editorState={ this.editorState }
                        ref="editor"
                        readOnly
                      />
                  </Cell>
              </Grid>
              ) : <div>Loading...</div>
               }
          </div>
        )
    }
}
