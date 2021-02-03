import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginRight: theme.spacing(1),
    minWidth: "200px",
  },
}))

type Props = {
  /** Function to move to previous step */
  prevStep: Function
}

/**
 * BackButton displays the Back button on each page of the order form.
 */
const BackButton = ({ prevStep }: Props) => {
  const classes = useStyles()

  return (
    <Button
      color="default"
      size="large"
      variant="contained"
      className={classes.button}
      startIcon={<FontAwesomeIcon icon="arrow-circle-left" />}
      onClick={() => prevStep()}>
      Back
    </Button>
  )
}

export default BackButton
