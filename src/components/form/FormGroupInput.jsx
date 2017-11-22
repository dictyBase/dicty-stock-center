import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import 'styles/core.scss'

export default class FormGroupInput extends Component {
    displayName = 'form-group with input';

    static propTypes = {
        field: PropTypes.object.isRequired,
        inputType: PropTypes.string,
        placeholder: PropTypes.string
    }

    static defaultProps = {
        inputType: 'text'
    }

    render() {
        const { field, inputType, placeholder } = this.props
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
                    <input type={ inputType } className="form-control" {...field}
                        placeholder= { placeholder } />
                    { hasError && <div className="help-block">{ field.error }</div> }
                </div>
            </div>
        )
    }
}
