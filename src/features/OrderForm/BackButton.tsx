import React from "react"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "./formStyles"

type Props = {
  /** Function to move to previous step */
  prevStep: Function
}

/**
 * BackButton displays the Back button on each order form page.
 */

const BackButton = ({ prevStep }: Props) => {
  const classes = useStyles()

  return (
    <Button
      color="primary"
      size="large"
      className={classes.backBtn}
      startIcon={<FontAwesomeIcon icon="arrow-circle-left" />}
      onClick={() => prevStep()}>
      Back
    </Button>
  )
}

export default BackButton
