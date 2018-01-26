import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Cart } from './Cart'

test('matching a snapshot of Cart', () => {
    const addedItems = []

    const component = renderer.create(
        <BrowserRouter>
            <Cart addedItems={ addedItems } />
        </BrowserRouter>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
