import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import RenderRoutes from './RenderRoutes'

test('matching a snapshot of RenderRoutes', () => {
    const component = renderer.create(
    <BrowserRouter>
        <RenderRoutes />
    </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
