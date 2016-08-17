import React, { Component } from 'react'
import { Entity } from 'draft-js'

export default class Link extends Component {
  displayName = 'editor link'
  render() {
      const { entityKey, children } = this.props
      const { url } = Entity.get(entityKey).getData()
      return (
        <a href={ url }>
            { children }
        </a>
      )
  }
}
