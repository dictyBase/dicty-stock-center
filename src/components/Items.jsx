import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class Items extends Component {
    displayName = 'Items in the cart';

    static propTypes = {
        items: PropTypes.array.isRequired
    }
    render() {
        const { items } = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-sm-4"><h5>ID</h5></div>
                    <div className="col-xs-6 col-sm-4"><h5>Strain/Plasmid Name</h5></div>
                </div>
                { items.map((item, index) => {
                    return (
                        <div className="row" key={ index }>
                            <div className="col-xs-6 col-sm-4">{ item.id }</div>
                            <div className="col-xs-6 col-sm-4">{ item.name }</div>
                        </div>
                    )
                }) }
            </div>
        )
    }
}
