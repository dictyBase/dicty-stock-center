import React from 'react'
import renderer from 'react-test-renderer'
import About from './About'

test('matching a snapshot of About', () => {
    const auth = {
        isAuthenticated: true,
        isFetching: false,
        user: {name: 'Jane'}
    }

    const component = renderer.create(<About auth={ auth } />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
