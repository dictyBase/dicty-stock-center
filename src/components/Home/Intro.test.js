import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Intro from './Intro'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Intro />, div)
})

test('matching a snapshot of Intro', () => {
    const component = renderer.create(<Intro />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
