import React from 'react'
import renderer from 'react-test-renderer'
import SubmitButton from './SubmitButton'

test('matching a snapshot of SubmitButton', () => {
    const component = renderer.create(
    <SubmitButton submitting={ false } name={ 'Submit' } icon={ 'Submit' } />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
