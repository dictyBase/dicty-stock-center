import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import { ControlLabel, FormGroup, FormTextArea } from 'styles'

export default class Comments extends Component {
  displayName = 'form contact information'

  static propTypes = {
      comments: PropTypes.object.isRequired,
      placeholder: PropTypes.string,
      rows: PropTypes.string
  }

  render() {
      const { comments, placeholder, rows, children } = this.props
      return (
      <FormGroup>
        <Flex wrap justify="center">
          <Box w={ 1 / 4 } ml={ 2 } mb={ 2 }>
            <ControlLabel>{ children }</ControlLabel>
          </Box>
          <Box w={ 2 / 3 } mr={ 2 } mb={ 2 }>
            <FormTextArea
              rows={ rows }
              {...comments}
              value={ comments.value }
              placeholder={ placeholder }
            />
          </Box>
        </Flex>
      </FormGroup>
    )
  }
}
