import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormGroupInput from './FormGroupInput'
import FormGroupSelect from './FormGroupSelect'
import countryList from 'forms/utils/countryList'
import { RequiredText } from 'styles'

export default class Address extends Component {
    displayName = 'form address information';

    static propTypes = {
        address: PropTypes.object.isRequired,
        address2: PropTypes.object.isRequired,
        city: PropTypes.object.isRequired,
        state: PropTypes.object.isRequired,
        zip: PropTypes.object.isRequired,
        country: PropTypes.object.isRequired
    }

    render() {
        const { address, address2, city, state, zip, country } = this.props
        return (
            <div>
                <FormGroupInput field={ address } >
                    <RequiredText>* </RequiredText>
                    Address:
                </FormGroupInput>
                <FormGroupInput field={ address2 } >
                    Address:
                </FormGroupInput>
                <FormGroupInput field={ city } >
                    <RequiredText>* </RequiredText>
                    City:
                </FormGroupInput>
                <FormGroupInput field={ state } >
                    State/Province:
                </FormGroupInput>
                <FormGroupInput field={ zip } >
                    <RequiredText>* </RequiredText>
                    ZIP:
                </FormGroupInput>
                <FormGroupSelect field={ country } list={ countryList }>
                    <RequiredText>* </RequiredText>
                    Country:
                </FormGroupSelect>
            </div>
        )
    }
}
