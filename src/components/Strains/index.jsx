// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import Skeleton from "react-loading-skeleton"
import { Flex, Box } from "rebass"
import { fetchStrains, clearStrainSearch } from "actions/stockCenter"
import StrainTable from "components/Strains/StrainTable"
import { DictyHeader, Container } from "styles"

type Props = {
  fetchStrains: Function,
  paginationNumber: number,
  strainCatalogData: Array<Object>,
  clearStrainSearch: Function,
  title: string
}

class Strains extends Component<Props> {
  componentDidMount() {
    const fetchStrains = this.props.fetchStrains
    const number = this.props.paginationNumber
    fetchStrains(number, 10)
  }
  search(text) {
    // implement strain search
    this.forceUpdate()
  }
  clearSearch() {
    this.props.clearStrainSearch()
    this.props.fetchStrains(1, 10)
  }
  render() {
    const data = this.props.strainCatalogData
    return (
      <Container>
        <Flex justify="center">
          <Box>
            <DictyHeader>
              <h1>Strain Catalog</h1>
            </DictyHeader>
          </Box>
        </Flex>
        {data.length !== 0 ? (
          <StrainTable {...this.props} />
        ) : (
          <Flex justify="center">
            <Box w={"80%"}>
              <h1>{this.props.title || <Skeleton />}</h1>
              <Skeleton count={10} />
              <br />
              <br />
              <Skeleton count={10} />
              <br />
              <br />
              <Skeleton count={10} />
            </Box>
          </Flex>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    strainCatalogData: state.stockCenter.strainCatalog.data,
    paginationNumber: state.stockCenter.strainCatalog.meta.pagination.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStrains: (page, size) => {
      dispatch(fetchStrains(page, size))
    },
    clearStrainSearch: () => {
      dispatch(clearStrainSearch())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Strains)
