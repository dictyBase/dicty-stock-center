import React, { Component, PropTypes } from 'react'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

export default class Loader extends Component {
    displayName = 'loading component';
    static propTypes = {
        title: PropTypes.string.isRequired,
        message: PropTypes.string
    }
    render() {
        const { title, message } = this.props
        return (
            <div className="container">
                <Grid cellWidth="1/3" style={ { justifyContent: 'center' } }>
                    <Cell>
                        <div className="text-center">
                            <h1>{ title }</h1>
                            <i className="fa fa-5x fa-spinner fa-pulse fa-fw margin-bottom"></i>
                            <h4>{ message }</h4>
                        </div>
                  </Cell>
                </Grid>
            </div>
        )
    }
}
