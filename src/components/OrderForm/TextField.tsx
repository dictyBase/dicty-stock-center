import React from "react"
import { useField } from "formik"
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@material-ui/core/TextField"

/**
 * TextField is a wrapper component that puts all Formik and MUI props
 * on the Material-UI TextField component.
 */

const TextField = ({
  margin = "dense",
  variant = "outlined",
  fullWidth = true,
  ...props
}: MuiTextFieldProps) => {
  const [field, meta] = useField(props as any)

  return (
    <MuiTextField
      {...field}
      type="text"
      margin={margin}
      variant={variant}
      fullWidth={fullWidth}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      {...props}
    />
  )
}

export default TextField
