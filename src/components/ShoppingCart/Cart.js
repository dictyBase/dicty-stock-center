// @flow
import React from "react"
import { connect } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { removeItem } from "actions/cart"
import { Container, TableResponsive, Table, DangerButton } from "styles"

type Props = {
  addedItems: Array<Object>,
  removeItem: Function,
}

const Cart = (props: Props) => {
  const addedItems = props.addedItems
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
            {addedItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.fee}</td>
                <td>
                  <DangerButton
                    type="button"
                    onClick={() => props.removeItem(item.id)}>
                    <FontAwesomeIcon icon="trash" />
                  </DangerButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableResponsive>
    </Container>
  )
}

const mapStateToProps = state => ({
  addedItems: state.cart.addedItems,
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => {
    dispatch(removeItem(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart)
