// @flow
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { LinkedList } from "styles"

type Props = {
  list: Array<Object>,
  title: string
}

export default class LinkList extends Component<Props> {
  displayName = "list of links"

  render() {
    const { title, list } = this.props
    return (
      <LinkedList>
        {title && <h3>{title}</h3>}
        <ul>
          {list.map((link, index) => {
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
}
