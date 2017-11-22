import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormGroupInput from './FormGroupInput'
import 'styles/core.scss'

export default class Personal extends Component {
    displayName = 'form personal information';

    static propTypes = {
        firstName: PropTypes.object.isRequired,
        lastName: PropTypes.object.isRequired,
        email: PropTypes.object.isRequired
    }

    render() {
        const { firstName, lastName, email } = this.props
        return (
            <div>
                <FormGroupInput field={ firstName } >
                    <span className="text-danger">* </span>
                    First Name:
                </FormGroupInput>
                <FormGroupInput field={ lastName } >
                    <span className="text-danger">* </span>
                    Last Name:
                </FormGroupInput>
                <FormGroupInput field={ email } >
                    <span className="text-danger">* </span>
                    Email:
                </FormGroupInput>
            </div>
        )
    }
}
