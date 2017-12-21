import React from 'react'
import renderer from 'react-test-renderer'
import PageNotReady from './PageNotReady'

test('matching a snapshot of PageNotReady', () => {
    const component = renderer.create(
    <PageNotReady />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
