// @flow
import React from "react"
import { Field, ErrorMessage } from "formik"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { Grid } from "@material-ui/core"
import styles from "../formStyles"

type Props = {}

const User = (props: Props) => {
  const { classes, values, handleChange, handleBlur, touched, errors } = props
  console.log(values)
  return (
    <Grid container justify="center">
      <Grid item xs={11}>
        <TextField
          type="text"
          name="firstName"
          label="First Name"
          variant="filled"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={classes.textField}
          margin="normal"
          fullWidth
        />
        <ErrorMessage name="firstName">{err => <div>{err}</div>}</ErrorMessage>
        <TextField
          type="lastName"
          name="lastName"
          label="Last Name"
          variant="filled"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
        />
        <ErrorMessage name="lastName">{err => <div>{err}</div>}</ErrorMessage>
        <br />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(User)
