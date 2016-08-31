import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class Cart extends Component {
    displayName = 'Shopping cart'
    static propTypes = {
        cart: PropTypes.object.isRequired,
        cartActions: PropTypes.object.isRequired
    }

    render() {
        const { cart, cartActions } = this.props
        return (
                <div className="container">
                <div className="table-responsive">
                    <table className="table table-condensed">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Strain/Plasmid Name</th>
                            <th>Fee</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                cart.addedItems.map((item, index) => {
                                    return (
                                        <tr key={ index }>
                                          <td>{ item.id }</td>
                                          <td>{ item.name }</td>
                                          <td>{ item.fee }</td>
                                          <td>
                                            <button type="button"
                                              className="btn btn-danger"
                                              onClick={ () => cartActions.removeItem(item.id) }>
                                              <i className="fa fa-trash-o"></i>
                                            </button>
                                          </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                      </table>
                </div>
                </div>
        )
    }
}
