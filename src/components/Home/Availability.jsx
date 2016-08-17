import React, { Component, PropTypes } from 'react'
import 'styles/custom.scss'

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
        const { availability } = this.props.stockCenter
        return (
            <div className="panel-dsc panel-gray">
                <h4>Availability</h4>
                { availability && availability.map((item, index) => {
                    return (
                        <h5 key={ index }>
                            <strong>{ item.amount }</strong> { item.name }
                        </h5>
                    )
                }) }
            </div>
        )
    }
}

