import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Home from './index'

test('matching a snapshot of Home', () => {
    const component = renderer.create(
    <BrowserRouter>
        <Home />
    </BrowserRouter>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
