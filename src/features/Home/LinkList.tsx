import React from "react"
import { Link } from "react-router-dom"
import useStyles from "./homeStyles"

type Props = {
  /** List of links in array form */
  list: Array<{
    name: string
    to: string
    routerAware: boolean
  }>
  /** Color of panel background, either gray or blue */
  bgColor: string
}

/**
 * Generates a list of links based on a passed in array
 */

const LinkList = ({ list, bgColor }: Props) => {
  const classes = useStyles()

  // add simple header if the link list is for downloads panel
  const isDownloadPanel = list.some(
    (item) => item.name === "Phenotype Ontology",
  )

  return (
    <div className={bgColor === "gray" ? classes.panelGray : classes.panelBlue}>
      {isDownloadPanel && <h3>Download / View</h3>}
      <ul className={classes.list}>
        {list.map((link, index) => (
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

export default LinkList
