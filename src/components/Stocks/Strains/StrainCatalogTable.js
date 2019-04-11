/* eslint-disable react/jsx-no-bind */
// @flow
import React, { useState } from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addToCart } from "actions/cart"
import StrainCatalogTableHeader from "./StrainCatalogTableHeader"

const styles = (theme: Object) => ({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  row: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.background.default,
    },
  },
  link: {
    textDecoration: "none",
    color: "#4C5E81",
    "&:visited": {
      color: "#4C5E81",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  head: {
    backgroundColor: "#0059b3",
  },
  headerCell: {
    color: "#fff",
    fontWeight: "600",
  },
})

type Props = {
  data: Array<{
    id: string,
    descriptor: string,
    summary: string,
  }>,
  addToCart: Function,
  /** Material-UI styling */
  classes: Object,
}

/**
 * StrainCatalogTable is the table used to display strain catalog data.
 */

const StrainCatalogTable = (props: Props) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const { classes, data, addToCart } = props

  return (
    <Paper className={classes.root}>
      <Table>
        <colgroup>
          <col style={{ width: "25%" }} />
          <col style={{ width: "45%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        {/* <StrainCatalogSearch/> */}
        <StrainCatalogTableHeader />
        <TableBody>
          {data.map((item: Object, index: number) => (
            <TableRow className={classes.row} key={index}>
              <TableCell component="th" scope="row">
                {item.descriptor}
              </TableCell>
              <TableCell>{item.summary}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="default"
                  size="small"
                  className={classes.button}
                  onClick={() => {
                    addToCart({
                      type: "strain",
                      id: item.id,
                      name: item.descriptor,
                    })
                    setSnackbarOpen(true)
                  }}>
                  <FontAwesomeIcon icon="share" /> &nbsp;Add to Cart
                </Button>
                <Snackbar
                  autoHideDuration={2500}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  open={snackbarOpen}
                  onClose={() => setSnackbarOpen(false)}
                  ContentProps={{
                    "aria-describedby": "cart-id",
                  }}
                  message={
                    <span id="cart-id">
                      <FontAwesomeIcon icon="check-circle" /> &nbsp; Item{" "}
                      {item.id} added to cart
                    </span>
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default connect(
  null,
  { addToCart },
)(withStyles(styles)(StrainCatalogTable))
