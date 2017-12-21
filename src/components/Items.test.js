import React from 'react'
import renderer from 'react-test-renderer'
import Items from './Items'

test('matching a snapshot of Items', () => {
    const component = renderer.create(
    <Items />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
