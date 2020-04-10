import React from "react"
import useStyles from "./myDscStyles"

/**
 * MyDscHeader displays the header on the MyDsc page.
 */

const MyDscHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <h2>My DSC</h2>
    </div>
  )
}

export default MyDscHeader
