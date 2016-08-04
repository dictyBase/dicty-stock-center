import React, { Component } from 'react'

export default class ToolItem extends Component {
    displayName = 'button for toolbar'
    onClick = (e) => {
        e.preventDefault()
        const { type, clickFn } = this.props
        clickFn(type.style)
    }
    render() {
        const { type, active } = this.props
        const className = active ? 'btn btn-default btn-sm active'
            : 'btn btn-default btn-sm'
        return (
          <button
            type="button"
            title={ type.label }
            className={ className }
            onClick={ this.onClick }
          >
              { type.button ? type.button : type.icon }
          </button>
        )
    }
}
