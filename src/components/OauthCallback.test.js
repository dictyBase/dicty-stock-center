import React from 'react'
import renderer from 'react-test-renderer'
import OauthCallback from './OauthCallback'

test('matching a snapshot of OauthCallback', () => {
    const component = renderer.create(
    <OauthCallback />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
