import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import 'styles/custom.scss'

export default class LinkList extends Component {
    displayName = 'list of links';
    static propTypes = {
        list: PropTypes.array.isRequired,
        title: PropTypes.string
    }
    render() {
        const { title, list } = this.props
        return (
            <div className="link-list">
                { title && <h3>{ title }</h3> }
                <ul>
                    { list.map((link, index) => {
                        return (
                            <li key={ index }>
                                { link.routerAware ? <Link to={ link.to }>{ link.name }</Link>
                                    : <a href={ link.to }>{ link.name }</a>
                                }
                            </li>
                        )
                    }) }
                </ul>
            </div>
        )
    }
}
