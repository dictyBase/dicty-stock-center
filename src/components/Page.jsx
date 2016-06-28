import React, { Component } from 'react'
import {Editor, EditorState, convertFromRaw} from 'draft-js'
import simpleStorage from 'simplestorage.js'
// import blockRenderer from 'components/CustomBlocks'

// const about = `
// In the fall of 2002 the Dicty Stock Center (DSC) opened at Columbia University
// in New York City as a repository for Dictyostelium discoideum and other
// Dictiosteliids under the direction of Dr. Richard Kessin, and curated by Mr.
//     Jakob Franke. The Dicty Stock Center was relocated to Northwestern
// University in April of 2009. As of July 2015, nearly 2,000 strains can be
// acquired from the stock center. The strains available from the stock center are
// in the strain catalog on our website. Also as of July 2015, over 800 plasmids
// are available and the plasmid catalog. Both collections are rapidly expanding.
//     Several strain catalogs are listed here. Additionally we hold other
// materials such as DNA libraries and antobodies, accessible here. Starting in
// August 2105, the National Institute of Health mandates that we charge for stock
//     center materials.
// `

// const rawContent = {
//     blocks: [
//         {
//             text: 'About dicty stock center',
//             type: 'unstyled'
//         },
//         {
//             text: '',
//             type: 'unstyled'
//         },
//         {
//             text: about,
//             type: 'unstyled'
//         },
//         {
//             text: '',
//             type: 'unstyled'
//         }
//     ],
//     entityMap: {}
// }

export default class Page extends Component {
    displayName = 'page component'
    constructor(props) {
        super(props)
        this.state = {
            editorState: simpleStorage.get('page') ? EditorState.createWithContent(
                convertFromRaw(simpleStorage.get('page'))
            ) : EditorState.createEmpty()
        }
    }
    onClick = (e) => {
        const { editorState } = this.state
        const { pageActions, routeProps } = this.props
        e.preventDefault()
        pageActions.editPage(
            editorState.getCurrentContent(),
            routeProps.params.name
        )
    }
    render() {
        const { editorState } = this.state
        return (
          <div className="container">
            <div className="row">
              <div className="col-xs-1">
                <a href="#" onClick={ this.onClick }>
                  <i className="fa fa-2x fa-pencil" title="Edit page"></i>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <Editor
                  editorState={ editorState }
                  ref="editor"
                  readOnly
                />
              </div>
            </div>
          </div>
        )
    }
}
