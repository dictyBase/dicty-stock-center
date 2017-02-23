// @flow
import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import StockDetailRow from 'components/Strains/StockDetailRow'
import { Link } from 'react-router'
import Loader from 'components/Loader'
import 'styles/custom.scss'


export default class PlasmidDetail extends Component {
    displayName = 'plasmid detail'
    componentDidMount() {
        const { stockCenterActions } = this.props
        const { id } = this.props.params
        stockCenterActions.fetchPlasmid(id)
    }
    render() {
        const { cartActions } = this.props
        const { plasmid } = this.props.stockCenter
        const { isFetching } = this.props.stockCenter.plasmid
        const cartItem: {type: string, id: number, systematicName: string} = {
            type: 'plasmid',
            id: plasmid.id,
            systematicName: plasmid.name
        }
        const data1 = [
          {'Plasmid Name': 'No Information'},
          {Description: 'No Information'},
          {Depositor: 'N/A'},
          /* just display id, no link > eventually go to internal publication id*/
          {'Reference(s)': '22357942'}
        ]
        const data2 = [
          {'Plasmid ID': this.props.params.id},
          {'Plasmid Keywords': 'No Information'},
          {'GenBank Accession': 'No Information'}
        ]
        return (
          <div className="plasmid-details">
            <Grid cellWidth="1" style={ {width: '85%'} }>
              <Cell align="center">
                <h1
                    style={
                        {
                            borderBottom: '1px solid #eee',
                            fontSize: 45,
                            margin: 10
                        }
                    }
                >
                  { this.props.params.id }
                </h1>
              </Cell>
            </Grid>
            <div
                style={ {
                    padding: 10,
                    maxWidth: '85%',
                    minWidth: 304,
                    background: '#15317e',
                    color: 'white',
                    margin: '0 auto',
                    textAlign: 'center'
                } }
            >
              <h3>Plasmid Details</h3>
            </div>
            {
                isFetching || !plasmid
                ? <Loader message="Loading..." />
                : (
                    <div
                        className="detail-container"
                        style={
                            {
                                maxWidth: '85%',
                                minWidth: 304,
                                margin: '0 auto',
                                borderTop: '1px solid grey',
                                borderLeft: '1px solid grey',
                                borderRight: '1px solid grey'
                            }
                        }
                    >
                      <StockDetailRow left={ data1[0] } right={ data2[0] } />
                      <StockDetailRow left={ data1[1] } right={ data2[1] } />
                      <StockDetailRow left={ data1[2] } right={ data2[2] } />
                      <StockDetailRow left={ data1[3] } />
                    </div>
                )
            }
            <Grid style={ {marginTop: '50px', maxWidth: '85%'} }>
              <Cell width="1/2" smallWidth="1" align="right">
                <button
                  className="btn btn-primary btn-block add-to-cart"
                  style={ {maxWidth: '50%'} }
                  onClick={ () => cartActions.addToCart(cartItem) }
                >
                  <i className="fa fa-share"></i> Add to Cart
                </button>
              </Cell>
              <Cell width="1/2" smallWidth="1" align="left">
                <Link
                  to="/order/shipping"
                  className="btn btn-success btn-block"
                  style={ {maxWidth: '50%'} }
                >
                  <i className="fa fa-shopping-cart"></i> Checkout
                </Link>
              </Cell>
            </Grid>
          </div>
        )
    }
}
