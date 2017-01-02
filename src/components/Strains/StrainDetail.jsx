import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import 'styles/custom.scss'

const Row = (props) => {
    return (
      <div style={ {flexGrow: 1, flexBasis: 0, display: 'flex', width: '100%', borderBottom: '1px solid grey'} }>
        <div style={ {display: 'flex', flexGrow: 1, flexBasis: 0, width: '50%'} }>
          <div style={ {padding: '5px 0px 5px 10px', width: '33.3333%', height: '100%', borderRight: '1px solid grey'} }>{ Object.keys(props.left)[0] }</div>
          <div style={ {padding: '5px 0px 5px 10px', width: '66.66666%', height: '100%', borderRight: '1px solid grey'} }>{ Object.values(props.left)[0] }</div>
        </div>
        <div style={ {display: 'flex', flexGrow: 1, flexBasis: 0, width: '50%'} }>
          <div style={ {padding: '5px 0px 5px 10px', width: '33.3333%', height: '100%', borderRight: '1px solid grey'} }>{ Object.keys(props.right)[0] }</div>
          <div style={ {padding: '5px 0px 5px 10px', width: '66.66666%'} }>{ Object.values(props.right)[0] }</div>
        </div>
      </div>
    )
}

export default class StrainDetail extends Component {
    displayName = 'strain detail'
    render() {
        const data1 = [
          {'Strain Descriptor': 'γS18'},
          {'Strain Names': 'gammaS18, gammaS-18, γS-18'},
          {'Strain Summary': 'mcln null mutant expressed in DH1-10 cell'},
          {'Genetic Modification': 'endogenous substitution'},
          {'Strain Characteristics': '	blasticidin resistant, null mutant, axenic'},
          {'Parental Strain': 'DH1-10 (DBS0302388)'},
          {'Plasmid': 'bsr cassette'},
          {'Reference(s)': '22357942'}
        ]
        const data2 = [
          {'Strain ID': this.props.params.id},
          {'Systematic Name': 'γS18'},
          {'Genotype': 'axeA1, axeB1, axeC1, pyr5-6- [pRG24], ura-, mcln-, bsr'},
          {'Mutagenesis Method': 'Homologous Recombination'},
          {'Depositor': 'N/A '},
          {'Species': 'Dictyostelium discoideum'},
          {'Associated Gene(s)': 'mcln'},
          {'_blank': 'asdf '}
        ]
        return (
          <div className="strain-details">
            <Grid cellWidth="1" style={ {width: '85%'} }>
              <Cell align="center">
                    <h1 className="dicty-header">{ this.props.params.id }</h1>
              </Cell>
            </Grid>
            <div align="center" style={ {padding: 10, maxWidth: '85%', background: '#15317e', color: 'white', margin: '0 auto', textAlign: 'center'} }>
              <h3>Strain Details</h3>
            </div>
            <div className="detail-container" style={ {maxWidth: '85%', minWidth: '40%', margin: '0 auto', borderTop: '1px solid grey', borderLeft: '1px solid grey', borderRight: '1px solid grey'} }>
              <Row left={ data1[0] } right={ data2[0] } />
              <Row left={ data1[1] } right={ data2[1] } />
              <Row left={ data1[2] } right={ data2[2] } />
              <Row left={ data1[3] } right={ data2[3] } />
              <Row left={ data1[4] } right={ data2[4] } />
              <Row left={ data1[5] } right={ data2[5] } />
              <Row left={ data1[6] } right={ data2[6] } />
              <Row left={ data1[7] } right={ data2[7] } />
            </div>
          </div>
        )
    }
}
