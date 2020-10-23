import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import { makeStyles } from "@material-ui/core/styles"
import GenesDisplay from "features/Stocks/Details/common/GenesDisplay"
import PhenotypePublicationDisplay from "./PhenotypePublicationDisplay"
import characterConverter from "common/utils/characterConverter"
import { StrainWithPhenotype } from "../Details/types/props"

const useStyles = makeStyles({
  row: {
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
  },
  item: {
    paddingRight: "10px",
    fontSize: "0.9rem",
  },
})

type Props = {
  strain: StrainWithPhenotype
}

const PhenotypeListItem = ({ strain }: Props) => {
  const classes = useStyles()

  return (
    <ListItem key={strain.id} className={classes.row}>
      <Grid container spacing={0} alignItems="center">
        <Grid item sm={2} className={classes.item}>
          <Typography variant="body2" noWrap>
            <Link to={`/strains/${strain.id}`}>
              {characterConverter(strain.label)}
            </Link>
          </Typography>
        </Grid>
        <Grid item sm={3} className={classes.item}>
          <Typography variant="body2" noWrap>
            <GenesDisplay genes={strain.genes} />
          </Typography>
        </Grid>
        <Grid item sm={7} className={classes.item}>
          <Typography variant="body2">
            <PhenotypePublicationDisplay publication={strain.publications[0]} />
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default PhenotypeListItem
