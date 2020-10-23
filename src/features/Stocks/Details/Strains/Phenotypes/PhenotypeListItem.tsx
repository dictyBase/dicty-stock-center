import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import PublicationsDisplay from "features/Stocks/Details/common/PublicationsDisplay"
import useStyles from "./phenotypeStyles"
import { PhenotypeData } from "features/Stocks/Details/types/props"

type Props = {
  /** Phenotype data object */
  data: PhenotypeData
}

const replaceSpaces = (phenotype: string) => phenotype.split(" ").join("+")

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
          <Typography variant="body2">
            <Link to={`/phenotypes/${replaceSpaces(data.phenotype)}`}>
              {data.phenotype}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">{data.note}</Typography>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">
            {data.assay && (
              <span>
                <strong>Assay: </strong>
                {data.assay}
                <br />
              </span>
            )}
            {data.environment && (
              <span>
                <strong>Environment: </strong>
                {data.environment}
              </span>
            )}
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.item}>
          <Typography variant="body2">
            {data.publication && (
              <PublicationsDisplay publications={[data.publication]} />
            )}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default PhenotypeListItem
