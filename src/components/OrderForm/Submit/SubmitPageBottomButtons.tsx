import React from "react"
import Grid from "@material-ui/core/Grid"
import BackButton from "../BackButton"
import SubmitButton from "./SubmitButton"
import { PageProps } from "../types"

/**
 * SubmitPageBottomButtons is the display for the buttons at the bottom of
 * the final submit page.
 */

const SubmitPageBottomButtons = ({
  pageNum,
  setPageNum,
  setSubmitError,
}: PageProps) => (
  <Grid container justify="center" spacing={2}>
    <Grid item xs={2} />
    <Grid item xs={4}>
      <BackButton pageNum={pageNum} setPageNum={setPageNum} />
    </Grid>
    <Grid item xs={4}>
      <SubmitButton setSubmitError={setSubmitError} />
    </Grid>
    <Grid item xs={2} />
  </Grid>
)

export default SubmitPageBottomButtons
