import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import { AutoSizer, List, Table } from 'react-virtualized'
import styled from 'styled-components'
import 'styles/custom.scss'

const StrainGrid = styled(Grid)`
    max-width: 80%;
    min-width: 0%;
    margin: 0 auto;
`
const DataLabel = styled(Cell)`
    margin-top: 2px;
    margin-bottom: 2px;
    background: grey;
`
const DataCell = styled(Cell)`
    padding: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
    background: grey;
`

// const Row = (props) => {
//     let displayName = 'row'
//     return (
//         <div style={ {height: 50, display: 'flex', alignItems: 'center', borderBottom: '1px solid grey', borderLeft: '1px solid grey', borderRight: '1px solid grey'} }>
//           <div style={ {flexGrow: 0.5, flexBasis: 0, lineHeight: '50px', paddingLeft: 10, borderRight: '1px solid grey', fontSize: '1.25em'} }>
//             { props.titles[0] }
//           </div>
//           <div style={ {flexGrow: 1, flexBasis: 0, lineHeight: '50px', paddingLeft: 10, paddingRight: 10, borderRight: '1px solid grey'} }>
//             { props.data[0] }
//           </div>
//           <div style={ {flexGrow: 0.5, flexBasis: 0, lineHeight: '50px', paddingLeft: 10, borderRight: '1px solid grey', fontSize: '1.25em'} }>
//             { props.titles[1] }
//           </div>
//           <div style={ {flexGrow: 1, flexBasis: 0, lineHeight: '50px', paddingLeft: 10, paddingRight: 10} }>
//             { props.data[1] }
//           </div>
//         </div>
//     )
    // return (
    //   <Grid width="1/2" style={ {background: props.even ? '#f3f3f3' : 'white', borderBottom: '1px solid grey', borderLeft: '1px solid grey', borderRight: '1px solid grey'} }>
    //     <Cell width="1/6" style={ {paddingLeft: 2, borderRight: '1px solid grey', textAlign: 'center'} }><h4>{ props.titles[0] }</h4></Cell>
    //     <Cell width="1/3" style={ {padding: 10, borderRight: '1px solid grey', textAlign: 'center'} }>{ props.data[0] }</Cell>
    //     <Cell width="1/6" style={ {paddingLeft: 2, borderRight: '1px solid grey'} }><h4>{ props.titles[1] }</h4></Cell>
    //     <Cell width="1/3" style={ {padding: 10} }>{ props.data[1] }</Cell>
    //   </Grid>
    // )
// }

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
          <div className="container">
            <Grid cellWidth="1">
              <Cell align="center">
                    <h1 className="dicty-header">{ this.props.params.id }</h1>
              </Cell>
              <Cell align="center" style={ {background: '#15317e', color: 'white'} }>
                <h3>Strain Details</h3>
              </Cell>
            </Grid>
            <List
              height={ 50 * data1.length }
              rowHeight={ 50 }
              rowCount={ data1.length }
              width={ 570 }
              style={ {border: '.5px solid grey', margin: '0 auto', display: 'inline-block'} }
              rowRenderer={ ({index, key, style}) => {
                  const dataKey = Object.keys(data1[index])[0]
                  let border = {
                      // borderTop: index === 0 && '1px solid grey',
                      borderBottom: '1px solid grey'
                  }
                  return (
                    <div key={ key } style={ {lineHeight: '50px', ...style, ...border} }>
                      <div style={ {fontSize: '1.25em', width: '33.3333333%', display: 'inline-block', borderRight: '1px solid grey', paddingLeft: 5, height: '100%'} }>{ dataKey }</div>
                      <div style={ {display: 'inline-block', paddingLeft: 10, height: '100%'} }>{ data1[index][dataKey] }</div>
                    </div>
                  )
            } }
          />
          <List
            height={ 50 * data2.length }
            rowHeight={ 50 }
            rowCount={ data2.length }
            width={ 570 }
            style={ {border: '.5px solid grey', margin: '0 auto', display: 'inline-block'} }
            rowRenderer={ ({index, key, style}) => {
                const dataKey = Object.keys(data2[index])[0]
                let border = {
                    // borderTop: index === 0 && '1px solid grey',
                    borderBottom: '1px solid grey'
                }
                return (
                  <div key={ key } style={ {lineHeight: '50px', ...style, ...border} }>
                    <div style={ {fontSize: '1.25em', width: '33.3333333%', display: 'inline-block', borderRight: '1px solid grey', paddingLeft: 5, height: '100%'} }>{ dataKey }</div>
                    <div style={ {display: 'inline-block', paddingLeft: 10, height: '100%'} }>{ data2[index][dataKey] }</div>
                  </div>
                )
            } }
          />
          </div>
      )
    }
    // render() {
    //     return (
    //         <div className="strain-detail-grid" style={ {overflowX: 'scroll', width: '85%', margin: '0 auto'} }>
    //           <Grid cellWidth="1">
    //             <Cell align="center">
    //                   <h1 className="dicty-header">{ this.props.params.id }</h1>
    //             </Cell>
    //             <Cell align="center" style={ {background: '#15317e', color: 'white'} }>
    //               <h3>Strain Details</h3>
    //             </Cell>
    //           </Grid>
    //           <Row
    //             even={ false }
    //             titles={ ['Strain Descriptor', 'Strain ID'] }
    //             data={ ['γS18', this.props.params.id] }
    //           />
    //           <Row
    //             even
    //             titles={ ['Strain Names', 'Systematic Name'] }
    //             data={ ['gammaS18, gammaS-18, γS-18', 'γS18'] }
    //           />
    //         <Row
    //           even={ false }
    //           titles={ ['Strain Summary', 'Genotype'] }
    //           data={ ['Radiation-sensitive strain', 'radH18'] }
    //         />
    //         </div>
    //     )
    // }
    // render() {
        // return (
        //   <div>
        //     <StrainGrid style={ {maxWidth: '80%', minWidth: '0%', margin: '0 auto'} } cellWidth="1">
        //         <Cell align="center">
        //               <h1 className="dicty-header">{ this.props.params.id }</h1>
        //         </Cell>
        //         <Cell align="center" style={ {background: '#337ab7', color: 'white'} }>
        //           <h3>Strain Details</h3>
        //         </Cell>
        //         <Row
        //           even={ false }
        //           titles={ ['Strain Descriptor', 'Strain ID'] }
        //           data={ ['γS18', this.props.params.id] }
        //         />
        //       <Row
        //         even
        //         titles={ ['Strain Names', 'Systematic Name'] }
        //         data={ ['gammaS18, gammaS-18, γS-18', 'γS18'] }
        //       />
        //
        //
        //     </StrainGrid>
        //   </div>
        // )
    // }
}
