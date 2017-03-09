// @flow
import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import Loader from 'components/Loader'
import PlasmidTable from 'components/Plasmids/PlasmidTable'
import 'styles/custom.scss'

export default class Plasmids extends Component {
    displayName = 'plasmids list'
    componentDidMount() {
        const stockCenterActions: Object = this.props.stockCenterActions
        const number: number = this.props.stockCenter.plasmidCatalog.meta.pagination.number
        stockCenterActions.fetchPlasmids(number, 10)
    }
    render() {
        const data: Array<Object> = this.props.stockCenter.plasmidCatalog.data
        return (
          <div className="container">
            <Grid cellWidth="1">
                <Cell align="center">
                      <h1 className="dicty-header">Plasmid Catalog</h1>
                </Cell>
            </Grid>
            {
              data.length !== 0
              ? <PlasmidTable {...this.props} />
              : <Loader message="We're testing your patience." />
            }
          </div>
        )
    }
}
