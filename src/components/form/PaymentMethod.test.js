import React from 'react'
import renderer from 'react-test-renderer'
import PaymentMethod from './PaymentMethod'

test('matching a snapshot of PaymentMethod', () => {
    const payMethod = {
        value: 'Credit',
        touched: true
    }
    const poNum = {
        value: '',
        touched: true
    }
    const title = 'Method'

    const component = renderer.create(
    <PaymentMethod payMethod={ payMethod } poNum={ poNum } title={ title } />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
