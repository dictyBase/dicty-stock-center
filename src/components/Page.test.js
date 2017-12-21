import React from 'react'
import renderer from 'react-test-renderer'
import Page from './Page'

test('matching a snapshot of Page', () => {
    const component = renderer.create(
    <Page />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
