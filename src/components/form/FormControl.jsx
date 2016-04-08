import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class FormControl extends Component {
    displayName = 'component for submit and reset buttons';

    static propTypes = {
        resetForm: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    }

    render() {
        const { resetForm, submitting } = this.props
        return (
            <div className="row">
                <div className="col-xs-6 col-md-offset-6 col-md-3">
                    <button type="submit"
                        onClick={ resetForm }
                        className="btn btn-default btn-lg btn-block"
                        disabled={ submitting }> Reset
                    </button>
                </div>
                <div className="col-xs-6 col-md-3">
                    <button type="submit"
                        className="btn btn-primary btn-lg btn-block"
                        disabled={ submitting }> Submit Order
                    </button>
                </div>
            </div>
        )
    }
}
