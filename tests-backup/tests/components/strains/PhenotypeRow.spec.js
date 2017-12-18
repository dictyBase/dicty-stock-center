import React from 'react'
import { shallow } from 'enzyme'
import PhenotypeRow from 'components/strains/PhenotypeRow'

describe('components', () => {
    describe('strains/PhenotypeRow', () => {
        const props = {
            phenotype: 'phenotype',
            notes: 'notes',
            reference: 'reference'
        }
        const wrapper = shallow(<PhenotypeRow { ...props } />)
        it('has 4 cells', () => {
            expect(wrapper.find('.phenotype-row').children()).to.have.length(4)
        })
    })
})
