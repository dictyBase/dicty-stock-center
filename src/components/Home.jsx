import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import InlineEditor from './editor/InlineEditor'
import LinkList from './LinkList'

import 'styles/custom.scss'

export default class Home extends Component {
    displayName = 'homepage component';
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.pageActions.fetchHomepage()
    }
    renderGreeting = () => {
        const { user } = this.props.auth
        return (
            <span>Hello, { user.name }</span>
        )
    }
    render() {
        const { user } = this.props.auth
        const { content, title } = this.props.page
        return (
            <div className="container">
                <Grid cellWidth="1">
                    <Cell>{ user && this.renderGreeting() }</Cell>
                    <Cell>
                        <h1 className="page-header">
                            { title }
                        </h1>
                    </Cell>
                    <Cell>
                        <p>{ content.intro }</p>
                    </Cell>
                </Grid>
                <Grid smallCellWidth="1">
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell>
                                <InlineEditor
                                  auth={ this.props.auth }
                                  rawContent={ content.about }/>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    <LinkList list={ content.links }/>
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    <LinkList list={ content.info }/>
                                </div>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-gray">
                                    <h4>Availability</h4>
                                    { content.availability.map((item, index) => {
                                        return (
                                            <h5 key={ index }>
                                                <strong>{ item.amount }</strong> { item.name }
                                            </h5>
                                        )
                                    }) }
                                </div>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    <LinkList list={ content.downloads } title="Download / View"/>
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell align="center">
                                <figure>
                                  <img className="img-responsive"
                                    src="http://wiki.dictybase.org/dictywiki/images/c/cd/DG1100.jpg"
                                  />
                                  <figcaption>
                                      The mutant pictures shown here here
                                      have been provided by Bill Loomis.
                                      Many mutants are available at the DSC
                                  </figcaption>
                                </figure>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-gray">
                                    <LinkList list={ content.materials } />
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
