import React from 'react'
import renderer from 'react-test-renderer'
import LinkList from './LinkList'

test('matching a snapshot of LinkList', () => {
    const component = renderer.create(
    <LinkList />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
