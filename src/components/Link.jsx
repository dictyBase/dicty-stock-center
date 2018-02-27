// @flow
import React, { Component } from "react"

type Props = {
  entityKey: string,
  children: any,
  contentState: Function
}

export default class Link extends Component<Props> {
  render() {
    const { entityKey, children, contentState } = this.props
    const { url } = contentState.getEntity(entityKey).getData()
    return <a href={url}>{children}</a>
  }
}
