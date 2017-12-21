import React from 'react'
import renderer from 'react-test-renderer'
import EditShipping from './EditShipping'

test('matching a snapshot of EditShipping', () => {
    const component = renderer.create(
    <EditShipping />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
