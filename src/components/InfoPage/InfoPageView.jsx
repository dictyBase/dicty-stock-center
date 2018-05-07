// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Editor,
  EditorState,
  convertFromRaw,
  CompositeDecorator
} from "draft-js"
import findLinkEntities from "utils/findLinkEntities"
import Link from "components/Link"
import timeSince from "utils/timeSince"
import { editPage } from "actions/page"
import FontAwesome from "react-fontawesome"
import { Flex, Box } from "rebass"
import { Container, ToolbarNav, TextInfo, Label, InlineLink } from "styles"

const decorator = [
  {
    strategy: findLinkEntities,
    component: Link
  }
]

type Props = {
  /** React Router's match object */
  match: Object,
  /** user who last updated the page */
  updated_by: string,
  /** time the page was last updated */
  updated_at: string,
  /** action creator for editing the current page content */
  editPage: Function,
  /** checks if user is authenticated */
  isAuthenticated: boolean,
  /** the object that contains page data from current state */
  page: Object
}

type State = {
  editorState: EditorState
}

/** Displays the info page data that was fetched from the InfoPage component */

class InfoPageView extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(props.page.content)),
        new CompositeDecorator(decorator)
      )
    }
  }
  onChange = editorState => this.setState({ editorState })
  onClick = e => {
    e.preventDefault()

    const { editPage, match, page } = this.props
    editPage(page.content, match.params.name)
  }
  render() {
    const { updated_by, updated_at } = this.props.page
    const { isAuthenticated, user } = this.props
    console.log(this.props)
    return (
      <Container>
        {isAuthenticated && (
          <ToolbarNav>
            <Flex>
              <Box>
                <TextInfo>
                  <strong>
                    <FontAwesome name="user" /> {updated_by}
                  </strong>{" "}
                  edited {timeSince(updated_at)} ago
                </TextInfo>
              </Box>
              <Box ml="auto">
                <div>
                  {/* need to implement custom label */}
                  <Label>Curator</Label> &nbsp; &nbsp;
                  <InlineLink onClick={this.onClick}>
                    <FontAwesome name="pencil" title="Edit page" />
                  </InlineLink>
                </div>
              </Box>
            </Flex>
          </ToolbarNav>
        )}

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
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { editPage })(InfoPageView)
