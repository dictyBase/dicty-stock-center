// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
})

type Props = {
  /** List of links in array form */
  list: Array<Object>,
  /** Material-UI styling */
  classes: Object,
}

/**
 * Generates a list of links based on a passed in array
 */

const LinkList = (props: Props) => {
  const { classes } = props

  return (
    <div>
      <ul className={classes.list}>
        {props.list.map((link, index) => (
          <li key={index}>
            {link.routerAware ? (
              <Link to={link.to}>{link.name}</Link>
            ) : (
              <a href={link.to}>{link.name}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withStyles(styles)(LinkList)
