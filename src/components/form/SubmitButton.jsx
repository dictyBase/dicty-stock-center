import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

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
                { submitting ? <FontAwesome name="spinner" pulse fixedWidth />
                    : <FontAwesome name={ icon && icon } aria-hidden="true" />
                }
            </button>
        )
    }
}
