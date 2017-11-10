// @flow
import React, { Component } from 'react'

type Props = {
  phenotype: string,
  notes: string,
  reference: string
}

export default class PhenotypeRow extends Component {
    displayName = 'phenotype row'
    render() {
        return (
          <div
            className="phenotype-row"
            style={ {
                display: 'flex',
                maxWidth: '100%', borderBottom: '1px solid black'} }>
            <div
              style={ {
                  flexGrow: 1,
                  flexBasis: '30%',
                  borderRight: '1px solid black',
                  padding: '5px 0px 5px 10px'
              } }
            >
              { this.props.phenotype }
            </div>
            <div
              style={ {
                  flexGrow: 1,
                  flexBasis: '30%',
                  borderRight: '1px solid black',
                  padding: '5px 0px 5px 10px'
              } }
            >
              { this.props.notes }
            </div>
            <div
              style={ {
                  flexGrow: 1,
                  flexBasis: '30%',
                  borderRight: '1px solid black',
                  padding: '5px 10px 5px 10px'
              } }
            >
              { this.props.reference }
            </div>
            <div style={ {flexGrow: 1, flexBasis: '10%', padding: '5px 0px 5px 10px', textAlign: 'center'} }>
              <i className="fa fa-file fa-2x" style={ {padding: 5} }/>
              <i className="fa fa-file fa-2x" style={ {padding: 5} }/>
            </div>
          </div>
        )
    }
}
