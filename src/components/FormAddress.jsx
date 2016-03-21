import React, { Component, PropTypes } from 'react'
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
                <div className="form-group">
                    <span className="text-danger">* </span>
                    <label>Address:</label>
                    <input type="text" className="form-control" { ...address } />
                    { address.touched && address.error &&
                        <div className="text-danger">{ address.error }</div>
                    }
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" className="form-control" { ...address2 }
                        placeholder="Optional" />
                </div>
                <div className="form-group">
                    <span className="text-danger">* </span>
                    <label>City:</label>
                    <input type="text" className="form-control" { ...city } />
                    { city.touched && city.error &&
                        <div className="text-danger">{ city.error }</div>
                    }
                </div>
                <div className="form-group">
                    <label>State/Province:</label>
                    <input type="text" className="form-control" { ...state } />
                </div>
                <div className="form-group">
                    <span className="text-danger">* </span>
                    <label>ZIP:</label>
                    <input type="number" className="form-control" { ...zip } />
                    { zip.touched && zip.error &&
                        <div className="text-danger">{ zip.error }</div>
                    }
                </div>
                <div className="form-group">
                    <span className="text-danger">* </span>
                    <label>Country:</label>
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
        )
    }
}
