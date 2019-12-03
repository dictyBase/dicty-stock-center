// @flow
import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import PublicationsDisplay from "components/Stocks/Details/common/PublicationsDisplay"
import useStyles from "./phenotypeStyles"
import { PhenotypeData } from "components/Stocks/Details/types/props"

type Props = {
  data: Array<PhenotypeData>,
}

/**
 * PhenotypeListItem handles the display of an individual
 * row of phenotype data.
 */

const PhenotypeListItem = ({ data }: Props) => {
  const classes = useStyles()

  return data.map<*>((item, index) => (
    <ListItem key={index} className={classes.row}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">{item.phenotype}</Typography>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">{item.note}</Typography>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">
            {item.assay && (
              <Fragment>
                <strong>Assay: </strong>
                {item.assay}
                <br />
              </Fragment>
            )}
            {item.environment && (
              <Fragment>
                <strong>Environment: </strong>
                {item.environment}
              </Fragment>
            )}
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">
            <PublicationsDisplay publications={[item.publication]} />
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  ))
}

export default PhenotypeListItem
