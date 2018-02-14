import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Editor,
  EditorState,
  convertFromRaw,
  CompositeDecorator
} from 'draft-js'
import findLinkEntities from 'utils/findLinkEntities'
import Link from 'components/Link'
import timeSince from 'utils/timeSince'
import { editPage } from 'actions/page'
import FontAwesome from 'react-fontawesome'
import { Flex, Box } from 'rebass'
import { Container, ToolbarNav, TextInfo, Label, InlineLink } from 'styles'
import 'draft-js/dist/Draft.css'

const decorator = [
  {
    strategy: findLinkEntities,
    component: Link
  }
]

class InfoPageView extends Component {
  displayName = 'information page component'
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(props.content)),
        new CompositeDecorator(decorator)
      )
    }
  }
  onChange = editorState => this.setState({ editorState })
  onClick = e => {
    e.preventDefault()
    
    const { editPage, match, content } = this.props
    editPage(content, match.params.name)
  }
  render() {
    const { updated_by, updated_at } = this.props
    return (
      <Container>
        <ToolbarNav>
          <Flex>
            <Box>
              <TextInfo>
                <strong>
                  <FontAwesome name="user" /> {updated_by}
                </strong>{' '}
                edited {timeSince(updated_at)} ago
              </TextInfo>
            </Box>
            <Box ml="auto">
              <div>
                <Label>Curator</Label> &nbsp; &nbsp;
                <InlineLink onClick={this.onClick}>
                  <FontAwesome name="pencil" title="Edit page" />
                </InlineLink>
              </div>
            </Box>
          </Flex>
        </ToolbarNav>
        <Flex>
          <Box>
            <Editor
              editorState={this.state.editorState}
              ref="editor"
              readOnly
              onChange={this.onChange}
              decorators={decorator}
            />
          </Box>
        </Flex>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    content: state.page.content,
    updated_by: state.page.updated_by,
    updated_at: state.page.updated_at
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editPage: (content, name) => {
      dispatch(editPage(content, name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPageView)
