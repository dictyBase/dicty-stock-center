import React, { Component } from 'react'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'

// type Props = {
//   right: Object,
//   left: Object
// }

const BorderBox = styled(Box)`
  border: 1px solid grey;
`

export default class StrainDetailRow extends Component {
    displayName = 'stock detail row'
    render() {
        return (
          <Flex wrap justify="center">
            <BorderBox w={ 1 / 3 } p={ 1 }>
              <b>{ Object.keys(this.props.left)[0] }</b>
            </BorderBox>
            <BorderBox w={ 2 / 3 } p={ 1 }>
              { Object.values(this.props.left)[0] }
            </BorderBox>
            <BorderBox w={ 1 / 3 } p={ 1 }>
            <b>{ this.props.right ? Object.keys(this.props.right)[0] : '\u00A0' }</b>
            </BorderBox>
            <BorderBox w={ 2 / 3 } p={ 1 }>
            { this.props.right && Object.values(this.props.right)[0] }
            </BorderBox>
          </Flex>
        )
    }
}
