// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "../formStyles"
import { Props } from "./types"

/**
 * SubmitPageBottomButtons is the display for the buttons at the bottom of
 * the final submit page.
 */

const SubmitPageBottomButtons = ({
  pageNum,
  setPageNum,
  isSubmitting,
}: Props) => {
  const classes = useStyles()

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={2} />
      <Grid item xs={4}>
        <Button
          color="primary"
          size="large"
          className={classes.previousBtn}
          onClick={() => setPageNum(pageNum - 1)}>
          <FontAwesomeIcon icon="arrow-circle-left" />
          &nbsp; Back
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          type="submit"
          size="large"
          className={classes.submitBtn}
          disabled={isSubmitting}>
          Submit Order &nbsp;
          <FontAwesomeIcon icon="check-circle" />
        </Button>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  )
}

export default SubmitPageBottomButtons
