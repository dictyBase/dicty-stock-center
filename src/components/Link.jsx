import React, { Component } from 'react'

export default class Link extends Component {
  displayName = 'editor link'
  render() {
      const { entityKey, children, contentState } = this.props
      const { url } = contentState.getEntity(entityKey).getData()
      return (
        <a href={ url }>
            { children }
        </a>
      )
  }
}
