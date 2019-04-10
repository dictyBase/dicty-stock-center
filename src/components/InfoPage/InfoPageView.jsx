// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Editor,
  EditorState,
  convertFromRaw,
  CompositeDecorator,
} from "draft-js"
import findLinkEntities from "utils/findLinkEntities"
import { ContentAPI } from "utils/apiClasses"
import Link from "components/Link"
import Authorization from "components/authentication/Authorization"
import ErrorNotification from "components/authentication/ErrorNotification"
import timeSince from "utils/timeSince"
import { editPage } from "actions/page"
import { fetchUserInfo } from "actions/auth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Flex, Box } from "rebass"
import { Container, ToolbarNav, TextInfo, Label, InlineLink } from "styles"

const decorator = [
  {
    strategy: findLinkEntities,
    component: Link,
  },
]

const error =
  "Your login token is expired. Please log out and then log back in to regain full user access."

type Props = {
  /** React Router's match object */
  match: Object,
  /** action creator for editing the current page content */
  editPage: Function,
  /** action creator to fetch a non-authenticated user's information */
  fetchUserInfo: Function,
  /** the object that contains page data from current state */
  page: Object,
  /** boolean representing whether the user is logged in or not */
  isAuthenticated: boolean,
}

type State = {
  editorState: EditorState,
}

/** Displays the info page data that was fetched from the InfoPage component */

export class InfoPageView extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(props.page.data.attributes.content)),
        new CompositeDecorator(decorator),
      ),
    }
  }

  componentDidMount() {
    const { isAuthenticated, page, fetchUserInfo } = this.props
    if (isAuthenticated) {
      const fetchedUser = new ContentAPI(page).getUser()
      fetchUserInfo(fetchedUser)
    }
  }

  onChange = (editorState: EditorState) => this.setState({ editorState })

  onClick = (e: SyntheticEvent<>) => {
    e.preventDefault()

    const { editPage, match, page } = this.props
    editPage(page.data.attributes.content, match.params.name)
  }

  render() {
    const { updated_at } = this.props.page.data.attributes
    const { isAuthenticated } = this.props

    return (
      <Container>
        {isAuthenticated && (
          <Authorization
            render={({ canEditPages, fetchedUserData, verifiedToken }) => (
              <div>
                {canEditPages && verifiedToken === false && (
                  <ErrorNotification error={error} />
                )}
                <br />
                {canEditPages && fetchedUserData && (
                  <ToolbarNav>
                    <Flex>
                      <Box>
                        <TextInfo>
                          <strong>
                            <FontAwesomeIcon icon="user" />{" "}
                            {fetchedUserData.getFullName()}
                          </strong>{" "}
                          edited {timeSince(updated_at)} ago
                        </TextInfo>
                      </Box>
                      <Box ml="auto">
                        <Label>{fetchedUserData.getRoles()}</Label> &nbsp;
                        {verifiedToken && (
                          <InlineLink onClick={this.onClick}>
                            <FontAwesomeIcon
                              icon="pencil-alt"
                              title="Edit page"
                            />
                          </InlineLink>
                        )}
                      </Box>
                    </Flex>
                  </ToolbarNav>
                )}
              </div>
            )}
          />
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

export const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(
  mapStateToProps,
  { editPage, fetchUserInfo },
)(InfoPageView)
