import React from 'react'
import renderer from 'react-test-renderer'
import FormGroupSelect from './FormGroupSelect'

test('matching a snapshot of FormGroupSelect', () => {
    const field = {
        touched: true
    }
    const list = [
        'USA',
        'Iceland',
        'Japan'
    ]

    const component = renderer.create(
    <FormGroupSelect field={ field } list={ list } />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
