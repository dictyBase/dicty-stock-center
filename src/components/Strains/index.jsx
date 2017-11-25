import React, { Component } from 'react'
import Loader from 'components/Loader'
import SearchBar from 'components/SearchBar'
import StrainTable from 'components/Strains/StrainTable'
import { Flex, Box } from 'rebass'
import { DictyHeader } from 'styles'
import 'styles/custom.scss'

export default class Strains extends Component {
    displayName = 'strains list'
    componentDidMount() {
        const stockCenterActions: Object = this.props.stockCenterActions
        const number: number = this.props.stockCenter.strainCatalog.meta
            .pagination.number
        stockCenterActions.fetchStrains(number, 10)
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
        const data: Array<Object> = this.props.stockCenter.strainCatalog.data
        return (
            <div className="container">
                <Flex justify="center">
                    <Box>
                        <DictyHeader>
                            <h1>Strain Catalog</h1>
                        </DictyHeader>
                    </Box>
                </Flex>
                <SearchBar
                    clearSearch={ this.clearSearch.bind(this) }
                    search={ this.search.bind(this) }
                    placeholder="Search Strains"
                />
                { data.length !== 0 ? (
                    <StrainTable {...this.props} />
                ) : (
                    <Loader message="We're testing your patience." />
                ) }
            </div>
        )
    }
}
