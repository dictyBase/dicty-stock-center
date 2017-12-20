import React from 'react'
import renderer from 'react-test-renderer'
import About from './About'

test('matching a snapshot of About', () => {
    const component = renderer.create(<About />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
