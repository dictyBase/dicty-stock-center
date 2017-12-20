import React from 'react'
import renderer from 'react-test-renderer'
import FormGroupInput from './FormGroupInput'

test('matching a snapshot of FormGroupInput', () => {
    const field = {
        touched: true
    }

    const component = renderer.create(
    <FormGroupInput field={ field } />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
