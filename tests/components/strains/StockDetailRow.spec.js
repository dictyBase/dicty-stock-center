import React from 'react'
import { shallow } from 'enzyme'
import StockDetailRow from 'components/StockDetailRow'

describe('components', () => {
    describe('strains/StockDetailRow', () => {
        const props = {
            right: {'Strain ID': 'DBS03350146'},
            left: {'Strain Descriptor': 'No Information'}
        }
        const wrapper = shallow(<StockDetailRow { ...props }/>)
        it('should have two items', () => {
            expect(wrapper.find('.strain-detail-item')).to.have.length(2)
        })
    })
})
