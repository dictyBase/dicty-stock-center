import React, { useRef, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
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
import Link from "components/Link"
import ErrorNotification from "components/authentication/ErrorNotification"
import timeSince from "utils/timeSince"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAuthStore } from "components/authentication/AuthStore"
import useAuthorization from "hooks/useAuthorization"

const styles = () => ({
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
    // fontWeight: "bold",
    lineHeight: 1,
    color: "#fff",
    // textAlign: "center",
    // whiteSpace: "nowrap",
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
  data: {
    content: string
    created_by: {
      id: string
      first_name: string
      last_name: string
      roles: Array<{
        role
      }>
    }
    updated_by: {
      id: string
      first_name: string
      last_name: string
      updated_at: string
      roles: Array<{
        role
      }>
    }
  }
  classes: {
    container: string
    toolbar: string
    textInfo: string
    content: string
    label: string
    editButton: string
    editor: string
  }
}

/** Displays the info page data that was fetched from the InfoPage component */

const InfoPageView = ({ data, classes }: Props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      convertFromRaw(JSON.parse(data.content)),
      // @ts-ignore
      new CompositeDecorator(decorator),
    ),
  )
  const history = useHistory()
  const { name } = useParams()
  const [{ isAuthenticated }] = useAuthStore()
  const { canEditPages, verifiedToken } = useAuthorization()

  const editorRef = useRef<any>(null)
  const onEdit = event => {
    event.preventDefault()
    history.push({
      pathname: `/information/${name}/edit`,
      state: {
        data: data,
      },
    })
  }

  const fullName = `${data.updated_by.first_name} ${data.updated_by.last_name}`
  const role = `${data.updated_by.roles[0].role}`
  return (
    <div className={classes.container}>
      {isAuthenticated && canEditPages && verifiedToken && (
        <div>
          {canEditPages && !verifiedToken && (
            <ErrorNotification error={error} />
          )}
          <br />
          {canEditPages && (
            <div className={classes.toolbar}>
              <Grid container alignItems="center">
                <Grid item>
                  <span className={classes.textInfo}>
                    <strong>
                      <FontAwesomeIcon icon="user" /> {fullName}
                    </strong>{" "}
                    edited {timeSince(data.updated_by.updated_at)} ago
                  </span>
                </Grid>
                <Grid item className={classes.content}>
                  <span className={classes.label}>{role}</span> &nbsp;
                  {verifiedToken && (
                    <Tooltip title="Edit Page" placement="bottom">
                      <IconButton
                        className={classes.editButton}
                        onClick={onEdit}>
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

      <Grid container>
        <Grid item className={classes.editor}>
          <Editor
            editorState={editorState}
            ref={editor => (editorRef.current = editor)}
            readOnly
            onChange={setEditorState}
            // @ts-ignore
            decorators={decorator}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(InfoPageView)
