import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import { ControlLabel, FormGroup, FormControlSelect, HelpBlock } from 'styles'

export default class FormGroupSelect extends Component {
  displayName = 'Select field component'

  static propTypes = {
      field: PropTypes.object.isRequired,
      list: PropTypes.array.isRequired,
      defaultValue: PropTypes.string,
      defaultTitle: PropTypes.string
  }

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
          <Box w={ 1 / 4 } ml={ 2 } mb={ 2 }>
            <ControlLabel>{ this.props.children }</ControlLabel>
          </Box>
          <Box w={ 2 / 3 } mr={ 2 }>
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
