import React from 'react'
import renderer from 'react-test-renderer'
import PaymentAlert from './PaymentAlert'

test('matching a snapshot of PaymentAlert', () => {
    const component = renderer.create(
    <PaymentAlert />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
