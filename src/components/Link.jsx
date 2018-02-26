import React, { Component } from "react"

export default class Link extends Component {
  render() {
    const { entityKey, children, contentState } = this.props
    const { url } = contentState.getEntity(entityKey).getData()
    return <a href={url}>{children}</a>
  }
}
