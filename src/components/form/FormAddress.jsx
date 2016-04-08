import React, { Component, PropTypes } from 'react'
import FormGroupInput from './FormGroupInput'
import FormGroupSelect from './FormGroupSelect'
import countryList from 'forms/utils/countryList'
import 'styles/core.scss'

export default class FormAddress extends Component {
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
                    <span className="text-danger">* </span>
                    Address:
                </FormGroupInput>
                <FormGroupInput field={ address2 } >
                    Address:
                </FormGroupInput>
                <FormGroupInput field={ city } >
                    <span className="text-danger">* </span>
                    City:
                </FormGroupInput>
                <FormGroupInput field={ state } >
                    State/Province:
                </FormGroupInput>
                <FormGroupInput field={ zip } >
                    <span className="text-danger">* </span>
                    ZIP:
                </FormGroupInput>
                <FormGroupSelect field={ country } list={ countryList }>
                    <span className="text-danger">* </span>
                    Country:
                </FormGroupSelect>
            </div>
        )
    }
}
