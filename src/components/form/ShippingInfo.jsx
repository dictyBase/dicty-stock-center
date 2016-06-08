import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import 'styles/core.scss'

export default class ShippingInfo extends Component {
    displayName = 'form shipping information';

    static propTypes = {
        shipAccount: PropTypes.object.isRequired,
        shipAccountNum: PropTypes.object.isRequired
    }

    renderShipAccountNum = () => {
        const { shipAccountNum } = this.props
        let groupClass = classNames('form-group', {
            'has-error': shipAccountNum.error
        })
        return (
            <div className={ groupClass }>
                <div className="col-sm-offset-3 col-sm-9">
                    <input type="text" className="form-control" { ...shipAccountNum }
                        placeholder="Shipping Account Number"
                    />
                    { shipAccountNum.error && <div className="help-block">
                        { shipAccountNum.error }
                        </div>
                    }
                </div>
            </div>
        )
    }

    render() {
        const { shipAccount } = this.props
        const hasError = (shipAccount.touched && shipAccount.error)
        let groupClass = classNames('form-group', {
            'has-error': hasError
        })
        return (
            <div>
                <div className={ groupClass }>
                    <label className="col-sm-3 control-label">
                        <span className="text-danger">* </span>
                        Shipping Account:
                    </label>
                    <div className="col-sm-9">
                        <label className="radio-inline">
                            <input type="radio" { ...shipAccount } value="Fedex"
                                checked={ shipAccount.value === 'Fedex' }
                            />
                            FedEx
                        </label>
                        <label className="radio-inline">
                            <input type="radio" { ...shipAccount } value="UPS"
                                checked={ shipAccount.value === 'UPS' }
                            />
                            UPS
                        </label>
                        <label className="radio-inline">
                            <input type="radio" { ...shipAccount } value="DHL"
                                checked={ shipAccount.value === 'DHL' }
                            />
                            DHL
                        </label>
                        <div className="radio">
                            <label>
                                <input type="radio" { ...shipAccount } value="WillCall"
                                    checked={ shipAccount.value === 'WillCall' }
                                />
                                Call in Credit card # for FedEx waybill 1-312-503-4169
                            </label>
                            { hasError && <div className="help-block">{ shipAccount.error }</div> }
                        </div>
                    </div>
                </div>
                { !(shipAccount.value === 'WillCall') && this.renderShipAccountNum() }
            </div>
        )
    }
}
