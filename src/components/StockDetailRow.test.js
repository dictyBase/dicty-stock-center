import React from 'react'
import renderer from 'react-test-renderer'
import StockDetailRow from './StockDetailRow'

test('matching a snapshot of StockDetailRow', () => {
    const component = renderer.create(
    <StockDetailRow />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
