import React from 'react'
import renderer from 'react-test-renderer'
import OrderConfirmation from './OrderConfirmation'

test('matching a snapshot of OrderConfirmation', () => {
    const component = renderer.create(
    <OrderConfirmation />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
