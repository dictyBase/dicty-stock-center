import React from "react"
import { Field } from "formik"
import { TextField as MuiTextField } from "@material-ui/core"

const InputField = ({
  children,
  field,
  form,
  margin = "dense",
  variant = "outlined",
  fullWidth = true,
  helperText,
  ...restMuiProps
}) => (
  <MuiTextField
    {...field}
    margin={margin}
    variant={variant}
    fullWidth={fullWidth}
    error={
      form.touched &&
      form.touched[field.name] &&
      form.errors &&
      !!form.errors[field.name]
    }
    helperText={
      form.touched &&
      form.touched[field.name] &&
      form.errors &&
      form.errors[field.name]
    }
    {...restMuiProps}>
    {children}
  </MuiTextField>
)

const TextField = props => <Field {...props} component={InputField} />

export default TextField
