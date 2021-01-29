import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    minWidth: "200px",
  },
}))

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
      className={classes.button}>
      Continue
    </Button>
  )
}

export default ContinueButton
