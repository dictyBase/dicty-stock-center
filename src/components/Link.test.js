import React from 'react'
import renderer from 'react-test-renderer'
import Link from './Link'

test('matching a snapshot of Link', () => {
    const component = renderer.create(
    <Link />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
