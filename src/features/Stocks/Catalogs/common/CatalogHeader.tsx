import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme: Theme) => ({
  notice: {
    color: theme.palette.error.main,
    marginBottom: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}))

type Props = {
  /** Title of catalog page */
  title: "Strain Catalog" | "Plasmid Catalog"
}

/**
 * CatalogHeader is the header at the top of every stock catalog page.
 */

const CatalogHeader = ({ title }: Props) => {
  const classes = useStyles()

  return (
    <Box textAlign="center" p={1}>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.notice}>
        PLEASE DO NOT ORDER FROM THIS TEST SITE. THIS IS FOR INTERNAL TESTING
        ONLY. THANKS!
      </Typography>
    </Box>
  )
}

export default CatalogHeader
