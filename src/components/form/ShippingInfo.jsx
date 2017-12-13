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

export default class ShippingInfo extends Component {
  displayName = 'form shipping information'

  static propTypes = {
      shipAccount: PropTypes.object.isRequired,
      shipAccountNum: PropTypes.object.isRequired
  }

  renderShipAccountNum = () => {
      const { shipAccountNum } = this.props
      return (
      <FormGroup>
        <Flex wrap justify="center">
          <Box w={ [1, '30%', '30%'] } ml={ 1 } mb={ 2 } mr={ 1 }/>
          <Box w={ ['85%', '55%', '55%'] } mr={ 1 } ml={ 1 } mt={ 1 }>
            <FormControl
              {...shipAccountNum}
              placeholder="Shipping Account Number"
            />
            { shipAccountNum.error && (
              <HelpBlock>{ shipAccountNum.error }</HelpBlock>
            ) }
          </Box>
        </Flex>
      </FormGroup>
    )
  }

  render() {
      const { shipAccount } = this.props
      const hasError = shipAccount.touched && shipAccount.error
      return (
      <FormGroup>
        <Flex wrap justify="center">
          <Box w={ [1, '30%', '30%'] } ml={ 1 } mb={ 2 } mr={ 1 }>
            <ControlLabel>
              <RequiredText>* </RequiredText>
              Shipping Account:
            </ControlLabel>
          </Box>
          <Box w={ [1, '55%', '55%'] } mr={ 1 } ml={ 1 }>
            <RadioInline>
              <input
                type="radio"
                {...shipAccount}
                value="Fedex"
                checked={ shipAccount.value === 'Fedex' }
              />&nbsp; FedEx
            </RadioInline>
            <RadioInline>
              <input
                type="radio"
                {...shipAccount}
                value="UPS"
                checked={ shipAccount.value === 'UPS' }
              />&nbsp; UPS
            </RadioInline>
            <RadioInline>
              <input
                type="radio"
                {...shipAccount}
                value="DHL"
                checked={ shipAccount.value === 'DHL' }
              />&nbsp; DHL
            </RadioInline>
            <RadioInline>
              <input
                type="radio"
                {...shipAccount}
                value="Will call 1-312-503-4169"
                checked={ shipAccount.value === 'Will call 1-312-503-4169' }
              />&nbsp; Call in Credit card # for FedEx Waybill 1-312-503-4169
            </RadioInline>
            { hasError && <HelpBlock>{ shipAccount.error }</HelpBlock> }
          </Box>
        </Flex>
        { !(shipAccount.value === 'Will call 1-312-503-4169') &&
          this.renderShipAccountNum() }
      </FormGroup>
    )
  }
}
