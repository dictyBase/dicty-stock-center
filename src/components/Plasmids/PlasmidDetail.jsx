// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import StockDetailRow from "components/Strains/StockDetailRow"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import { Flex, Box } from "rebass"
import FontAwesome from "react-fontawesome"
import { fetchPlasmid } from "actions/stockCenter"
import { addToCart } from "actions/cart"
import {
  DictyHeader,
  StrainDetailsHeader,
  PrimaryBlockButton,
  SuccessBlockButton
} from "styles"

type Props = {
  fetchPlasmid: Function,
  addToCart: Function,
  plasmid: Object,
  isFetching: boolean,
  cartItem: { type: string, id: number, systematicName: string },
  match: Object,
  title: string
}

export class PlasmidDetail extends Component<Props> {
  componentDidMount() {
    const fetchPlasmid = this.props.fetchPlasmid
    const id = this.props.match.params.id
    fetchPlasmid(id)
  }
  render() {
    const addToCart = this.props.addToCart
    const plasmid = this.props.plasmid
    const isFetching = this.props.isFetching
    const cartItem = {
      type: "plasmid",
      id: plasmid.id,
      systematicName: plasmid.name
    }
    const data1 = [
      { "Plasmid Name": "No Information" },
      { Description: "No Information" },
      { Depositor: "N/A" },
      /* just display id, no link > eventually go to internal publication id*/
      { "Reference(s)": "22357942" }
    ]
    const data2 = [
      { "Plasmid ID": this.props.match.params.id },
      { "Plasmid Keywords": "No Information" },
      { "GenBank Accession": "No Information" },
      { "Test row": "No Information" }
    ]
    return (
      <div>
        <Flex justify="center">
          <Box>
            <DictyHeader>
              <h2>{this.props.match.params.id}</h2>
            </DictyHeader>
          </Box>
        </Flex>
        <Flex wrap justify="center">
          <Box w={["95%", "80%"]}>
            <StrainDetailsHeader>
              <h3>Plasmid Details</h3>
            </StrainDetailsHeader>
          </Box>

          {isFetching || !plasmid ? (
            <Flex justify="center">
              <Box w={"80%"}>
                <h1>{this.props.title || <Skeleton />}</h1>
                <Skeleton count={10} />
                <br />
                <br />
                <Skeleton count={10} />
                <br />
                <br />
                <Skeleton count={10} />
              </Box>
            </Flex>
          ) : (
            <Box w={["95%", "80%"]}>
              <StockDetailRow left={data1[0]} right={data2[0]} />
              <StockDetailRow left={data1[1]} right={data2[1]} />
              <StockDetailRow left={data1[2]} right={data2[2]} />
              <StockDetailRow left={data1[3]} right={data2[3]} />
            </Box>
          )}
        </Flex>
        <Flex wrap justify="center">
          <Box w={["80%", "35%"]} mt={10} mr={1}>
            <PrimaryBlockButton onClick={() => addToCart(cartItem)}>
              <FontAwesome name="share" /> Add to Cart
            </PrimaryBlockButton>
          </Box>
          <Box w={["80%", "35%"]} mt={10} mr={1}>
            <SuccessBlockButton>
              <Link to="/order/shipping">
                <FontAwesome name="shopping-cart" /> Checkout
              </Link>
            </SuccessBlockButton>
          </Box>
        </Flex>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    plasmid: state.stockCenter.plasmid,
    isFetching: state.stockCenter.plasmid.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlasmid: id => {
      dispatch(fetchPlasmid(id))
    },
    addToCart: id => {
      dispatch(addToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlasmidDetail)
