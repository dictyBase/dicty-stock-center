import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Slideshow from './Slideshow'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Slideshow />, div)
})

test('matching a snapshot of Carousel', () => {
    const component = renderer.create(<Slideshow />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
