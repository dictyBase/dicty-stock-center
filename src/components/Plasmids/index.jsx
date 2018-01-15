// @flow
import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'
import PlasmidTable from 'components/Plasmids/PlasmidTable'
import { Flex, Box } from 'rebass'
import { DictyHeader, Container } from 'styles'

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
