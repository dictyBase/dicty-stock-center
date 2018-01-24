// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { Flex, Box } from 'rebass'
import PlasmidTable from './PlasmidTable'
import { fetchPlasmids } from 'actions/stockCenter'
import { DictyHeader, Container } from 'styles'

class Plasmids extends Component {
    displayName = 'plasmids list'
    componentDidMount() {
        const fetchPlasmids: Function = this.props.fetchPlasmids
        const number: number = this.props.paginationNumber
        fetchPlasmids(number, 10)
    }
    render() {
        const data: Array<Object> = this.props.plasmidCatalogData
        return (
          <Container>
            <Flex justify="center">
                <Box>
                  <DictyHeader>
                    <h1>Plasmid Catalog</h1>
                  </DictyHeader>
                </Box>
            </Flex>
            {
              data.length !== 0
              ? <PlasmidTable {...this.props} />
              : (
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
              )
            }
          </Container>
        )
    }
}

const mapStateToProps = state => {
  return {
      plasmidCatalogData: state.stockCenter.plasmidCatalog.data,
      paginationNumber: state.stockCenter.plasmidCatalog.meta.pagination.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchPlasmids: (page, size) => {
          dispatch(fetchPlasmids(page, size))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plasmids)
