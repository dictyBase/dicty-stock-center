import React from "react"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "./formStyles"

/**
 * ContinueButton displays the continue button on each order form page.
 */

const ContinueButton = () => {
  const classes = useStyles()

  return (
    <Button
      aria-label="Continue Button"
      type="submit"
      size="large"
      color="primary"
      variant="contained"
      endIcon={<FontAwesomeIcon icon="arrow-circle-right" />}
      className={classes.continueBtn}>
      Continue
    </Button>
  )
}

export default ContinueButton
