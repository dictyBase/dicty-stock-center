import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import { makeStyles } from "@material-ui/core/styles"
import { ListChildComponentProps } from "react-window"
import GenesDisplay from "features/Stocks/Details/common/GenesDisplay"
import PublicationsDisplay from "features/Stocks/Details/common/PublicationsDisplay"
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

const PhenotypeListItem = ({ index, style, data }: ListChildComponentProps) => {
  const classes = useStyles()
  const strain = data.item[index]

  return (
    <ListItem key={strain.id} className={classes.row} style={style}>
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
            <GenesDisplay genes={strain.genes} />
          </Typography>
        </Grid>
        <Grid item sm={6} className={classes.item}>
          <Typography variant="body2">
            <PublicationsDisplay publications={strain.publications} />
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default PhenotypeListItem
