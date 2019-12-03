// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import PublicationsDisplay from "components/Stocks/Details/common/PublicationsDisplay"
import useStyles from "./phenotypeStyles"
import { PhenotypeData } from "components/Stocks/Details/types/props"

type Props = {
  data: PhenotypeData,
}

/**
 * PhenotypeListItem handles the display of an individual
 * row of phenotype data.
 */

const PhenotypeListItem = ({ data }: Props) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.row}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">{data.phenotype}</Typography>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">{data.note}</Typography>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">
            {data.assay && (
              <div>
                <strong>Assay: </strong>
                {data.assay}
                <br />
              </div>
            )}
            {data.environment && (
              <div>
                <strong>Environment: </strong>
                {data.environment}
              </div>
            )}
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">
            <PublicationsDisplay publications={[data.publication]} />
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default PhenotypeListItem
