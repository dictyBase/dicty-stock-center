import React, { Component, PropTypes } from 'react'
import Panel from 'components/dicty-react-components/src/Panel'
import PanelHeader from 'components/dicty-react-components/src/PanelHeader'
import PanelTitle from 'components/dicty-react-components/src/PanelTitle'
import PanelBody from 'components/dicty-react-components/src/PanelBody'
import FormPersonalInfo from 'components/FormPersonalInfo'
import FormAddress from 'components/FormAddress'
import { reduxForm } from 'redux-form'
import submitForm from 'actions/order-form'
import validate from 'forms/validate/order-form'
import 'styles/core.scss'

export const fields = [
    'firstName',
    'lastName',
    'org',
    'group',
    'address',
    'address2',
    'city',
    'state',
    'zip',
    'country',
    'phone',
    'email',
    'shipAccount',
    'shipAccountNum',
    'comments'
]

class OrderForm extends Component {
    displayName = 'dsc order form';

    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    }

    render() {
        const {
          fields: {
            firstName,
            lastName,
            org,
            group,
            address,
            address2,
            city,
            state,
            zip,
            country,
            phone,
            email,
            shipAccount,
            shipAccountNum,
            comments
          },
          handleSubmit,
          submitting
        } = this.props
        return (
            <div className="container">
              <h2 className="page-header text-center">
                Please fill out the following information to complete your order
              </h2>
              <div className="row">
                <div className="col-md-offset-3 col-md-6">
                  <Panel>
                    <PanelHeader>
                      <PanelTitle>Shipping</PanelTitle>
                    </PanelHeader>
                    <PanelBody>
                      <form onSubmit={ handleSubmit }>
                        <FormPersonalInfo
                          firstName={ firstName }
                          lastName={ lastName }
                          org={ org }
                          group={ group }
                        />
                        <FormAddress
                          address={ address }
                          address2={ address2 }
                          city={ city }
                          state={ state }
                          zip={ zip }
                          country={ country }
                        />
                        <div className="form-group">
                          <label>Phone:</label>
                          <input type="text" className="form-control" { ...phone } />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>Email:</label>
                          <input type="email" className="form-control" { ...email } />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>Shipping Account:</label><br />
                          <div className="radio">
                            <label>
                              <input type="radio" { ...shipAccount } value="fedex"
                                checked={ shipAccount.value === 'fedex' } />
                              FedEx
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" { ...shipAccount } value="ups"
                                checked={ shipAccount.value === 'ups' } />
                              UPS
                            </label>
                          </div>
                          <div className="radio">
                            <label><input type="radio" { ...shipAccount } value="dhl"
                              checked={ shipAccount.value === 'dhl' } />
                              DHL
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" { ...shipAccount } value="willcall"
                                checked={ shipAccount.value === 'willcall' } />
                              Call in Credit card # for FedEx waybill 1-312-503-4169
                            </label>
                          </div>
                          <input type="text" className="form-control" { ...shipAccountNum }
                            placeholder="Shipping Account Number" />
                        </div>
                        <div className="form-group">
                          <label>Comments:</label>
                          <textarea className="form-control" rows="5" { ...comments }
                            value={ comments.value }
                            placeholder="Please enter any comments or special instructions here">
                          </textarea>
                        </div>
                        <button type="submit" className="btn btn-default"
                          disabled={ submitting }> Submit
                        </button>
                      </form>
                    </PanelBody>
                  </Panel>
                </div>
              </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'dsc-order-form',
    fields,
    onSubmit: submitForm,
    validate
})(OrderForm)
