import React from 'react'
import renderer from 'react-test-renderer'
import RenderRoutes from './RenderRoutes'

test('matching a snapshot of RenderRoutes', () => {
    const component = renderer.create(
    <RenderRoutes />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
