import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createUndoPlugin from 'draft-js-undo-plugin'
import createToolbarPlugin from 'draft-js-static-toolbar-plugin'
import createToolbarLinkPlugin from 'draft-js-toolbar-link-plugin'
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
} from 'draft-js-buttons'
import { editInline, saveInlineEditing } from 'actions/page'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'
import {
  ToolbarNav,
  EditPanel,
  StaticToolbar,
  TextInfo,
  DefaultButton,
  SuccessButton,
  InlineLink
} from 'styles'

// Set up Draft.js toolbar and plugins
const undoPlugin = createUndoPlugin()
const toolbarLinkPlugin = createToolbarLinkPlugin({
  inputPlaceholder: 'Insert URL here...'
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

class OtherMaterialsInlineEditor extends Component {
  displayName = 'inline editor for OtherMaterials component'
  constructor(props) {
    super(props)

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
    const { id, updated_by, saveInlineEditing } = this.props
    const rawData = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    )
    const body = {
      id: id,
      data: {
        id: id,
        type: 'contents',
        attributes: {
          updated_by: updated_by,
          content: rawData
        }
      }
    }
    saveInlineEditing(id, body)
    this.setState({
      readOnly: true
    })
  }
  onCancel = () => {
    this.setState({
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(this.props.page.data.attributes.content)),
        this.decorator
      ),
      readOnly: true
    })
  }
  renderToolbar = () => {
    return (
      <ToolbarNav>
        <StaticToolbar>
          <Toolbar />
        </StaticToolbar>
      </ToolbarNav>
    )
  }
  render() {
    const { editorState, readOnly } = this.state
    const { isAuthenticated } = this.props

    return (
      <EditPanel>
        <Flex wrap>
          <Box w={'90%'}>{!readOnly && this.renderToolbar()}</Box>
          <Box mt={1}>
            <Editor
              editorState={editorState}
              onChange={this.onChange}
              plugins={plugins}
              ref="{(element) => { this.editor = element }}"
              readOnly={readOnly}
            />
            {isAuthenticated &&
              readOnly && (
                <TextInfo>
                  <InlineLink onClick={this.onEdit} title="Edit">
                    <FontAwesome name="pencil" /> Edit
                  </InlineLink>
                </TextInfo>
              )}
          </Box>
          <Box width={'40%'} mr={1} mt={1}>
            {!readOnly && (
              <DefaultButton
                className={`block`}
                type="button"
                onClick={this.onCancel}>
                Cancel
              </DefaultButton>
            )}
          </Box>
          <Box width={'40%'} mt={1}>
            {!readOnly && (
              <SuccessButton
                className={`block`}
                type="button"
                onClick={this.onSave}>
                Save
              </SuccessButton>
            )}
          </Box>
        </Flex>
      </EditPanel>
    )
  }
}

const mapStateToProps = state => {
  const slugName = 'dsc-other-materials'
  return {
    isAuthenticated: state.auth.isAuthenticated,
    content: state.page[slugName].data.attributes.content,
    id: state.page[slugName].data.id,
    updated_by: state.page[slugName].data.attributes.updated_by
  }
}

export default connect(mapStateToProps, { editInline, saveInlineEditing })(
  OtherMaterialsInlineEditor
)
