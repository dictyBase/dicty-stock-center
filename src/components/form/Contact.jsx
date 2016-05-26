import React, { Component, PropTypes } from 'react'
import FormGroupInput from './FormGroupInput'

export default class Contact extends Component {
    displayName = 'form contact information';

    static propTypes = {
        phone: PropTypes.object.isRequired
    }

    render() {
        const { phone } = this.props
        return (
            <div>
                <FormGroupInput field={ phone } >
                    Phone:
                </FormGroupInput>
            </div>
        )
    }
}
