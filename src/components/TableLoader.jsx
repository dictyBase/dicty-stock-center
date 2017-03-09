// @flow
import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

type Props = {
    title: string,
    message: string
}

export default class TableLoader extends Component {
    displayName = 'table loader'
    // static propTypes = {
    //     title: PropTypes.string,
    //     message: PropTypes.string
    // }
    render() {
        const title: string = this.props.title
        const message: string = this.props.message
        return (
            <div style={ {width: '100%'} }>
                <Grid cellWidth="1">
                    <Cell align="center">
                        <div className="text-center">
                            <h1>{ title && title }</h1>
                            <i className="fa fa-spinner fa-2x fa-pulse fa-fw margin-bottom"></i>
                            { message && message }
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
