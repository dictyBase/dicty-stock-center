import React from 'react'
import renderer from 'react-test-renderer'
import PaymentInfo from './PaymentInfo'

test('matching a snapshot of PaymentInfo', () => {
    const payMethod = {
        value: 'Credit',
        touched: true
    }
    const poNum = {
        value: '',
        touched: true
    }

    const component = renderer.create(
    <PaymentInfo payMethod={ payMethod } poNum={ poNum } />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
