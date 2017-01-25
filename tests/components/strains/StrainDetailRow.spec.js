import React from 'react'
import { shallow } from 'enzyme'
import StrainDetailRow from 'components/Strains/StrainDetailRow'

describe('components', () => {
    describe('strains/StrainDetailRow', () => {
        const props = {
            right: {'Strain ID': 'DBS03350146'},
            left: {'Strain Descriptor': 'No Information'}
        }
        const wrapper = shallow(<StrainDetailRow { ...props }/>)
        it('should have two items', () => {
            expect(wrapper.find('.strain-detail-item')).to.have.length(2)
        })
    })
})
