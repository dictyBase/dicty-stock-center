// @flow
import React, { Component } from 'react'
import StockDetailRow from 'components/StockDetailRow'
import { Link } from 'react-router-dom'
import Loader from 'components/Loader'
import { Flex, Box } from 'rebass'
import { DetailContainer } from 'styles'
import 'styles/custom.scss'


export default class PlasmidDetail extends Component {
    displayName = 'plasmid detail'
    componentDidMount() {
        const fetchPlasmid: Function = this.props.stockCenterActions.fetchPlasmid
        const id: number = this.props.match.params.id
        fetchPlasmid(id)
    }
    render() {
        const addToCart: Function = this.props.cartActions.addToCart
        const plasmid: Object = this.props.stockCenter.plasmid
        const isFetching: boolean = this.props.stockCenter.plasmid.isFetching
        const cartItem: { type: string, id: number, systematicName: string } = {
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
          {'Plasmid ID': this.props.match.params.id},
          {'Plasmid Keywords': 'No Information'},
          {'GenBank Accession': 'No Information'}
        ]
        return (
          <div className="plasmid-details">
            <Flex justify="center">
              <Box>
                <h1
                    style={
                        {
                            borderBottom: '1px solid #eee',
                            fontSize: 45,
                            margin: 10
                        }
                    }
                >
                  { this.props.match.params.id }
                </h1>
              </Box>
            </Flex>
            <div
                style={ {
                    padding: 10,
                    maxWidth: '60%',
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
                    <DetailContainer>
                      <StockDetailRow left={ data1[0] } right={ data2[0] } />
                      <StockDetailRow left={ data1[1] } right={ data2[1] } />
                      <StockDetailRow left={ data1[2] } right={ data2[2] } />
                      <StockDetailRow left={ data1[3] } />
                    </DetailContainer>
                )
            }
            <div style={
                {
                    marginTop: '50px',
                    maxWidth: '60%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '2.75%'
                }
            }>
              <div style={ {width: '44%', paddingRight: '4%'} }>
                <button
                  className="btn btn-primary btn-block add-to-cart"
                  onClick={ () => addToCart(cartItem) }
                >
                  <i className="fa fa-share"></i> Add to Cart
                </button>
              </div>
              <div style={ {width: '44%', paddingLeft: '4%'} }>
                <Link
                  to="/order/shipping"
                  className="btn btn-success btn-block"
                >
                  <i className="fa fa-shopping-cart"></i> Checkout
                </Link>
              </div>
            </div>
          </div>
        )
    }
}
