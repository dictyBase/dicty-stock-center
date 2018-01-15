import React, { Component } from 'react'
// import SearchBar from 'components/SearchBar'
import StrainTable from 'components/Strains/StrainTable'
import Skeleton from 'react-loading-skeleton'
import { Flex, Box } from 'rebass'
import { DictyHeader, Container } from 'styles'

export default class Strains extends Component {
  displayName = 'strains list'
  componentDidMount() {
      const stockCenterActions: Object = this.props.stockCenterActions
      const number: number = this.props.stockCenter.strainCatalog.meta.pagination
      .number
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
      <Container>
        <Flex justify="center">
          <Box>
            <DictyHeader>
              <h1>Strain Catalog</h1>
            </DictyHeader>
          </Box>
        </Flex>
        { data.length !== 0 ? (
          <StrainTable {...this.props} />
        ) : (
            <Flex justify="center">
                <Box w={ '80%' }>
                    <h1>{ this.props.title || <Skeleton /> }</h1>
                    <Skeleton count={ 10 } />
                    <br /><br />
                    <Skeleton count={ 10 } />
                    <br /><br />
                    <Skeleton count={ 10 } />
                </Box>
            </Flex>
        ) }
      </Container>
    )
  }
}
