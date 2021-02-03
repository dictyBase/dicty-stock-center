import React from "react"
import Typography, { TypographyProps } from "@material-ui/core/Typography"

type Props = {
  /** Required label to display */
  title: string
  /** Typography variant for title */
  variant?: TypographyProps["variant"]
}

/**
 * RequiredTextLabel is the text display for any field that is required for
 * submission.
 */
const RequiredTextLabel = ({ title, variant = "body1" }: Props) => {
  return (
    <React.Fragment>
      <Typography component="span" color="error">
        *
      </Typography>
      &nbsp;
      <Typography variant={variant} component="span">
        {title}:
      </Typography>
    </React.Fragment>
  )
}

export default RequiredTextLabel
