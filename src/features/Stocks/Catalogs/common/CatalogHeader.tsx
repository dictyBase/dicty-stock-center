import React from "react"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    paddingBottom: "10px",
  },
  notice: {
    color: "rgb(208, 2, 27)",
  },
})

type Props = {
  /** The title of the page (either Strain Catalog or Plasmid Catalog) */
  title: string
}

/**
 * CatalogHeader is the header at the top of every stock catalog page.
 */

const CatalogHeader = ({ title }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1" className={classes.notice}>
        PLEASE DO NOT ORDER FROM THIS TEST SITE. THIS IS FOR INTERNAL TESTING
        ONLY. THANKS!
      </Typography>
    </div>
  )
}

export default CatalogHeader
