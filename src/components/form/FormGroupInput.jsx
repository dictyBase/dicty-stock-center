import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import { ControlLabel, FormGroup, FormControl, HelpBlock } from 'styles'

export default class FormGroupInput extends Component {
  displayName = 'form group with input'

  static propTypes = {
      field: PropTypes.object.isRequired,
      inputType: PropTypes.string,
      placeholder: PropTypes.string
  }

  static defaultProps = {
      inputType: 'text'
  }

  render() {
      const { field, inputType, placeholder } = this.props
      const hasError = field.touched && field.error

      return (
      <FormGroup>
        <Flex wrap justify="center">
          <Box w={ 1 / 4 } ml={ 2 } mb={ 2 }>
            <ControlLabel>{ this.props.children }</ControlLabel>
          </Box>
          <Box w={ 2 / 3 } mr={ 2 }>
            <FormControl
              type={ inputType }
              {...field}
              placeholder={ placeholder }
            />
            { hasError && <HelpBlock>{ field.error }</HelpBlock> }
          </Box>
        </Flex>
      </FormGroup>
    )
  }
}
