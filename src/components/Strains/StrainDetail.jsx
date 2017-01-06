import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import Loader from 'components/Loader'
import 'styles/custom.scss'

const Row = (props) => {
    return (
      <div className="strain-detail-row" style={ {flexGrow: 1, flexBasis: 0, display: 'flex', width: '100%', minWidth: 304, justifyContent: 'center', alignItems: 'center'} }>
        <div className="strain-detail-item" style={ {display: 'flex', flexGrow: 1, flexBasis: 0, width: '100%', borderBottom: '1px solid grey', height: '100%'} }>
          <div style={ {padding: '5px 0px 5px 10px', width: '33.3333%', minWidth: 117, height: '100%', borderRight: '1px solid grey'} }><b>{ Object.keys(props.left)[0] }</b></div>
          <div style={ {padding: '5px 0px 5px 10px', width: '66.66666%', minWidth: 187, height: '100%', borderRight: '1px solid grey'} }>{ Object.values(props.left)[0] }</div>
        </div>
        <div className="strain-detail-item" style={ {display: 'flex', flexGrow: 1, flexBasis: 0, width: '100%', borderBottom: '1px solid grey', height: '100%'} }>
          <div style={ {padding: '5px 0px 5px 10px', width: '33.3333%', minWidth: 117, height: '100%', borderRight: '1px solid grey'} }><b>{ Object.keys(props.right)[0] }</b></div>
          <div style={ {padding: '5px 0px 5px 10px', width: '66.66666%', minWidth: 187} }>{ Object.values(props.right)[0] }</div>
        </div>
      </div>
    )
}

export default class StrainDetail extends Component {
    displayName = 'strain detail'
    componentDidMount() {
        const { stockCenterActions } = this.props
        const { id } = this.props.params
        stockCenterActions.fetchStrain(id)
    }
    render() {
        const { strain } = this.props.stockCenter
        const { isFetching } = this.props.stockCenter.strain
        const data1 = [
          {'Strain Descriptor': strain.data ? strain.data.attributes.description : 'N/A'},
          {'Strain Names': strain.data ? strain.data.attributes.name : 'N/A'},
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
                <h1
                    style={
                        {
                            borderBottom: '1px solid #eee',
                            fontSize: 45,
                            padding: 10,
                            margin: '0 auto'
                        }
                    }
                >
                  { this.props.params.id }
                </h1>
              </Cell>
            </Grid>
            <div
                align="center"
                style={
                    {
                        padding: 10,
                        maxWidth: '85%',
                        minWidth: 304,
                        background: '#15317e',
                        color: 'white',
                        margin: '0 auto',
                        textAlign: 'center'
                    }
                }
            >
              <h3>Strain Details</h3>
            </div>
            {
                isFetching || !strain.data
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
                      <Row left={ data1[0] } right={ data2[0] } />
                      <Row left={ data1[1] } right={ data2[1] } />
                      <Row left={ data1[2] } right={ data2[2] } />
                      <Row left={ data1[3] } right={ data2[3] } />
                      <Row left={ data1[4] } right={ data2[4] } />
                      <Row left={ data1[5] } right={ data2[5] } />
                      <Row left={ data1[6] } right={ data2[6] } />
                      <Row left={ data1[7] } right={ data2[7] } />
                    </div>
                )
            }
          </div>
        )
    }
}
