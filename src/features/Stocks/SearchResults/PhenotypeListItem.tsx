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
      boxShadow:
        "inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)",
      zIndex: 1,
    },
  },
  item: {
    paddingRight: "10px",
  },
})

const PhenotypeListItem = ({ index, style, data }: ListChildComponentProps) => {
  const classes = useStyles()
  const strain = data.item[index]

  return (
    <ListItem key={strain.id} className={classes.row} style={style}>
      <Grid container spacing={0} alignItems="center">
        <Grid item sm={3} className={classes.item}>
          <Typography noWrap>
            <Link to={`/strains/${strain.id}`}>
              {characterConverter(strain.label)}
            </Link>
          </Typography>
        </Grid>
        <Grid item sm={3} className={classes.item}>
          <Typography noWrap>
            <GenesDisplay genes={strain.genes} />
          </Typography>
        </Grid>
        <Grid item sm={6} className={classes.item}>
          <Typography>
            <PublicationsDisplay publications={strain.publications} />
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default PhenotypeListItem
