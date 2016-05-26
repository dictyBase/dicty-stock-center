import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class Comments extends Component {
    displayName = 'form contact information';

    static propTypes = {
        comments: PropTypes.object.isRequired,
        placeholder: PropTypes.string,
        rows: PropTypes.string
    }

    render() {
        const { comments, placeholder, rows, children } = this.props
        return (
            <div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">
                        { children }
                    </label>
                    <div className="col-sm-9">
                        <textarea className="form-control" rows={ rows } { ...comments }
                          value={ comments.value }
                          placeholder= { placeholder } >
                        </textarea>
                    </div>
                </div>
            </div>
        )
    }
}
