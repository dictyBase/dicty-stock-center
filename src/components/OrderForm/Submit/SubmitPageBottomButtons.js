// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BackButton from "../BackButton"
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
        <BackButton pageNum={pageNum} setPageNum={setPageNum} />
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
