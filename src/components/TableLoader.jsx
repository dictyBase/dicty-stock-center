// @flow
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import 'styles/core.scss'

// type Props = {
//     title: string,
//     message: string
// }

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
                <Flex justify="space-between">
                    <Box>
                        <div className="text-center">
                            <h1>{ title && title }</h1>
                            <i className="fa fa-spinner fa-2x fa-pulse fa-fw margin-bottom"></i>
                            { message && message }
                        </div>
                    </Box>
                </Flex>
            </div>
        )
    }
}
