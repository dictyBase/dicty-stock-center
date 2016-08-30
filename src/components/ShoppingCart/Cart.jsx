import React, { Component, PropTypes } from 'react'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

export default class Cart extends Component {
    displayName = 'Shopping cart items'
    static propTypes = {
        item: PropTypes.object.isRequired,
        cartActions: PropTypes.object.isRequired
    }

    render() {
        const { item, cartActions } = this.props
        return (
                <div className="container">
                    <Grid verticalAlign="middle" style={ { borderBottom: '1px solid #C0C0C0' } }>
                        <Cell width="2/4" smallWidth="1" smallAlign="center">
                            <div>
                                <span className="cart-item-name">{ item.name }</span>
                                <span className="cart-item-id"> { item.id }</span>
                            </div>
                        </Cell>
                        <Cell width="1/4" smallWidth="1/2" align="right" smallAlign="center">
                            <h3 className="text-success">{ item.fee }</h3>
                        </Cell>
                        <Cell width="1/4" smallWidth="1/2" align="right" smallAlign="center">
                            <button type="button"
                              className="btn btn-danger"
                              onClick={ cartActions.removeItem }>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </Cell>
                    </Grid>
                </div>
        )
    }
}
