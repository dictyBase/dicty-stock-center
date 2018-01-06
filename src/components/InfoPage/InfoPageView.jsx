import React, { Component } from 'react'
import {
  Editor,
  EditorState,
  convertFromRaw,
  CompositeDecorator
} from 'draft-js'
import findLinkEntities from 'utils/findLinkEntities'
import Link from 'components/Link'
import timeSince from 'utils/timeSince'
import FontAwesome from 'react-fontawesome'
import { Flex, Box } from 'rebass'
import { Container, ToolbarNav, TextInfo, Label } from 'styles'
import 'draft-js/dist/draft.css'

const decorator = [
    {
        strategy: findLinkEntities,
        component: Link
    }
]

export default class InfoPageView extends Component {
  displayName = 'information page component'
  constructor(props) {
      super(props)

      this.state = {
          editorState: EditorState.createWithContent(
        convertFromRaw(props.page.content),
        new CompositeDecorator(decorator)
      )
      }
  }
  onChange = editorState => this.setState({ editorState })
  onClick = e => {
      e.preventDefault()

      const { pageActions, match, page } = this.props
      pageActions.editPage(page.content, match.params.name)
  }
  render() {
      const { lastEdited } = this.props.page
      return (
      <Container>
        <ToolbarNav>
          <Flex>
            <Box>
              <TextInfo>
                <strong>
                  <FontAwesome name="user" /> { lastEdited.author.name }
                </strong>{ ' ' }
                edited { timeSince(lastEdited.time) } ago
              </TextInfo>
            </Box>
            <Box ml="auto">
              <div>
                <Label>{ lastEdited.author.role }</Label> &nbsp; &nbsp;
                <a href="#" onClick={ this.onClick }>
                  <FontAwesome name="pencil" title="Edit page" />
                </a>
              </div>
            </Box>
          </Flex>
        </ToolbarNav>
        <Flex>
          <Box>
            <Editor
              editorState={ this.state.editorState }
              ref="editor"
              readOnly
              onChange={ this.onChange }
              decorators={ decorator }
            />
          </Box>
        </Flex>
      </Container>
    )
  }
}
