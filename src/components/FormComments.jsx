import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class FormComments extends Component {
    displayName = 'form contact information';

    static propTypes = {
        comments: PropTypes.object.isRequired
    }

    render() {
        const { comments } = this.props
        return (
            <div>
                <div className="form-group">
                    <label>Comments:</label>
                    <textarea className="form-control" rows="5" { ...comments }
                      value={ comments.value }
                      placeholder="Please enter any comments or special instructions here">
                    </textarea>
                </div>
            </div>
        )
    }
}
