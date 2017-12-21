import React from 'react'
import renderer from 'react-test-renderer'
import Error from './Error'

test('matching a snapshot of Error', () => {
    const component = renderer.create(
    <Error />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
