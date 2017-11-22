import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

export default class Loader extends Component {
    displayName = 'loading component';
    static propTypes = {
        title: PropTypes.string,
        message: PropTypes.string
    }
    render() {
        const { title, message } = this.props
        return (
            <div className="container">
                <Grid cellWidth="1">
                    <Cell align="center">
                        <div className="text-center">
                            <h1>{ title && title }</h1>
                            <i className="fa fa-5x fa-spinner fa-pulse fa-fw margin-bottom"></i>
                            <h4>{ message && message }</h4>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
