// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
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
import { Flex, Box } from "rebass"
import {
  Container,
  ToolbarNav,
  EditorStyle,
  EditPanel,
  StaticToolbar,
  CancelButton,
  SuccessBlockButton,
} from "styles"
import { NAMESPACE } from "constants/dsctypes"

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

    return (
      <Container>
        <EditPanel>
          <ToolbarNav>
            <StaticToolbar>
              <Toolbar />
            </StaticToolbar>
          </ToolbarNav>
          <EditorStyle>
            <Editor
              editorState={editorState}
              onChange={this.onChange}
              plugins={plugins}
              ref="{(element) => { this.editor = element }}"
            />
          </EditorStyle>
          <Flex justify="space-between">
            <Box width="25%" />
            <Box width="25%" />
            <Box width="25%" mr={1}>
              <CancelButton type="button" onClick={this.onCancel}>
                Cancel
              </CancelButton>
            </Box>
            <Box width="25%">
              <SuccessBlockButton type="button" onClick={this.onSave}>
                Save
              </SuccessBlockButton>
            </Box>
          </Flex>
        </EditPanel>
      </Container>
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

export default connect(
  mapStateToProps,
  { saveEditing, cancelEditing },
)(EditInfoPage)
