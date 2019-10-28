// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Editor,
  EditorState,
  convertFromRaw,
  CompositeDecorator,
} from "draft-js"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import findLinkEntities from "utils/findLinkEntities"
import { ContentAPI } from "utils/apiClasses"
import Link from "components/Link"
import Authorization from "components/authentication/Authorization"
import ErrorNotification from "components/authentication/ErrorNotification"
import timeSince from "utils/timeSince"
import { editPage } from "actions/page"
import { fetchUserInfo } from "actions/auth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const styles = theme => ({
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "90%",
    "@media (min-width: 1300px)": {
      width: "80%",
    },
  },
  label: {
    display: "inline",
    padding: "0.2em 0.6em 0.3em",
    fontSize: "75%",
    fontWeight: "bold",
    lineHeight: 1,
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: "0.25em",
    backgroundColor: "#337ab7",
    "&:hover": {
      backgroundColor: "#337ab7",
    },
    "&:focus": {
      backgroundColor: "#337ab7",
    },
  },
  inlineLink: {
    cursor: "pointer",
  },
  content: {
    marginLeft: "auto",
  },
  toolbar: {
    backgroundColor: "#fafafa",
    borderRadius: "2px",
    border: "1px solid #ddd",
    padding: "5px",
    width: "100%",
    display: "inline-block",
  },
  editButton: {
    fontSize: "0.99em",
    color: "#337ab7",
    "&:hover": {
      color: "#337ab7",
      backgroundColor: "transparent",
    },
  },
  textInfo: {
    color: "#31708f",
    "&:hover": {
      color: "#245269",
    },
    "&:focus": {
      color: "#245269",
    },
  },
  editor: {
    "& a": {
      color: "#004080",
      textDecoration: "none",
    },
  },
})

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
  /** Material-UI styling */
  classes: Object,
}

type State = {
  editorState: EditorState,
}

/** Displays the info page data that was fetched from the InfoPage component */

export class InfoPageView extends Component<Props, State> {
  constructor(props: any) {
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

  onEdit = (e: SyntheticEvent<>) => {
    e.preventDefault()
    const { editPage, match, page } = this.props
    editPage(page.data.attributes.content, match.params.name)
  }

  render() {
    const { updated_at } = this.props.page.data.attributes
    const { isAuthenticated, classes } = this.props

    return (
      <div className={classes.container}>
        {isAuthenticated && (
          //$FlowFixMe
          <Authorization
            render={({ canEditPages, fetchedUserData, verifiedToken }) => (
              <div>
                {canEditPages && verifiedToken === false && (
                  <ErrorNotification error={error} />
                )}
                <br />
                {canEditPages && fetchedUserData && (
                  <div className={classes.toolbar}>
                    <Grid container alignItems="center">
                      <Grid item>
                        <span className={classes.textInfo}>
                          <strong>
                            <FontAwesomeIcon icon="user" />{" "}
                            {fetchedUserData.getFullName()}
                          </strong>{" "}
                          edited {timeSince(updated_at)} ago
                        </span>
                      </Grid>
                      <Grid item className={classes.content}>
                        <span className={classes.label}>
                          {fetchedUserData.getRoles()}
                        </span>{" "}
                        &nbsp;
                        {verifiedToken && (
                          <Tooltip title="Edit Page" placement="bottom">
                            <IconButton
                              className={classes.editButton}
                              onClick={this.onEdit}>
                              <FontAwesomeIcon icon="pencil-alt" />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Grid>
                    </Grid>
                  </div>
                )}
              </div>
            )}
          />
        )}

        <Grid container>
          <Grid item className={classes.editor}>
            <Editor
              editorState={this.state.editorState}
              ref="editor"
              readOnly
              onChange={this.onChange}
              decorators={decorator}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

type authState = {
  auth: {
    isAuthenticated: boolean,
  },
}

export const mapStateToProps = (state: authState) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  { editPage, fetchUserInfo },
)(withStyles(styles)(InfoPageView))
