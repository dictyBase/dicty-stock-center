import React from 'react'
import renderer from 'react-test-renderer'
import Cart from './Cart'

// needs addedItems and cart

test('matching a snapshot of Cart', () => {
    const component = renderer.create(
    <Cart />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
