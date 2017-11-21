import React, { Component } from 'react'
import {Editor, EditorState, convertFromRaw} from 'draft-js'
import simpleStorage from 'simplestorage.js'
import { Grid, Cell } from 'radium-grid'
// import blockRenderer from 'components/CustomBlocks'

const step1 =
`To find the item(s) you want, go to the catalogs, or Search the Dicty \
Stock Center. You can search for strains (including bacterial strains) \
or plasmids with various search fields.`

const step2 =
`Following searching, click the Name (in blue color) and you will be directed \
to a new window containing detailed strain or plasmid information.`

const step3 =
`Click Add to Cart at the bottom of the page and the item will be included in \
the cart. Click the blue shopping cart symbol in the upper right to see what \
has been ordered so far. Once everything you need is in the shopping cart, \
click Check Out at the bottom of the page.`

const rawContent = {
    entityMap: {},
    blocks: [
        {
            text: 'Ordering Procedures for Strains or Plasmids',
            type: 'header-one'
        },
        {
            text: 'Step 1',
            type: 'header-three'
        },
        {
            text: step1,
            type: 'unstyled'
        },
        {
            text: 'Step 2',
            type: 'header-three'
        },
        {
            text: step2,
            type: 'unstyled'
        },
        {
            text: 'Step 3',
            type: 'header-three'
        },
        {
            text: step3,
            type: 'unstyled'
        }

    ]
}

export default class Page extends Component {
    displayName = 'page component'
    constructor(props) {
        super(props)
        const page = this.props.match.params.name
        this.state = {
            editorState: simpleStorage.get(page) ? EditorState.createWithContent(
                convertFromRaw(simpleStorage.get(page))
            ) : EditorState.createWithContent(
                convertFromRaw(rawContent)
            )
        }
    }
    onClick = (e) => {
        const { editorState } = this.state
        const { pageActions, match } = this.props
        e.preventDefault()
        pageActions.editPage(
            editorState.getCurrentContent(),
            match.params.name
        )
    }
    render() {
        const { editorState } = this.state
        return (
          <div className="container">
              <Grid cellWidth="1">
                  <Cell align="right">
                      <a href="#" onClick={ this.onClick }>
                        <i className="fa fa-2x fa-pencil" title="Edit page"></i>
                      </a>
                  </Cell>
                  <Cell>
                      <Editor
                        editorState={ editorState }
                        ref="editor"
                        readOnly
                      />
                  </Cell>
              </Grid>
          </div>
        )
    }
}
