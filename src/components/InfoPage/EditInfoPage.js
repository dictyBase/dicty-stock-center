// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { EditorState, convertToRaw, convertFromRaw } from "draft-js"
import Editor from "draft-js-plugins-editor"
import createUndoPlugin from "draft-js-undo-plugin"
import createToolbarPlugin from "draft-js-static-toolbar-plugin"
import createToolbarLinkPlugin from "draft-js-toolbar-link-plugin"
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from "draft-js-buttons"
import { saveEditing, cancelEditing } from "actions/page"
import { NAMESPACE } from "constants/dsctypes"
import "draft-js-static-toolbar-plugin/lib/plugin.css"

// Set up Draft.js toolbar and plugins
const undoPlugin = createUndoPlugin()
const toolbarLinkPlugin = createToolbarLinkPlugin({
  inputPlaceholder: "Insert URL here...",
})
const { LinkButton } = toolbarLinkPlugin
const { UndoButton, RedoButton } = undoPlugin
const toolbarPlugin = createToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
    LinkButton,
    UndoButton,
    RedoButton,
  ],
})
const { Toolbar } = toolbarPlugin
const plugins = [toolbarPlugin, toolbarLinkPlugin, undoPlugin]

const styles = theme => ({
  editor: {
    boxSizing: "border-box",
    border: "1px solid #ddd",
    cursor: "text",
    padding: "10px",
    borderRadius: "2px",
    marginBottom: "2em",
    background: "#fefefe",
    margin: "10px auto",

    "& a": {
      color: "#004080",
      textDecoration: "none",
    },
  },
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
  toolbar: {
    backgroundColor: "#fafafa",
    borderRadius: "2px",
    border: "1px solid #ddd",
    padding: "5px",
    width: "100%",
    display: "inline-block",
  },
  buttonGrid: {
    marginRight: "3px",
  },
  saveButton: {
    width: "100%",
    backgroundColor: "#15317e",
  },
  cancelButton: {
    width: "100%",
  },
})

type Props = {
  /** React Router's match object */
  match: Object,
  /** action creator to cancel editing */
  cancelEditing: Function,
  /** the ID number for the page content */
  id: string,
  /** the user's ID number */
  userId: string,
  /** action creator to save page content */
  saveEditing: Function,
  /** Material-UI styling */
  classes: Object,
}

type State = {
  editorState: EditorState,
}

/**
 * Allows editing of the info page components (i.e. Deposit, Payment, Order)
 */

export class EditInfoPage extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    if (props.content) {
      this.state = {
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(props.content)),
        ),
      }
    }
  }

  onChange = (editorState: EditorState) => this.setState({ editorState })

  focus = () => this.refs.editor.focus()

  onSave = () => {
    const { editorState } = this.state
    const { id, saveEditing, userId } = this.props
    const rawData = JSON.stringify(
      convertToRaw(editorState.getCurrentContent()),
    )
    const body = {
      id,
      data: {
        id,
        type: "contents",
        attributes: {
          updated_by: userId,
          content: rawData,
        },
      },
    }
    saveEditing(id, body)
  }

  onCancel = () => {
    const { cancelEditing, match } = this.props
    cancelEditing(`${match.params.name}`)
  }

  render() {
    const { editorState } = this.state
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <div className={classes.toolbar}>
          <Toolbar />
        </div>
        <div className={classes.editor}>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref="{(element) => { this.editor = element }}"
          />
        </div>
        <Grid container justify="space-between">
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={2} className={classes.buttonGrid}>
            <Button
              className={classes.cancelButton}
              size="small"
              variant="contained"
              onClick={this.onCancel}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              className={classes.saveButton}
              size="small"
              variant="contained"
              color="primary"
              onClick={this.onSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const slugName = `${NAMESPACE}-${ownProps.match.params.name}`
  return {
    content: state.page[slugName].data.attributes.content,
    id: state.page[slugName].data.id,
    userId: state.auth.user.data.id,
  }
}

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  { saveEditing, cancelEditing },
)(withStyles(styles)(EditInfoPage))
