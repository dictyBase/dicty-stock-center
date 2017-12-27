import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import MyDsc from './MyDsc'

test('matching a snapshot of MyDsc', () => {
    const auth = {
        user: {
            name: 'Jane Doe',
            email: 'janedoe@gmail.com'
        },
        provider: 'google'
    }

    const component = renderer.create(
    <BrowserRouter>
        <MyDsc auth={ auth } />
    </BrowserRouter>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
