import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Carousel from './Carousel'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Carousel />, div)
})

test('matching a snapshot of Carousel', () => {
    const component = renderer.create(<Carousel />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
