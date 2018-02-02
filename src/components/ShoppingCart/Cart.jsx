// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import { removeItem } from 'actions/cart'
import { Container, TableResponsive, Table, DangerButton } from 'styles'

type Props = {
    addedItems: Array<Object>,
    removeItem: Function
}

class Cart extends Component<Props> {
    displayName = 'Shopping cart'

    render() {
        const addedItems = this.props.addedItems
        return (
            <Container>
                <TableResponsive>
                    <Table condensed>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Strain/Plasmid Name</th>
                                <th>Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            { addedItems.map((item, index) => {
                                return (
                                    <tr key={ index }>
                                        <td>{ item.id }</td>
                                        <td>{ item.name }</td>
                                        <td>{ item.fee }</td>
                                        <td>
                                            <DangerButton
                                                type="button"
                                                onClick={ () =>
                                                    this.props.removeItem(
                                                        item.id
                                                    )
                                                }>
                                                <FontAwesome name="trash-o" />
                                            </DangerButton>
                                        </td>
                                    </tr>
                                )
                            }) }
                        </tbody>
                    </Table>
                </TableResponsive>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        addedItems: state.cart.addedItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (id) => {
            dispatch(removeItem(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
