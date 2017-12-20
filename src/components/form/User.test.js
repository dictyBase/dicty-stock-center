import React from 'react'
import renderer from 'react-test-renderer'
import User from './User'

test('matching a snapshot of User', () => {
    const firstName = { value: 'John' }
    const lastName = { value: 'Smith' }
    const email = { value: 'john@gmail.com' }
    const org = { value: 'NU' }
    const group = { value: 'Bio' }
    const address = { value: 'N Michigan Ave' }
    const address2 = { value: '' }
    const city = { value: 'Chicago' }
    const state = { value: 'IL' }
    const zip = { value: '60555' }
    const country = { value: 'USA' }
    const phone = { value: '7778859988' }
    const title = 'User'

    const component = renderer.create(
    <User
        firstName={ firstName }
        lastName={ lastName }
        email={ email }
        org={ org }
        group={ group }
        address={ address }
        address2={ address2 }
        city={ city }
        state={ state }
        zip={ zip }
        country={ country }
        phone={ phone }
        title={ title }
    />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
