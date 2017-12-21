import React from 'react'
import renderer from 'react-test-renderer'
import Login from './Login'

test('matching a snapshot of Login', () => {
    const component = renderer.create(
    <Login />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
