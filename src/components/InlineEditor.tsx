// @flow
import React, { useState, useRef } from "react"
import { useMutation } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import Tooltip from "@material-ui/core/Tooltip"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import { EditorState, convertFromRaw, convertToRaw } from "draft-js"
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
import { UPDATE_CONTENT } from "queries/queries"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "./inlineEditorStyles"
import "draft-js-static-toolbar-plugin/lib/plugin.css"

type Props = {
  data: {
    id: string
    updated_by: string
    content: string
    slug: string
  }
}

/**
 * Inline editor for all inline editable content
 */

const InlineEditor = ({ data }: Props) => {
  const classes = useStyles()
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
  const [readOnly, setReadOnly] = React.useState(true)
  const { canEditPages, verifiedToken, user } = useAuthorization()
  const [updateContent] = useMutation(UPDATE_CONTENT)

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
    setReadOnly(true)
  }

  const onCancel = () => {
    setEditorState(
      EditorState.createWithContent(convertFromRaw(JSON.parse(data.content))),
    )
    setReadOnly(true)
  }

  return (
    <div>
      <Grid
        container
        className={classes.container}
        onClick={() => editorRef.current && editorRef.current.focus()}>
        <Grid item className={classes.editorGrid}>
          <Editor
            editorState={editorState}
            onChange={editorState => setEditorState(editorState)}
            plugins={plugins}
            ref={editor => (editorRef.current = editor)}
            readOnly={readOnly}
          />
          {canEditPages && verifiedToken && (
            <div>
              {canEditPages && verifiedToken && readOnly && (
                <Tooltip title="Edit Page" placement="bottom">
                  <IconButton
                    className={classes.editButton}
                    onClick={() => setReadOnly(false)}>
                    <FontAwesomeIcon icon="pencil-alt" />
                    &nbsp;Edit
                  </IconButton>
                </Tooltip>
              )}
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          {!readOnly && (
            <Toolbar>
              {(externalProps: any) => (
                <div>
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                  <UnderlineButton {...externalProps} />
                  <CodeButton {...externalProps} />
                  <UnorderedListButton {...externalProps} />
                  <HeadlineOneButton {...externalProps} />
                  <HeadlineTwoButton {...externalProps} />
                  <HeadlineThreeButton {...externalProps} />
                  <UnorderedListButton {...externalProps} />
                  <OrderedListButton {...externalProps} />
                  <BlockquoteButton {...externalProps} />
                </div>
              )}
            </Toolbar>
          )}
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-end">
            <Grid item xs={2} className={classes.cancelButtonGrid}>
              {!readOnly && (
                <Button
                  className={classes.cancelButton}
                  size="small"
                  variant="contained"
                  onClick={onCancel}>
                  Cancel
                </Button>
              )}
            </Grid>
            <Grid item xs={2} className={classes.saveButtonGrid}>
              {!readOnly && (
                <Button
                  className={classes.saveButton}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={onSave}>
                  Save
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default InlineEditor
