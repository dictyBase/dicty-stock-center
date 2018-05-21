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
import { ContentAPI } from "utils/apiClasses"
import Link from "components/Link"
import Authorization from "components/authentication/Authorization"
import timeSince from "utils/timeSince"
import { AuthenticatedUser } from "utils/apiClasses"
import { editPage } from "actions/page"
import { fetchUserInfo } from "actions/auth"
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
  /** action creator for editing the current page content */
  editPage: Function,
  /** action creator to fetch a non-authenticated user's information */
  fetchUserInfo: Function,
  /** the object that contains page data from current state */
  page: Object,
  /** contains the object representing the fetched user's data */
  fetchedUserData: Object,
  /** contains the object representing the logged in user's data */
  loggedInUser: Object
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
        convertFromRaw(JSON.parse(props.page.data.attributes.content)),
        new CompositeDecorator(decorator)
      )
    }
  }
  componentDidMount() {
    const fetchedUser = new ContentAPI(this.props.page).getUser()
    this.props.fetchUserInfo(fetchedUser)
  }
  onChange = editorState => this.setState({ editorState })
  onClick = e => {
    e.preventDefault()

    const { editPage, match, page } = this.props
    editPage(page.data.attributes.content, match.params.name)
  }
  render() {
    const { updated_at } = this.props.page.data.attributes
    const { fetchedUserData, loggedInUser } = this.props

    return (
      <Container>
        <Authorization
          render={({ canEditPages }) => {
            return (
              <div>
                {canEditPages && (
                  <ToolbarNav>
                    <Flex>
                      <Box>
                        <TextInfo>
                          <strong>
                            <FontAwesome name="user" />{" "}
                            {fetchedUserData.getFullName()}
                          </strong>{" "}
                          edited {timeSince(updated_at)} ago
                        </TextInfo>
                      </Box>
                      <Box ml="auto">
                        <Label>{fetchedUserData.getRoles()}</Label> &nbsp;
                        {loggedInUser.canOverwrite(fetchedUserData.getId()) && (
                          <InlineLink onClick={this.onClick}>
                            <FontAwesome name="pencil" title="Edit page" />
                          </InlineLink>
                        )}
                      </Box>
                    </Flex>
                  </ToolbarNav>
                )}
              </div>
            )
          }}
        />

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
  const fetchedUserData = new AuthenticatedUser(state.auth.fetchedUserData)
  const loggedInUser = new AuthenticatedUser(state.auth.user)
  return {
    loggedInUser: loggedInUser,
    fetchedUserData: fetchedUserData
  }
}

export default connect(mapStateToProps, { editPage, fetchUserInfo })(
  InfoPageView
)
