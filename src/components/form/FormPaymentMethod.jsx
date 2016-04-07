import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class FormPaymentMethod extends Component {
    displayName = 'payment method for orders';

    static propTypes = {
        payMethod: PropTypes.object.isRequired,
        poNum: PropTypes.object.isRequired
    }

    renderPoNumber = () => {
        const { poNum } = this.props
        return (
            <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                    <input type="text" className="form-control" { ...poNum }
                        placeholder="PO Number"
                    />
                </div>
            </div>
        )
    }

    render() {
        const { payMethod } = this.props
        return (
            <div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Payment Method</label>
                    <div className="col-sm-9">
                        <label className="radio-inline">
                            <input type="radio" { ...payMethod } value="Credit"
                                checked={ payMethod.value === 'Credit' }
                            />
                            Credit Card
                        </label>
                        <label className="radio-inline">
                            <input type="radio" { ...payMethod } value="Wire"
                                checked={ payMethod.value === 'Wire' }
                            />
                            Wire Transfer
                        </label>
                        <label className="radio-inline">
                            <input type="radio" { ...payMethod } value="PO"
                                checked={ payMethod.value === 'PO' }
                            />
                            Purchase Order (PO)
                        </label>
                        { payMethod.touched && payMethod.error &&
                            <div className="text-danger">{ payMethod.error }</div>
                        }
                    </div>
                </div>
                { payMethod.value === 'PO' && this.renderPoNumber() }
            </div>
        )
    }
}
