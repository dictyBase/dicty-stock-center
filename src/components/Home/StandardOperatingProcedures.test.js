import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import StandardOperatingProcedures from './StandardOperatingProcedures'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StandardOperatingProcedures />, div)
})

test('matching a snapshot of StandardOperatingProcedures', () => {
    const component = renderer.create(<StandardOperatingProcedures />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
