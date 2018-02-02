// @flow
import React, { Component } from 'react'
import { Flex, Box } from 'rebass'
import { ControlLabel, FormGroup, FormControl, HelpBlock } from 'styles'

type Props = {
  field: Object,
  inputType: string,
  placeholder: string
}

export default class FormGroupInput extends Component<Props> {
  displayName = 'form group with input'

  static defaultProps = {
      inputType: 'text'
  }

  render() {
      const { field, inputType, placeholder } = this.props
      const hasError = field.touched && field.error

      return (
      <FormGroup>
        <Flex wrap justify="center">
          <Box w={ [1, 1 / 4, 1 / 4] } ml={ 1 } mb={ 2 } mr={ 1 }>
            <ControlLabel>{ this.props.children }</ControlLabel>
          </Box>
          <Box w={ [1, '60%', '60%'] } mr={ 1 } ml={ 1 }>
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
