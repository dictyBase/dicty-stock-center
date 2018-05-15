// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
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
  CodeBlockButton
} from "draft-js-buttons"
import Authorization from "components/authentication/Authorization"
import { editInline, saveInlineEditing } from "actions/page"
import { Flex, Box } from "rebass"
import FontAwesome from "react-fontawesome"
import {
  ToolbarNav,
  EditPanel,
  StaticToolbar,
  TextInfo,
  DefaultBlockButton,
  SuccessBlockButton,
  InlineLink
} from "styles"

type Props = {
  /** the object that contains page data from current state */
  page: Object,
  /** checks if user is authenticated */
  isAuthenticated: boolean,
  /** the current user's ID number */
  id: string,
  /** value for who last updated the page */
  updated_by: string,
  /** action creator that saves the inline content */
  saveInlineEditing: Function,
  /** action creator to edit the inline content */
  editInline: Function
}

type State = {
  editorState: EditorState,
  readOnly: boolean
}

/**
 * Inline editor for the About page content
 */

class InlineEditor extends Component<Props, State> {
  constructor(props) {
    super(props)

    // Set up Draft.js toolbar and plugins
    // These have to be added in the constructor in order for multiple
    // editors to be used on the same page.
    this.undoPlugin = createUndoPlugin()
    this.toolbarLinkPlugin = createToolbarLinkPlugin({
      inputPlaceholder: "Insert URL here..."
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
        this.undoPlugin.RedoButton
      ]
    })

    this.state = {
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(props.page.data.attributes.content))
      ),
      readOnly: true
    }
  }
  onChange = editorState => this.setState({ editorState })
  focus = () => this.refs.editor.focus()
  onEdit = e => {
    e.preventDefault()
    this.setState({
      readOnly: false
    })
    const { editInline, page } = this.props
    editInline(page.data.attributes.content)
  }
  onSave = () => {
    const { editorState } = this.state
    const { page, saveInlineEditing } = this.props
    const rawData = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    )
    const body = {
      id: page.data.id,
      data: {
        id: page.data.id,
        type: "contents",
        attributes: {
          updated_by: page.data.attributes.updated_by,
          content: rawData
        }
      }
    }
    saveInlineEditing(page.data.id, body)
    this.setState({
      readOnly: true
    })
  }
  onCancel = () => {
    this.setState({
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(this.props.page.data.attributes.content))
      ),
      readOnly: true
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
      this.undoPlugin
    ]
    const { editorState, readOnly } = this.state

    return (
      <EditPanel>
        <Flex wrap>
          <Box w={"90%"}>{!readOnly && this.renderToolbar()}</Box>
          <Box mt={1}>
            <Editor
              editorState={editorState}
              onChange={this.onChange}
              plugins={plugins}
              ref="{(element) => { this.editor = element }}"
              readOnly={readOnly}
            />
            <Authorization
              render={({ canEditPages }) => {
                return (
                  <div>
                    {canEditPages &&
                      readOnly && (
                        <TextInfo>
                          <InlineLink onClick={this.onEdit} title="Edit">
                            <FontAwesome name="pencil" /> Edit
                          </InlineLink>
                        </TextInfo>
                      )}
                  </div>
                )
              }}
            />
          </Box>
          <Box width={"40%"} mr={1} mt={1}>
            {!readOnly && (
              <DefaultBlockButton type="button" onClick={this.onCancel}>
                Cancel
              </DefaultBlockButton>
            )}
          </Box>
          <Box width={"40%"} mt={1}>
            {!readOnly && (
              <SuccessBlockButton type="button" onClick={this.onSave}>
                Save
              </SuccessBlockButton>
            )}
          </Box>
        </Flex>
      </EditPanel>
    )
  }
}

export default connect(null, { editInline, saveInlineEditing })(InlineEditor)
