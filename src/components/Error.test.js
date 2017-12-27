import React from 'react'
import renderer from 'react-test-renderer'
import Error from './Error'

test('matching a snapshot of Error', () => {
    const auth = {
        error: '404'
    }
    const order = {
        error: '404'
    }

    const component = renderer.create(
    <Error auth={ auth } order={ order } />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
