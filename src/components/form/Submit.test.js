import React from 'react'
import renderer from 'react-test-renderer'
import Submit from './Submit'

test('matching a snapshot of Submit', () => {
    const order = {
        payer: {firstName: 'John'},
        consumer: {firstName: 'Jane'}
    }
    const orderActions = {
        editShipping: () => {},
        editPayment: () => {}
    }
    const addedItems = ['1', '2']

    const component = renderer.create(
    <Submit order={ order } orderActions={ orderActions } addedItems={ addedItems } />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
