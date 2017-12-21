import React from 'react'
import renderer from 'react-test-renderer'
import OauthSignInButton from './OauthSignInButton'

test('matching a snapshot of OauthSignInButton', () => {
    const component = renderer.create(
    <OauthSignInButton />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
