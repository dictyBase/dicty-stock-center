import React from 'react'
import renderer from 'react-test-renderer'
import Shipping from './Shipping'

test('matching a snapshot of Shipping', () => {
    const component = renderer.create(
    <Shipping />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
