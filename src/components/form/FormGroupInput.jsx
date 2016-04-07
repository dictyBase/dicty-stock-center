import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import 'styles/core.scss'

export default class FormGroupInput extends Component {
    displayName = 'form-group with input';

    static propTypes = {
        field: PropTypes.object.isRequired,
        inputType: PropTypes.string
    }

    static defaultProps = {
        inputType: 'text'
    }

    render() {
        const { field, inputType } = this.props
        const hasError = (field.touched && field.error)
        let groupClass = classNames('form-group', {
            'has-error': hasError
        })
        return (
            <div className={ groupClass }>
                <label className="col-sm-3 control-label">
                    { this.props.children }
                </label>
                <div className="col-sm-9">
                    <input type={ inputType } className="form-control" {...field} />
                    { hasError && <div className="help-block">{ field.error }</div> }
                </div>
            </div>
        )
    }
}
