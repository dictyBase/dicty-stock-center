import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import { List } from 'react-virtualized'
import 'styles/custom.scss'

export default class StrainDetail extends Component {
    displayName = 'strain detail'
    render() {
        return (
          <Grid cellWidth="1">
              <Cell align="center">
                    <h1 className="dicty-header">{ this.props.params.id }</h1>
              </Cell>
          </Grid>
          <List
            height={ 400 }
            rowCount={ }
        )
    }
}
