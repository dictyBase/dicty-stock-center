import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import 'styles/core.scss'

export default class FormGroupSelect extends Component {
    displayName = 'Select field component';

    static propTypes = {
        field: PropTypes.object.isRequired,
        list: PropTypes.array.isRequired,
        defaultValue: PropTypes.string,
        defaultTitle: PropTypes.string
    }

    static defaultProps = {
        defaultValue: 'select',
        defaultTitle: '-- Select --'
    }

    render() {
        const { field, list, defaultValue, defaultTitle } = this.props
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
                    <select className="form-control" {...field} value={ field.value || '' }>
                        <option value={ defaultValue }>{ defaultTitle }</option>
                        { list && list.map((item) => {
                            return (
                                <option key={ list.indexOf(item) }
                                    value={ item }>{ item }</option>
                            )
                        }) }
                    </select>
                    { hasError && <div className="help-block">{ field.error }</div> }
                </div>
            </div>
        )
    }
}
