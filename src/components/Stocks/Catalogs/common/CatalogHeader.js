import React from "react"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    paddingBottom: "5px",
  },
})

type Props = {
  /** The title of the page (generally stock ID) */
  title: string,
}

/**
 * StockDetailsHeader is the header at the top of every stock details page.
 */

const CatalogHeader = ({ title }: Props) => {
  const classes = useStyles()

  return (
    <Typography variant="h4" className={classes.header}>
      {title}
    </Typography>
  )
}

export default CatalogHeader
