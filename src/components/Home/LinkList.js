// @flow
import React from "react"
import { Link } from "react-router-dom"
import useStyles from "./homeStyles"

type Props = {
  /** List of links in array form */
  list: Array<{
    name: string,
    to: string,
    routerAware: boolean,
  }>,
  /** Color of panel background, either gray or blue */
  bgColor: string,
}

/**
 * Generates a list of links based on a passed in array
 */

const LinkList = ({ list, bgColor }: Props) => {
  const classes = useStyles()

  return (
    <div className={bgColor === "gray" ? classes.panelGray : classes.panelBlue}>
      <ul className={classes.list}>
        {list.map((link, index) => (
          <li key={index}>
            {link.routerAware ? (
              <Link to={link.to} className={classes.link}>
                {link.name}
              </Link>
            ) : (
              <a href={link.to} className={classes.link}>
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinkList
