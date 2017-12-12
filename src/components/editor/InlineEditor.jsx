import React, { Component } from 'react'
import { EditorState, convertFromRaw } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createUndoPlugin from 'draft-js-undo-plugin'
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin'
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
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'
import { ToolbarNav, EditPanel, StaticToolbar, TextInfo } from 'styles'
import { DefaultButton, SuccessButton } from 'styles/buttons'

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
        Separator,
        HeadlineOneButton,
        HeadlineTwoButton,
        HeadlineThreeButton,
        Separator,
        UnorderedListButton,
        OrderedListButton,
        BlockquoteButton,
        CodeBlockButton,
        LinkButton,
        Separator,
        UndoButton,
        RedoButton
    ]
})
const { Toolbar } = toolbarPlugin
const plugins = [toolbarPlugin, toolbarLinkPlugin, undoPlugin]

export default class InlineEditor extends Component {
    displayName = 'inline editor component'
    constructor(props) {
        super(props)

        this.state = {
            editorState: EditorState.createWithContent(
                convertFromRaw(this.props.rawContent)
            ),
            showURLInput: false,
            urlValue: '',
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
    }
    onSave = () => {
        // save new content
        this.setState({
            showURLInput: false,
            urlValue: '',
            readOnly: true
        })
    }
    onCancel = () => {
        // cancel editing
        this.setState({
            editorState: EditorState.createWithContent(
                convertFromRaw(this.props.rawContent),
                this.decorator
            ),
            showURLInput: false,
            urlValue: '',
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
        const { auth } = this.props
        return (
            <EditPanel>
                <Flex wrap >
                    <Box w={ "90%" }>
                        { !readOnly && this.renderToolbar() }
                    </Box>
                    <Box mt={ 1 }>
                        <Editor
                            editorState={ editorState }
                            onChange={ this.onChange }
                            plugins={ plugins }
                            ref="{(element) => { this.editor = element }}"
                            readOnly={ readOnly }
                        />
                        { auth.isAuthenticated &&
                            readOnly && (
                                <TextInfo>
                                    <a
                                        href="#"
                                        onClick={ this.onEdit }
                                        title="Edit">
                                        <FontAwesome name="pencil" /> Edit
                                    </a>
                                </TextInfo>
                            ) }
                    </Box>
                    <Box width={ "40%" } mr={ 1 } mt={ 1 }>
                        { !readOnly && (
                            <DefaultButton
                                block
                                type="button"
                                onClick={ this.onCancel }>
                                Cancel
                            </DefaultButton>
                        ) }
                    </Box>
                    <Box width={ "40%" } mt={ 1 }>
                        { !readOnly && (
                            <SuccessButton
                                block
                                type="button"
                                onClick={ this.onSave }>
                                Save
                            </SuccessButton>
                        ) }
                    </Box>
                </Flex>
            </EditPanel>
        )
    }
}
