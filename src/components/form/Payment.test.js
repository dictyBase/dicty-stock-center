import React from 'react'
import renderer from 'react-test-renderer'
import Payment from './Payment'

test('matching a snapshot of Payment', () => {
    const component = renderer.create(
    <Payment />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
