import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class EditPanel extends Component {
    displayName = 'panel to edit order info';

    static propTypes = {
        user: PropTypes.object.isRequired,
        edit: PropTypes.func.isRequired,
        title: PropTypes.string,
        icon: PropTypes.string,
        payer: PropTypes.bool
    }
    static defaultProps = {
        payer: false
    }
    render() {
        const { title, edit, icon, payer } = this.props
        const { firstName, lastName, address, address2,
            city, state, zip, country
        } = this.props.user
        return (
            <div>
                <h4>
                    { icon && <i className={ icon }></i> }
                    { title }
                </h4>
                <div>{ firstName } { lastName }</div>
                <div>{ address }</div>
                <div>{ address2 && address2 }</div>
                <div>{ city } { state && state } { zip }</div>
                <div>{ country }</div>
                <br />
                <div>
                    <a href="#" onClick = { edit }>
                        <i className="fa fa-pencil-square-o"></i>
                        {
                            payer ? ' Edit payment info'
                            : ' Edit shipping info'
                        }
                    </a>
                </div>
            </div>
        )
    }
}
