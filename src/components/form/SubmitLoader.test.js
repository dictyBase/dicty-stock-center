import React from 'react'
import renderer from 'react-test-renderer'
import SubmitLoader from './SubmitLoader'

test('matching a snapshot of SubmitLoader', () => {
    const component = renderer.create(
    <SubmitLoader />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
