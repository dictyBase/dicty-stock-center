import React from 'react'
import SubmitLoader from 'components/form/SubmitLoader'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/SubmitLoader', () => {
        let wrapper

        beforeEach(() => {
            wrapper = shallow(<SubmitLoader/>)
        })

        it('renders an animated fa icon', () => {
            const icon = wrapper.find('i.fa-spinner')
            expect(icon).to.exist
        })
    })
})
