import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import Loader from 'components/Loader'
import StrainTable from 'components/StrainTable'
import 'styles/custom.scss'

export default class Strains extends Component {
    displayName = 'strains list'
    handleSearch(e) {
        const { stockCenterActions } = this.props
        stockCenterActions.getSearchInput(e.target.value)
    }
    render() {
        const { data } = this.props.stockCenter.strainCatalog
        return (
          <div className="container">
            <Grid cellWidth="1">
                <Cell align="center">
                      <h1 className="dicty-header">Strain Catalog</h1>
                </Cell>
            </Grid>
            <Grid cellWidth="1">
              <Cell align="center">
                <input
                  style={ {textAlign: 'center'} }
                  type="text"
                  placeholder="Search Strains"
                  onChange={ this.handleSearch.bind(this) }
                />
              </Cell>
            </Grid>
            {
              data
              ? <StrainTable
                  {...this.props}
                />
              : <Loader message="We're testing your patience." />
            }
          </div>
        )
    }
}
