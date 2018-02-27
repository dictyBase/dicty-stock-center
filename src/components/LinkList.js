// @flow
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { LinkedList } from "styles"

type Props = {
  list: Array<Object>
}

export default class LinkList extends Component<Props> {
  render() {
    return (
      <LinkedList>
        <ul>
          {this.props.list.map((link, index) => {
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
