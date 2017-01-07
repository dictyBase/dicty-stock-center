import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import Loader from 'components/Loader'
import SearchBar from 'components/SearchBar'
import StrainTable from 'components/StrainTable'
import 'styles/custom.scss'

export default class Strains extends Component {
    displayName = 'strains list'
    componentDidMount() {
        const { stockCenterActions } = this.props
        const { number } = this.props.stockCenter.strainCatalog.meta.pagination
        stockCenterActions.fetchPage(number, 10)
    }
    search(text) {
        const { stockCenterActions } = this.props
        stockCenterActions.fetchStrainSearch(text)
        this.forceUpdate()
    }
    clearSearch() {
        const { stockCenterActions } = this.props
        stockCenterActions.clearStrainSearch()
        stockCenterActions.fetchPage(1, 10)
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
            <SearchBar
              clearSearch={ this.clearSearch.bind(this) }
              search={ this.search.bind(this) }
              placeholder="Search Strains"
            />
            {
              data.length !== 0
              ? <StrainTable {...this.props} />
              : <Loader message="We're testing your patience." />
            }
          </div>
        )
    }
}
