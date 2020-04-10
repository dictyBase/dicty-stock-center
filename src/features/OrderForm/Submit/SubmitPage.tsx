import React from "react"
import Grid from "@material-ui/core/Grid"
import ShoppingCartItemList from "features/ShoppingCart/ShoppingCartItemList"
import SubmitPageBottomButtons from "./SubmitPageBottomButtons"
import useStyles from "../formStyles"
import { PageProps } from "../types"

/**
 * SubmitPage is the final page the user sees before submitting the order.
 */

export const SubmitPage = ({
  pageNum,
  setPageNum,
  setSubmitError,
}: PageProps) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.innerForm}>
      <Grid item xs={12}>
        <div className={classes.submitPage}>
          <Grid container justify="center">
            <ShoppingCartItemList />
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <SubmitPageBottomButtons
          pageNum={pageNum}
          setPageNum={setPageNum}
          setSubmitError={setSubmitError}
        />
      </Grid>
    </Grid>
  )
}

export default SubmitPage
