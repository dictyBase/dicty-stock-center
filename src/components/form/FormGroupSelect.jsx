// @flow
import React, { Component } from 'react'
import { Flex, Box } from 'rebass'
import { ControlLabel, FormGroup, FormControlSelect, HelpBlock } from 'styles'

type Props = {
  field: Object,
  list: Array<string>,
  defaultValue: string,
  defaultTitle: string
}

export default class FormGroupSelect extends Component<Props> {
  displayName = 'Select field component'

  static defaultProps = {
      defaultValue: 'select',
      defaultTitle: '-- Select --'
  }

  render() {
      const { field, list, defaultValue, defaultTitle } = this.props
      const hasError = field.touched && field.error
      return (
      <FormGroup>
        <Flex wrap justify="center">
          <Box w={ [1, 1 / 4, 1 / 4] } ml={ 1 } mb={ 2 } mr={ 1 }>
            <ControlLabel>{ this.props.children }</ControlLabel>
          </Box>
          <Box w={ [1, '60%', '60%'] } mr={ 1 } ml={ 1 }>
            <FormControlSelect {...field} value={ field.value || '' }>
              <option value={ defaultValue }>{ defaultTitle }</option>
              { list &&
                list.map(item => {
                    return (
                    <option key={ list.indexOf(item) } value={ item }>
                      { item }
                    </option>
                  )
                }) }
            </FormControlSelect>
            { hasError && <HelpBlock>{ field.error }</HelpBlock> }
          </Box>
        </Flex>
      </FormGroup>
    )
  }
}
