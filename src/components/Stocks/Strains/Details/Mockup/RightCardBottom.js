// @flow
import React from "react"
import Card from "@material-ui/core/Card"
// import CardHeader from "@material-ui/core/CardHeader"
// import CardMedia from "@material-ui/core/CardMedia"
// import CardContent from "@material-ui/core/CardContent"
// import CardActions from "@material-ui/core/CardActions"
import useStyles from "./styles"

const RightCard = () => {
  const classes = useStyles()

  return (
    <Card raised className={classes.rightCardBottom}>
      more strains with xyz
    </Card>
  )
}

export default RightCard
