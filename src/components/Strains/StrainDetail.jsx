import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import StockDetailRow from 'components/StockDetailRow'
import PhenotypeRow from 'components/Strains/PhenotypeRow'
import { Link } from 'react-router'
import Loader from 'components/Loader'
import 'styles/custom.scss'

export default class StrainDetail extends Component {
    displayName = 'strain detail'
    componentDidMount() {
        const { stockCenterActions } = this.props
        const { id } = this.props.params
        stockCenterActions.fetchStrain(id)
    }
    phenotypes() {
        const { phenotypes } = this.props.stockCenter.strain
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
                phenotype={ phenotype.observation }
                notes={ phenotype.notes }
                reference={ phenotype.reference }
                key={ i }
              />
          )
        })
        return (
          <div className="phenotype-container">
            <div className="phenotype-header" style={ {maxWidth: '85%', margin: '0 auto 20px auto'} }>
              <div style={
                  {
                      padding: 10,
                      maxWidth: '100%',
                      minWidth: 304,
                      background: '#15317e',
                      color: 'white',
                      margin: '0 auto',
                      textAlign: 'center',
                      display: 'flex'
                  }
                }
              >
                <div style={ {flexGrow: 1, flexBasis: '30%'} }><b>Phenotype</b></div>
                <div style={ {flexGrow: 1, flexBasis: '30%'} }><b>Notes</b></div>
                <div style={ {flexGrow: 1, flexBasis: '30%'} }><b>Reference</b></div>
                <div style={ {flexGrow: 1, flexBasis: '10%'} } />
              </div>
              <div style={ {borderWidth: '1px 1px 0px 1px', borderColor: 'black', borderStyle: 'solid'} }>
                { rows }
              </div>
            </div>
          </div>
        )
    }
    render() {
        const { cartActions } = this.props
        const { strain } = this.props.stockCenter
        const { isFetching } = this.props.stockCenter.strain
        const cartItem = {
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
          <div className="strain-details">
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
            { strain.phenotypes && this.phenotypes() }
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
              <h3>Strain Details</h3>
            </div>
            {
                isFetching || !strain
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
                      <StockDetailRow left={ data1[3] } right={ data2[3] } />
                      <StockDetailRow left={ data1[4] } right={ data2[4] } />
                      <StockDetailRow left={ data1[5] } right={ data2[5] } />
                      <StockDetailRow left={ data1[6] } right={ data2[6] } />
                      <StockDetailRow left={ data1[7] } />
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
