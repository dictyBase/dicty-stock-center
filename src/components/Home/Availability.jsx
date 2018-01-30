import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAvailability } from 'actions/stockCenter'
import { PanelGray } from 'styles'

export class Availability extends Component {
    displayName = 'stock center availability'

    componentDidMount() {
        this.props.fetchAvailability()
    }
    render() {
        const { data } = this.props.availability
        return (
            <PanelGray>
                <h4>Strain & Plasmid Availability</h4>
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

const mapStateToProps = state => {
    return {
        availability: state.stockCenter.availability
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAvailability: () => {
            dispatch(fetchAvailability())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Availability)
