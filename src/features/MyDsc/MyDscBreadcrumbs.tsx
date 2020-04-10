import React from "react"
import { Link } from "react-router-dom"
import useStyles from "./myDscStyles"

/**
 * MyDscBreadcrumbs displays the breadcrumbs at the top of the MyDsc page.
 */

const MyDscBreadcrumbs = () => {
  const classes = useStyles()

  return (
    <ol className={classes.breadcrumb}>
      <li className={classes.breadcrumbFirstItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={classes.breadcrumbItem}>MyDSC</li>
    </ol>
  )
}

export default MyDscBreadcrumbs
