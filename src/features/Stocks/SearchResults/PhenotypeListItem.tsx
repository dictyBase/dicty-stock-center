import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Hidden from "@material-ui/core/Hidden"
import { makeStyles } from "@material-ui/core/styles"
import { ListChildComponentProps } from "react-window"
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
        <Grid item xs={12} sm={4} className={classes.item}>
          <Typography noWrap>
            <Link to={`/strains/${strain.id}`}>
              {characterConverter(strain.label)}
            </Link>
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4} className={classes.item}>
            <Typography noWrap>{strain.genes[0]}</Typography>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item lg={4} className={classes.item}>
            <Typography noWrap>{strain.publications[0].id}</Typography>
          </Grid>
        </Hidden>
      </Grid>
    </ListItem>
  )
}

export default PhenotypeListItem
