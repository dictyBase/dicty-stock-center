// @flow
import React from "react"
import { Flex, Box } from "rebass"
import { ControlLabel, FormGroup, FormControl, HelpBlock } from "styles"

type Props = {
  inputType: string,
  placeholder?: string,
  field: Object,
  children: any
}

const FormGroupInput = (props: Props) => {
  const { field, inputType, placeholder } = props
  const hasError = field.touched && field.error

  return (
    <FormGroup>
      <Flex wrap justify="center">
        <Box w={[1, 1 / 4, 1 / 4]} ml={1} mb={2} mr={1}>
          <ControlLabel>{props.children}</ControlLabel>
        </Box>
        <Box w={[1, "60%", "60%"]} mr={1} ml={1}>
          <FormControl type={inputType} {...field} placeholder={placeholder} />
          {hasError && <HelpBlock>{field.error}</HelpBlock>}
        </Box>
      </Flex>
    </FormGroup>
  )
}

FormGroupInput.defaultProps = {
  inputType: "text"
}

export default FormGroupInput
