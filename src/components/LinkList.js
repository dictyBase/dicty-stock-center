// @flow
import React from "react"
import { Link } from "react-router-dom"
import { LinkedList } from "styles"

type Props = {
  /** List of links in array form */
  list: Array<Object>
}

/**
 * Generates a list of links based on a passed in array
 */

const LinkList = (props: Props) => {
  return (
    <LinkedList>
      <ul>
        {props.list.map((link, index) => {
          return (
            <li key={index}>
              {link.routerAware ? (
                <Link to={link.to}>{link.name}</Link>
              ) : (
                <a href={link.to}>{link.name}</a>
              )}
            </li>
          )
        })}
      </ul>
    </LinkedList>
  )
}

export default LinkList
