import React from 'react'
import ReactDOM from 'react-dom'
import Availability from 'Availability'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Availability />, div)
})
