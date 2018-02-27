// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import { Flex, Box } from "rebass"
import FontAwesome from "react-fontawesome"
import StockDetailRow from "./StockDetailRow"
import PhenotypeRow from "./PhenotypeRow"
import { fetchStrain } from "actions/stockCenter"
import { addToCart } from "actions/cart"
import {
  PhenotypeData,
  DictyHeader,
  StrainDetailsHeader,
  PrimaryButton,
  SuccessButton,
  BorderBox
} from "styles"

type Props = {
  fetchStrain: Function,
  phenotypes: Array<Object>,
  addToCart: Function,
  strain: Object,
  isFetching: boolean,
  cartItem: { type: string, id: number, systematicName: string },
  title: string,
  match: Object
}

class StrainDetail extends Component<Props> {
  componentDidMount() {
    const fetchStrain = this.props.fetchStrain
    const id = this.props.match.params.id
    fetchStrain(id)
  }
  phenotypes() {
    const phenotypes = this.props.phenotypes
    // const strain = {
    //     phenotypes: [{
    //         observation: 'placeholder',
    //         notes: 'placeholder',
    //         reference: '000000001'
    //     }]
    // }
    const rows = phenotypes.map((phenotype, i) => {
      return (
        <PhenotypeRow
          phenotype={phenotype.observation}
          notes={phenotype.notes}
          reference={phenotype.reference}
          key={i}
        />
      )
    })
    return (
      <BorderBox>
        <PhenotypeData>
          <Box w={"30%"}>
            <b>Phenotype</b>
          </Box>
          <Box w={"30%"}>
            <b>Notes</b>
          </Box>
          <Box w={"30%"}>
            <b>Reference</b>
          </Box>
          <Box w={"10%"} />
        </PhenotypeData>
        <Box>{rows}</Box>
      </BorderBox>
    )
  }
  render() {
    const addToCart = this.props.addToCart
    const strain = this.props.strain
    const isFetching = this.props.isFetching
    const cartItem = {
      type: "strain",
      id: strain.id,
      systematicName: strain.name
    }
    const data1 = [
      { "Strain Descriptor": "No Information" },
      { "Strain Names": "No Information" },
      { "Strain Summary": strain && strain.description },
      { "Genetic Modification": "No Information" },
      { "Mutagenesis Method": "Homologous Recombination" },
      { "Parental Strain": "DH1-10 (DBS0302388)" },
      { Plasmid: "No Information" },
      /* multiple possible parental strains*/
      { "Associated Gene(s)": "mcln" }
    ]
    const data2 = [
      { "Strain ID": strain && strain.id },
      { "Systematic Name": strain && strain.name },
      { "Strain Characteristics": strain && strain.characteristics },
      { Genotype: strain.genotypes && strain.genotypes[0] },
      { Species: "Dictyostelium discoideum" },
      { Depositor: "No Information" },
      /* just display id, no link > eventually go to internal publication id*/
      { "Reference(s)": "22357942" }
      // {_blank: 'asdf '}
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
            {strain.phenotypes && this.phenotypes()}
            <br />
            <StrainDetailsHeader>
              <h3>Strain Details</h3>
            </StrainDetailsHeader>
          </Box>

          <Box w={["95%", "80%"]}>
            {isFetching || !strain ? (
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
              <div>
                <StockDetailRow left={data1[0]} right={data2[0]} />
                <StockDetailRow left={data1[1]} right={data2[1]} />
                <StockDetailRow left={data1[2]} right={data2[2]} />
                <StockDetailRow left={data1[3]} right={data2[3]} />
                <StockDetailRow left={data1[4]} right={data2[4]} />
                <StockDetailRow left={data1[5]} right={data2[5]} />
                <StockDetailRow left={data1[6]} right={data2[6]} />
                <StockDetailRow left={data1[7]} right={{}} />
              </div>
            )}
          </Box>
        </Flex>

        <Flex wrap justify="center">
          <Box w={["80%", "35%"]} mt={10} mr={1}>
            <PrimaryButton
              className={`block`}
              onClick={() => addToCart(cartItem)}>
              <FontAwesome name="share" /> Add to Cart
            </PrimaryButton>
          </Box>
          <Box w={["80%", "35%"]} mt={10} mr={1}>
            <SuccessButton className={`block`}>
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

const mapStateToProps = state => {
  return {
    phenotypes: state.stockCenter.strain.phenotypes,
    strain: state.stockCenter.strain,
    isFetching: state.stockCenter.strain.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStrain: id => {
      dispatch(fetchStrain(id))
    },
    addToCart: id => {
      dispatch(addToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StrainDetail)
