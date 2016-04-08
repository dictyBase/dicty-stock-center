import React, { Component, PropTypes } from 'react'
import FormGroupInput from './FormGroupInput'
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
                <div className="form-group">
                    <label className="col-sm-3 control-label">
                        <span className="text-danger">* </span>
                        Country:
                    </label>
                    <div className="col-sm-9">
                        <select className="form-control" {...country} value={ country.value }>
                            <option value="select" >Select your country</option>
                            { countryList.map((cont) => {
                                return (
                                    <option key={ countryList.indexOf(cont) }
                                        value={ cont }>{ cont }</option>
                                )
                            }) }
                        </select>
                        { country.touched && country.error &&
                            <div className="text-danger">{ country.error }</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
