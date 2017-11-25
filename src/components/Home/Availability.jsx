import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PanelGray } from 'styles'

export default class Availability extends Component {
    displayName = 'stock center availability'
    static propTypes = {
        stockCenter: PropTypes.object.isRequired,
        stockCenterActions: PropTypes.object.isRequired
    }
    componentDidMount() {
        const { stockCenterActions } = this.props
        stockCenterActions.fetchAvailability()
    }
    render() {
        const { data } = this.props.stockCenter.availability
        return (
            <PanelGray>
                <h4>Availability</h4>
                { data && data.map((item, index) => {
                    return (
                        <h5 key={ index }>
                            <strong>{ item.amount }</strong> { item.name }
                        </h5>
                    )
                }) }
            </PanelGray>
        )
    }
}

