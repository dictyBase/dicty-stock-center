import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { Submit } from "./Submit"
// import { shallow } from "enzyme"
// import sinon from "sinon"
// import { PrimaryLargeButton } from "styles"

// describe("form/Submit", () => {
//   const props = {
//     order: {
//       payer: { firstName: "John" },
//       consumer: { firstName: "Sara" }
//     },
//     orderActions: {
//       submitOrder: sinon.spy(),
//       editShipping: () => {},
//       editPayment: () => {}
//     }
//   }
//   const wrapper = shallow(<Submit {...props} />)

//   it('should dispatch an action when "Complete Order" button is clicked', () => {
//     wrapper.find(PrimaryLargeButton).simulate("click")
//     expect(props.orderActions.submitOrder.calledOnce).toEqual(true)
//   })
// })

test("matching a snapshot of Submit", () => {
  const editShipping = () => {}
  const editPayment = () => {}
  const addedItems = ["1", "2"]
  const consumer = {
    firstName: "Jane"
  }
  const payer = {
    firstName: "John"
  }
  const component = renderer.create(
    <Submit
      editShipping={editShipping}
      editPayment={editPayment}
      addedItems={addedItems}
      consumer={consumer}
      payer={payer}
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
