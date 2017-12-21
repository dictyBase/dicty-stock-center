import React from 'react'
import renderer from 'react-test-renderer'
import EditPanel from './EditPanel'

test('matching a snapshot of EditPanel', () => {
    const user = {
        firstName: 'Jane',
        lastName: 'Doe'
    }
    const address = {value: 'n michigan', touched: true}
    const address2 = {value: 'floor 1', touched: true}
    const city = {value: 'chicago', touched: true}
    const state = {value: 'IL', touched: true}
    const zip = {value: '65222', touched: true}
    const country = {value: 'USA', touched: true}
    const edit = () => {}

    const component = renderer.create(
    <EditPanel
        user={ user }
        firstName={ user.firstName }
        lastName={ user.lastName }
        address={ address }
        address2={ address2 }
        city={ city }
        state={ state }
        zip={ zip }
        country={ country }
        edit={ edit }
    />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
