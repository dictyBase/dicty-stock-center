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
  CodeBlockButton
} from "draft-js-buttons"
import { saveEditing, cancelEditing } from "actions/page"
import { Flex, Box } from "rebass"
import {
  Container,
  ToolbarNav,
  EditorStyle,
  EditPanel,
  StaticToolbar,
  DefaultButton,
  SuccessButton
} from "styles"
import { NAMESPACE } from "constants/index"

// Set up Draft.js toolbar and plugins
const undoPlugin = createUndoPlugin()
const toolbarLinkPlugin = createToolbarLinkPlugin({
  inputPlaceholder: "Insert URL here..."
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
    RedoButton
  ]
})
const { Toolbar } = toolbarPlugin
const plugins = [toolbarPlugin, toolbarLinkPlugin, undoPlugin]

class EditInfoPage extends Component {
  constructor(props) {
    super(props)

    if (props.content) {
      this.state = {
        editorState: EditorState.createWithContent(
          convertFromRaw(JSON.parse(props.content))
        )
      }
    }
  }

  onChange = editorState => this.setState({ editorState })
  focus = () => this.refs.editor.focus()
  onSave = () => {
    const { editorState } = this.state
    const { id, updated_by, saveEditing } = this.props
    const rawData = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    )
    const body = {
      id: id,
      data: {
        id: id,
        type: "contents",
        attributes: {
          updated_by: updated_by,
          content: rawData
        }
      }
    }
    saveEditing(id, body)
  }
  onCancel = () => {
    const { cancelEditing, match } = this.props
    const slugName = `${NAMESPACE}-${match.params.name}`
    cancelEditing(slugName)
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
              <DefaultButton
                type="button"
                className={`block`}
                onClick={this.onCancel}>
                Cancel
              </DefaultButton>
            </Box>
            <Box width="25%">
              <SuccessButton
                type="button"
                className={`block`}
                onClick={this.onSave}>
                Save
              </SuccessButton>
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
    updated_by: state.page[slugName].data.attributes.updated_by,
    id: state.page[slugName].data.id
  }
}

export default connect(mapStateToProps, { saveEditing, cancelEditing })(
  EditInfoPage
)
