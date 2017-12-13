import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import {
  RequiredText,
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
  RadioInline
} from 'styles'

export default class PaymentInfo extends Component {
  displayName = 'payment information'

  static propTypes = {
      payMethod: PropTypes.object.isRequired,
      poNum: PropTypes.object.isRequired
  }

  renderPoNumber = () => {
      const { poNum } = this.props
      return (
      <FormGroup>
        <Flex wrap justify="center">
          <Box w={ [1, '30%', '30%'] } ml={ 1 } mb={ 2 } mr={ 1 } />
          <Box w={ ['85%', '55%', '55%'] } mr={ 1 } ml={ 1 } mt={ 1 }>
            <FormControl {...poNum} placeholder="PO Number" />
          </Box>
        </Flex>
      </FormGroup>
    )
  }

  render() {
      const { payMethod } = this.props
      const hasError = payMethod.touched && payMethod.error
      return (
      <FormGroup>
        <Flex wrap justify="center">
          <Box w={ [1, '30%', '30%'] } ml={ 1 } mb={ 2 } mr={ 1 }>
            <ControlLabel>
              <RequiredText title="required field">* </RequiredText>
              Payment Method:
            </ControlLabel>
          </Box>
          <Box w={ [1, '55%', '55%'] } mr={ 1 } ml={ 1 }>
            <RadioInline>
              <input
                type="radio"
                {...payMethod}
                value="Credit card"
                checked={ payMethod.value === 'Credit card' }
              />&nbsp; Credit Card
            </RadioInline>
            <RadioInline>
              <input
                type="radio"
                {...payMethod}
                value="Wire transfer"
                checked={ payMethod.value === 'Wire transfer' }
              />&nbsp; Wire Transfer
            </RadioInline>
            <RadioInline>
              <input
                type="radio"
                {...payMethod}
                value="PO"
                checked={ payMethod.value === 'PO' }
              />&nbsp; Purchase Order (PO)
            </RadioInline>
            { hasError && <HelpBlock>{ payMethod.error }</HelpBlock> }
          </Box>
        </Flex>
        { payMethod.value === 'PO' && this.renderPoNumber() }
      </FormGroup>
    )
  }
}
