/* eslint-disable react/jsx-no-bind */
// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
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
  CodeBlockButton,
} from "draft-js-buttons"
import Authorization from "components/authentication/Authorization"
import { editInline, saveInlineEditing, fetchInfoPage } from "actions/page"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  ToolbarNav,
  EditPanel,
  StaticToolbar,
  TextInfo,
  DefaultBlockButton,
  SuccessBlockButton,
} from "styles"

const styles = theme => ({
  inlineLink: {
    cursor: "pointer",
  },
})

type Props = {
  /** the object that contains page data from current state */
  page: Object,
  /** action creator that saves the inline content */
  saveInlineEditing: Function,
  /** action creator to edit the inline content */
  editInline: Function,
  /** action creator to fetch info page content */
  fetchInfoPage: Function,
  /** slug name to fetch */
  slug: string,
  /** Material-UI styling */
  classes: Object,
}

type State = {
  editorState: EditorState,
  readOnly: boolean,
}

/**
 * Inline editor for all inline editable content
 */

export class InlineEditor extends Component<Props, State> {
  undoPlugin: Object

  toolbarLinkPlugin: Object

  toolbarPlugin: Object

  constructor(props: any) {
    super(props)

    // Set up Draft.js toolbar and plugins
    // These have to be added in the constructor in order for multiple
    // editors to be used on the same page.
    this.undoPlugin = createUndoPlugin()
    this.toolbarLinkPlugin = createToolbarLinkPlugin({
      inputPlaceholder: "Insert URL here...",
    })

    this.toolbarPlugin = createToolbarPlugin({
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
        this.toolbarLinkPlugin.LinkButton,
        this.undoPlugin.UndoButton,
        this.undoPlugin.RedoButton,
      ],
    })

    this.state = {
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(props.page.data.attributes.content)),
      ),
      readOnly: true,
    }
  }

  onChange = (editorState: EditorState) => this.setState({ editorState })

  focus = () => this.refs.editor.focus()

  onEdit = (e: SyntheticEvent<>) => {
    e.preventDefault()
    this.setState({
      readOnly: false,
    })
    const { editInline, page } = this.props
    editInline(page.data.attributes.content)
  }

  onSave = () => {
    const { editorState } = this.state
    const { page, saveInlineEditing } = this.props
    const rawData = JSON.stringify(
      convertToRaw(editorState.getCurrentContent()),
    )
    const body = {
      id: page.data.id,
      data: {
        id: page.data.id,
        type: "contents",
        attributes: {
          updated_by: page.data.attributes.updated_by,
          content: rawData,
        },
      },
    }
    saveInlineEditing(page.data.id, body)
    this.setState({
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(this.props.page.data.attributes.content)),
      ),
      readOnly: true,
    })

    setTimeout(() => {
      this.props.fetchInfoPage(this.props.slug)
    }, 100)
  }

  onCancel = () => {
    this.setState({
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(this.props.page.data.attributes.content)),
      ),
      readOnly: true,
    })
  }

  renderToolbar = () => {
    const { Toolbar } = this.toolbarPlugin
    return (
      <ToolbarNav>
        <StaticToolbar>
          <Toolbar />
        </StaticToolbar>
      </ToolbarNav>
    )
  }

  render() {
    const plugins = [
      this.toolbarPlugin,
      this.toolbarLinkPlugin,
      this.undoPlugin,
    ]
    const { editorState, readOnly } = this.state
    const { classes } = this.props

    return (
      <EditPanel>
        <Grid container wrap="wrap">
          <Grid item xs={12}>
            {!readOnly && this.renderToolbar()}
          </Grid>
          <Grid item style={{ marginTop: "4px" }}>
            <Editor
              editorState={editorState}
              onChange={this.onChange}
              plugins={plugins}
              ref="{(element) => { this.editor = element }}"
              readOnly={readOnly}
            />
            {/* $FlowFixMe */}
            <Authorization
              render={({ canEditPages, verifiedToken }) => (
                <div>
                  {canEditPages && verifiedToken && readOnly && (
                    <TextInfo>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a
                        className={classes.inlineLink}
                        onClick={this.onEdit}
                        title="Edit">
                        <FontAwesomeIcon icon="pencil-alt" /> Edit
                      </a>
                    </TextInfo>
                  )}
                </div>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid
                item
                xs={4}
                style={{ marginRight: "4px", marginTop: "4px" }}>
                {!readOnly && (
                  <DefaultBlockButton type="button" onClick={this.onCancel}>
                    Cancel
                  </DefaultBlockButton>
                )}
              </Grid>
              <Grid item xs={4} style={{ marginTop: "4px" }}>
                {!readOnly && (
                  <SuccessBlockButton type="button" onClick={this.onSave}>
                    Save
                  </SuccessBlockButton>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </EditPanel>
    )
  }
}

export default connect(
  null,
  { editInline, saveInlineEditing, fetchInfoPage },
)(withStyles(styles)(InlineEditor))
