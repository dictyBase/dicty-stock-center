import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import Loader from 'components/Loader'
import StrainTable from 'components/Strains/StrainTable'
import 'styles/custom.scss'

export default class Strains extends Component {
    displayName = 'strains list'
    componentDidMount() {
        const stockCenterActions: Object = this.props.stockCenterActions
        const number: number = this.props.stockCenter.strainCatalog.meta.pagination.number
        stockCenterActions.fetchStrains(number, 10)
    }
    render() {
        const data: Array<Object> = this.props.stockCenter.strainCatalog.data
        return (
          <div className="container">
            <Grid cellWidth="1">
                <Cell align="center">
                      <h1 className="dicty-header">Strain Catalog</h1>
                </Cell>
            </Grid>
            {
              data.length !== 0
              ? <StrainTable {...this.props} />
              : <Loader message="We're testing your patience." />
            }
          </div>
        )
    }
}
