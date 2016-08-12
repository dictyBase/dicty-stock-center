import React, { Component, PropTypes } from 'react'
import 'styles/custom.scss'

export default class Availability extends Component {
    displayName = 'stock center availability'
    static propTypes = {
        stockCenter: PropTypes.array.isRequired,
        stockCenterActions: PropTypes.object.isRequired
    }
    componentDidMount() {
        console.log('componentDidMount')
        const { stockCenterActions } = this.props
        stockCenterActions.fetchAvailability()
    }
    render() {
        // const availability = [
        //     {name: 'Strains', amount: 1927},
        //     {name: 'Plasmids', amount: 882},
        //     {name: 'Antibodies', amount: 12},
        //     {name: 'cDNA library', amount: 1},
        //     {name: 'Genomic library', amount: 1}
        // ]
        const { availability } = this.props.stockCenter
        return (
            <div className="panel-dsc panel-gray">
                <h4>Availability</h4>
                { availability.map((item, index) => {
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

