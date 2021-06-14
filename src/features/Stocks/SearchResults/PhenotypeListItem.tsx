import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import { makeStyles } from "@material-ui/core/styles"
import { Strain, Gene, Publication } from "dicty-graphql-schema"
import GenesDisplay from "common/components/GenesDisplay"
import PublicationDisplay from "common/components/PublicationsDisplay"
import characterConverter from "common/utils/characterConverter"

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
  strain: Strain
}

const PhenotypeListItem = ({ strain }: Props) => {
  const classes = useStyles()

  const publications = strain?.publications as Publication[]
  const genes = strain?.genes as Gene[]

  let pubDisplay
  if (publications && publications.length) {
    pubDisplay = <PublicationDisplay publications={publications} />
  } else {
    pubDisplay = <React.Fragment />
  }

  return (
    <ListItem className={classes.row}>
      <Grid container spacing={0} alignItems="center">
        <Grid item sm={3} className={classes.item}>
          <Typography variant="body2" noWrap>
            <Link to={`/strains/${strain.id}`}>
              {characterConverter(strain.label)}
            </Link>
          </Typography>
        </Grid>
        <Grid item sm={3} className={classes.item}>
          <Typography variant="body2" noWrap>
            <GenesDisplay genes={genes} />
          </Typography>
        </Grid>
        <Grid item sm={6} className={classes.item}>
          <Typography component="span" variant="body2">
            {pubDisplay}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default PhenotypeListItem
