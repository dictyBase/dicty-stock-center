import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'styles/core.scss'

export default class SubmitButton extends Component {
    displayName = 'form submit button';

    static propTypes = {
        submitting: PropTypes.bool,
        name: PropTypes.string,
        icon: PropTypes.string
    }

    render() {
        const { submitting, name, icon } = this.props
        return (
            <button type="submit"
                className="btn btn-primary btn-lg btn-block"
                disabled={ submitting }> { name }
                { submitting ? <i className="fa fa-spinner fa-pulse fa-fw margin-bottom"></i>
                    : <i className={ icon && icon } aria-hidden="true"></i>
                }
            </button>
        )
    }
}
