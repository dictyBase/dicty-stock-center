import React from 'react'
import renderer from 'react-test-renderer'
import Contact from './Contact'

// redux-form issues

test('matching a snapshot of Contact', () => {
    const component = renderer.create(
    <Contact />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
