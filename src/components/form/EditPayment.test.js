import React from 'react'
import renderer from 'react-test-renderer'
import EditPayment from './EditPayment'

test('matching a snapshot of EditPayment', () => {
    const component = renderer.create(
    <EditPayment />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
