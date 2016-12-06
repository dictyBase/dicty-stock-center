import React, { Component, PropTypes } from 'react'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

export default class TableLoader extends Component {
    displayName = 'loading component';
    static propTypes = {
        title: PropTypes.string,
        message: PropTypes.string
    }
    render() {
        const { title, message } = this.props
        return (
<<<<<<< HEAD
            <div style={ {width: '100%'} }>
=======
            <div className="container">
>>>>>>> 26a2704ea6445b231b5c4024e8814f36398d23fc
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
