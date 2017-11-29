// @flow
import React, { Component } from 'react'
import Loader from 'components/Loader'
import PlasmidTable from 'components/Plasmids/PlasmidTable'
import { Flex, Box } from 'rebass'
import { DictyHeader } from 'styles'

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
              : <Loader message="We're testing your patience." />
            }
          </div>
        )
    }
}
