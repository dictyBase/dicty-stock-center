import React, { Component } from 'react'
import { contentState } from 'draft-js'

export default class Link extends Component {
  displayName = 'editor link'
  render() {
      const { entityKey, children } = this.props
      const { url } = contentState.getEntity(entityKey).getData()
      return (
        <a href={ url }>
            { children }
        </a>
      )
  }
}
