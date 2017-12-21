import React from 'react'
import renderer from 'react-test-renderer'
import { AuthLoader, Logout } from './Auth'

test('matching a snapshot of AuthLoader', () => {
    const component = renderer.create(
    <AuthLoader />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('matching a snapshot of Logout', () => {
    const component = renderer.create(
    <Logout />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})