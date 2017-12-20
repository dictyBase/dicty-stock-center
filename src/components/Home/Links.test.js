import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Links from './Links'

test('matching a snapshot of Links', () => {
    const component = renderer.create(
    <BrowserRouter>
        <Links />
    </BrowserRouter>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
