import React, { useRef, useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import { useHistory, useParams } from "react-router-dom"
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
} from "draft-js-buttons"
import useAuthorization from "hooks/useAuthorization"
import { UPDATE_CONTENT } from "graphql/mutations"
import "draft-js-static-toolbar-plugin/lib/plugin.css"

const styles = () => ({
  editor: {
    // boxSizing: "border-box",
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

/**
 * Allows editing of the info page components (i.e. Deposit, Payment, Order)
 */
const EditInfoPage = ({ classes, location }) => {
  const {
    state: { data },
  } = location
  const undoPlugin = createUndoPlugin()
  const toolbarLinkPlugin = createToolbarLinkPlugin({
    inputPlaceholder: "Insert URL here...",
  })
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(convertFromRaw(JSON.parse(data.content))),
  )
  const [{ plugins, Toolbar }] = useState(() => {
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
        toolbarLinkPlugin.LinkButton,
        undoPlugin.UndoButton,
        undoPlugin.RedoButton,
      ],
    })
    const { Toolbar } = toolbarPlugin
    const plugins = [toolbarPlugin, undoPlugin, toolbarLinkPlugin]
    return {
      plugins,
      Toolbar,
    }
  })
  const { user } = useAuthorization()
  const [updateContent] = useMutation(UPDATE_CONTENT)
  const history = useHistory()
  const { name } = useParams()

  const editorRef = useRef<any>(null)

  const onSave = () => {
    const rawData = JSON.stringify(
      convertToRaw(editorState.getCurrentContent()),
    )
    updateContent({
      variables: {
        input: {
          id: data.id,
          updated_by: user.id,
          content: rawData,
        },
      },
    })
    setEditorState(
      EditorState.createWithContent(convertFromRaw(JSON.parse(data.content))),
    )
    history.push(`/information/${name}`)
  }

  const onCancel = () => {
    history.push(`/information/${name}`)
  }

  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <Toolbar />
      </div>
      <div className={classes.editor}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          plugins={plugins}
          ref={editor => (editorRef.current = editor)}
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
            onClick={onCancel}>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            className={classes.saveButton}
            size="small"
            variant="contained"
            color="primary"
            onClick={onSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(EditInfoPage)
