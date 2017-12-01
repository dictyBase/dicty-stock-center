import React, { Component } from 'react'
import findEntities from 'utils/findEntities'
import BlockToolbar from 'components/BlockToolbar'
import InlineToolbar from 'components/InlineToolbar'
import EntityToolbar from 'components/EntityToolbar'
import EditorLink from 'components/Link'
import { blockTypes, inlineTypes } from 'components/ToolSpec'
import {
    Editor,
    EditorState,
    RichUtils,
    convertFromRaw,
    Entity,
    CompositeDecorator,
    Modifier
} from 'draft-js'
import { Flex, Box } from 'rebass'
import { ToolbarNav, EditPanel, TextInfo } from 'styles'

export default class InlineEditor extends Component {
    displayName = 'inline editor component'
    constructor(props) {
        super(props)
        this.decorator = new CompositeDecorator([
            {
                strategy: findEntities.bind(null, 'link'),
                component: EditorLink
            }
        ])
        this.state = {
            editorState: EditorState.createWithContent(
                convertFromRaw(this.props.rawContent),
                this.decorator
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
    handleKeyCommand = command => {
        const { editorState } = this.state
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            this.onChange(newState)
            return true
        }
        return false
    }
    addLineBreak = () => {
        let newContent
        let newEditorState
        const { editorState } = this.state
        const content = editorState.getCurrentContent()
        const selection = editorState.getSelection()
        const block = content.getBlockForKey(selection.getStartKey())

        if (block.type === 'code-block') {
            newContent = Modifier.insertText(content, selection, '\n')
            newEditorState = EditorState.push(
                editorState,
                newContent,
                'add-new-line'
            )
            this.onChange(newEditorState)
            return true
        }
        return false
    }
    handleReturn = e => {
        if (e.metaKey === true) {
            return this.addLineBreak()
        }
        return false
    }
    onToggleBlock = type => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, type))
    }
    onToggleInline = type => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, type))
    }
    onURLChange = e => {
        this.setState({ urlValue: e.target.value })
    }
    onLinkInputKeyDown = e => {
        if (e.which === 13) {
            this.confirmLink(e)
        }
    }
    addLink = () => {
        const { editorState } = this.state
        const selection = editorState.getSelection()
        if (!selection.isCollapsed()) {
            this.setState(
                {
                    showURLInput: true,
                    urlValue: ''
                },
                () => {
                    setTimeout(() => this.refs.url.focus(), 0)
                }
            )
        }
    }
    confirmLink = e => {
        e.preventDefault()
        const { editorState, urlValue } = this.state
        const entityKey = Entity.create('link', 'MUTABLE', { url: urlValue })
        this.setState(
            {
                editorState: RichUtils.toggleLink(
                    editorState,
                    editorState.getSelection(),
                    entityKey
                ),
                showURLInput: false,
                urlValue: ''
            },
            () => {
                setTimeout(() => this.refs.editor.focus(), 0)
            }
        )
    }
    removeLink = () => {
        const { editorState } = this.state
        const selection = editorState.getSelection()
        if (selection.isCollapsed()) {
            return
        }
        this.onChange(RichUtils.toggleLink(editorState, selection, null))
    }
    renderGreeting = () => {
        const { user } = this.props.auth
        return <span>Hello, { user.name }</span>
    }
    renderToolbar = () => {
        const entityControls = [
            {
                label: 'Add Link',
                action: this.addLink,
                icon: <i className="fa fa-link" />
            },
            {
                label: 'Remove Link',
                action: this.removeLink,
                icon: <i className="fa fa-chain-broken" />
            }
        ]
        let urlInput
        if (this.state.showURLInput) {
            urlInput = (
                <div>
                    <div className="input-group">
                        <input
                            className="form-control input-sm"
                            onChange={ this.onURLChange }
                            ref="url"
                            type="text"
                            value={ this.state.urlValue }
                            onKeyDown={ this.onLinkInputKeyDown }
                        />
                        <span className="input-group-btn">
                            <button
                                className="btn btn-default btn-sm"
                                onMouseDown={ this.confirmLink }>
                                Confirm Link
                            </button>
                        </span>
                    </div>
                </div>
            )
        }
        const { editorState } = this.state
        return (
            <ToolbarNav>
                <Flex>
                    <Box>
                        <BlockToolbar
                            editorState={ editorState }
                            clickFn={ this.onToggleBlock }
                            toolSpec={ blockTypes }
                        />
                    </Box>
                    <Box>
                        <InlineToolbar
                            editorState={ editorState }
                            clickFn={ this.onToggleInline }
                            toolSpec={ inlineTypes }
                        />
                    </Box>
                    <Box>
                        <EntityToolbar
                            editorState={ editorState }
                            toolSpec={ entityControls }
                        />
                    </Box>
                    <Box>{ urlInput }</Box>
                </Flex>
            </ToolbarNav>
        )
    }
    render() {
        const { editorState, readOnly } = this.state
        const { auth } = this.props
        return (
            <EditPanel>
                <Flex>
                    <Box>{ !readOnly && this.renderToolbar() }</Box>
                    <Box>
                        <div>
                            <Editor
                                editorState={ editorState }
                                onChange={ this.onChange }
                                handleReturn={ this.handleReturn }
                                handleKeyCommand={ this.handleKeyCommand }
                                ref="editor"
                                readOnly={ readOnly }
                            />
                            { auth.isAuthenticated &&
                                readOnly && (
                                    <TextInfo>
                                        <a
                                            href="#"
                                            onClick={ this.onEdit }
                                            title="Edit">
                                            <i className="fa fa-pencil" /> Edit
                                        </a>
                                    </TextInfo>
                                ) }
                        </div>
                    </Box>
                    <Box>
                        { !readOnly && (
                            <button
                                style={ { margin: '5px auto' } }
                                type="button"
                                className="btn btn-block btn-default"
                                onClick={ this.onCancel }>
                                Cancel
                            </button>
                        ) }
                    </Box>
                    <Box>
                        { !readOnly && (
                            <button
                                style={ { margin: '5px auto' } }
                                type="button"
                                className="btn btn-block btn-success"
                                onClick={ this.onSave }>
                                Save
                            </button>
                        ) }
                    </Box>
                </Flex>
            </EditPanel>
        )
    }
}
