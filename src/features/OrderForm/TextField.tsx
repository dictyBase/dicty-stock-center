import React from "react"
import { useField, FieldAttributes } from "formik"
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@material-ui/core/TextField"

type Props = {
  /** Margin for MUI TextField */
  margin?: string
  /** Variant for MUI TextField */
  variant?: string
  /** fullWidth for MUI TextField */
  fullWidth?: boolean
} & FieldAttributes<{}> &
  MuiTextFieldProps

/**
 * TextField is a wrapper component that puts all Formik and MUI props
 * on the Material-UI TextField component.
 */
const TextField = ({
  margin = "dense",
  variant = "outlined",
  fullWidth = true,
  ...props
}: Props) => {
  const [field, meta] = useField<{}>(props)

  return (
    <MuiTextField
      {...field}
      type="text"
      margin={margin}
      variant={variant}
      fullWidth={fullWidth}
      error={meta.touched && !!meta.error}
      inputProps={{ "aria-label": props.name }}
      helperText={meta.touched && meta.error}
      {...props}
    />
  )
}

export default TextField
