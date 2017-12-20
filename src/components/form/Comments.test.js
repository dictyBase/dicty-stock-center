import React from 'react'
import renderer from 'react-test-renderer'
import Comments from './Comments'

test('matching a snapshot of Comments', () => {
    const comments = {
        value: undefined
    }
    const placeholder = 'placeholder'
    const rows = '20'

    const component = renderer.create(
    <Comments
        rows={ rows }
        comments={ comments }
        placeholder={ placeholder }
    />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
