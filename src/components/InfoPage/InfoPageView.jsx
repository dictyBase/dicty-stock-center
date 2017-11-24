import React, { Component } from 'react'
import {Editor, EditorState, convertFromRaw, CompositeDecorator} from 'draft-js'
import findEntities from 'utils/findEntities'
import Link from 'components/Link'
import timeSince from 'utils/timeSince'
import { Flex, Box } from 'rebass'

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
                <div className="toolbar-nav">
                <Flex>
                    <Box>
                        <span className="text-info">
                            <strong>
                                <i className="fa fa-user"></i> { lastEdited.author.name }
                            </strong> edited { timeSince(lastEdited.time) } ago
                        </span>
                    </Box>
                    <Box ml="auto">
                        <div>
                            <span className="label label-primary ">
                                { lastEdited.author.role }
                            </span> &nbsp; &nbsp;
                            <a href="#" onClick={ this.onClick }>
                                <i className="fa fa-pencil" title="Edit page"></i>
                            </a>
                        </div>
                    </Box>
                    </Flex>
                    </div>
              <Flex>
                  <Box>
                      <Editor
                        editorState={ this.state.editorState }
                        ref="editor"
                        readOnly
                      />
                  </Box>
              </Flex>
          </div>
        )
    }
}
