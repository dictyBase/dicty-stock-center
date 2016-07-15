import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import Panel from 'dicty-react-components/src/Panel'
import PanelHeader from 'dicty-react-components/src/PanelHeader'
import PanelTitle from 'dicty-react-components/src/PanelTitle'
import PanelBody from 'dicty-react-components/src/PanelBody'
import { Link } from 'react-router'
import 'styles/core.scss'

export default class MyDsc extends Component {
    displayName = 'user profile';
    render() {
        const { user, provider } = this.props.auth
        return (
            <div className="container">
                <Grid>
                    <Cell width="1">
                        <ol className="breadcrumb">
                          <li><Link to="/">Home</Link></li>
                          <li className="active">My DSC</li>
                        </ol>
                    </Cell>
                    <Cell>
                        <h1 className="page-header">My DSC</h1>
                    </Cell>
                    <Cell width="1">
                        <Panel>
                            <PanelHeader>
                                <PanelTitle>Personal Information</PanelTitle>
                            </PanelHeader>
                            <PanelBody>
                                <h3>Name: { user.name }</h3>
                                <h3>Email: { user.email }</h3>
                                <h3>Provider: { provider }</h3>
                            </PanelBody>
                        </Panel>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

