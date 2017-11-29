// @flow
import React, { Component } from 'react'
import StockDetailRow from 'components/StockDetailRow'
import PhenotypeRow from 'components/Strains/PhenotypeRow'
import { Link } from 'react-router-dom'
import Loader from 'components/Loader'
import { Flex, Box } from 'rebass'
import { DetailContainer, PhenotypeData, DictyHeader, StrainDetailsHeader } from 'styles'
import 'styles/custom.scss'

export default class StrainDetail extends Component {
    displayName = 'strain detail'
    componentDidMount() {
        const fetchStrain: Function = this.props.stockCenterActions.fetchStrain
        const id: string = this.props.match.params.id
        fetchStrain(id)
    }
    phenotypes() {
        const phenotypes: Array<Object> = this.props.stockCenter.strain.phenotypes
        // const strain = {
        //     phenotypes: [{
        //         observation: 'placeholder',
        //         notes: 'placeholder',
        //         reference: '000000001'
        //     }]
        // }
        const rows: Array<PhenotypeRow> = phenotypes.map((phenotype, i) => {
            return (
              <PhenotypeRow
                phenotype={ phenotype.observation }
                notes={ phenotype.notes }
                reference={ phenotype.reference }
                key={ i }
              />
          )
        })
        return (
          <Flex justify="center">
            <Box w={ '60%' } mt={ 0 } my="auto" ml={ 20 }>
              <PhenotypeData>
                <Box w={ '30%' }><b>Phenotype</b></Box>
                <Box w={ '30%' }><b>Notes</b></Box>
                <Box w={ '30%' }><b>Reference</b></Box>
                <Box w={ '10%' } />
              </PhenotypeData>
              <Box borderColor="black" borderWidth={ 1 } borderTop borderRight borderLeft>
                { rows }
              </Box>
            </Box>
          </Flex>
        )
    }
    render() {
        const addToCart: Function = this.props.cartActions.addToCart
        const strain: Object = this.props.stockCenter.strain
        const isFetching: boolean = this.props.stockCenter.strain.isFetching
        const cartItem: { type: string, id: string, systematicName: string } = {
            type: 'strain',
            id: strain.id,
            systematicName: strain.name
        }
        const data1 = [
          {'Strain Descriptor': 'No Information'},
          {'Strain Names': 'No Information'},
          {'Systematic Name': strain && strain.name},
          {'Strain Summary': strain && strain.description},
          {Genotype: strain.genotypes && strain.genotypes[0]},
          {'Strain Characteristics': strain && strain.characteristics},
          {Plasmid: 'No Information'},
          /* just display id, no link > eventually go to internal publication id*/
          {'Reference(s)': '22357942'}
        ]
        const data2 = [
          {'Strain ID': strain && strain.id},
          {Species: 'Dictyostelium discoideum'},
          {'Genetic Modification': 'No Information'},
          {'Mutagenesis Method': 'Homologous Recombination'},
          /* multiple possible parental strains*/
          {'Parental Strain': 'DH1-10 (DBS0302388)'},
          {'Associated Gene(s)': 'mcln'},
          {Depositor: 'No Information'}
          // {_blank: 'asdf '}
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
            { strain.phenotypes && this.phenotypes() }
            <StrainDetailsHeader>
              <h3>Strain Details</h3>
            </StrainDetailsHeader>
            {
                isFetching || !strain
                ? <Loader message="Loading..." />
                : (
                    <DetailContainer>
                      <StockDetailRow left={ data1[0] } right={ data2[0] } />
                      <StockDetailRow left={ data1[1] } right={ data2[1] } />
                      <StockDetailRow left={ data1[2] } right={ data2[2] } />
                      <StockDetailRow left={ data1[3] } right={ data2[3] } />
                      <StockDetailRow left={ data1[4] } right={ data2[4] } />
                      <StockDetailRow left={ data1[5] } right={ data2[5] } />
                      <StockDetailRow left={ data1[6] } right={ data2[6] } />
                      <StockDetailRow left={ data1[7] } />
                    </DetailContainer>
                )
            }
            <Flex wrap justify="center">
              <Box w={ [1, '30%'] } mt={ 10 } mr={ 1 }>
                <button
                  className="btn btn-primary btn-block add-to-cart"
                  onClick={ () => addToCart(cartItem) }
                >
                  <i className="fa fa-share"></i> Add to Cart
                </button>
              </Box>
              <Box w={ [1, '30%'] } mt={ 10 } mr={ 1 }>
                <Link
                  to="/order/shipping"
                  className="btn btn-success btn-block"
                >
                  <i className="fa fa-shopping-cart"></i> Checkout
                </Link>
              </Box>
            </Flex>
          </div>
        )
    }
}
