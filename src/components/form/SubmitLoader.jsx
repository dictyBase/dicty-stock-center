import React, { Component } from 'react'
import 'styles/core.scss'

export default class SubmitLoader extends Component {
    displayName = 'loading component during submitting the order form';
    render() {
        return (
            <div className="container">
              <h2> Feel the bern while your information is being submitted........ </h2>
            </div>
        )
    }
}
