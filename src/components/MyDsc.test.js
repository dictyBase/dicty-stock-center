import React from 'react'
import renderer from 'react-test-renderer'
import MyDsc from './MyDsc'

test('matching a snapshot of MyDsc', () => {
    const component = renderer.create(
    <MyDsc />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
