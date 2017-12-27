import React from 'react'
import renderer from 'react-test-renderer'
import Items from './Items'

test('matching a snapshot of Items', () => {
    const items = []

    const component = renderer.create(
    <Items items={ items } />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
