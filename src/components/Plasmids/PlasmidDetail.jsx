// @flow
import React, { Component } from 'react'
import StockDetailRow from 'components/StockDetailRow'
import { Link } from 'react-router-dom'
import Loader from 'components/Loader'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'
import { DictyHeader, StrainDetailsHeader, PrimaryButton, SuccessButton } from 'styles'

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
      { 'Plasmid Name': 'No Information' },
      { Description: 'No Information' },
      { Depositor: 'N/A' },
      /* just display id, no link > eventually go to internal publication id*/
      { 'Reference(s)': '22357942' }
      ]
      const data2 = [
      { 'Plasmid ID': this.props.match.params.id },
      { 'Plasmid Keywords': 'No Information' },
      { 'GenBank Accession': 'No Information' }
      ]
      return (
      <div>
        <Flex justify="center">
          <Box>
            <DictyHeader>
              <h2>{ this.props.match.params.id }</h2>
            </DictyHeader>
          </Box>
        </Flex>
        <Flex wrap justify="center">
          <Box w={ ['95%', '80%'] }>
            <StrainDetailsHeader>
              <h3>Plasmid Details</h3>
            </StrainDetailsHeader>
          </Box>

          { isFetching || !plasmid ? (
            <Loader message="Loading..." />
          ) : (
            <Box w={ ['95%', '80%'] }>
              <StockDetailRow left={ data1[0] } right={ data2[0] } />
              <StockDetailRow left={ data1[1] } right={ data2[1] } />
              <StockDetailRow left={ data1[2] } right={ data2[2] } />
              <StockDetailRow left={ data1[3] } />
            </Box>
          ) }
        </Flex>
        <Flex wrap justify="center">
          <Box w={ ['80%', '35%'] } mt={ 10 } mr={ 1 }>
            <PrimaryButton
              className={ `block` }
              onClick={ () => addToCart(cartItem) }>
              <FontAwesome name="share" /> Add to Cart
            </PrimaryButton>
          </Box>
          <Box w={ ['80%', '35%'] } mt={ 10 } mr={ 1 }>
            <SuccessButton className={ `block` }>
              <Link to="/order/shipping">
                <FontAwesome name="shopping-cart" /> Checkout
              </Link>
            </SuccessButton>
          </Box>
        </Flex>
      </div>
    )
  }
}
