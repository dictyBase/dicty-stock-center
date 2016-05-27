import React from 'react'
import SubmitButton from 'components/form/SubmitButton'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/SubmitButton', () => {
        let wrapper = shallow(<SubmitButton
            submitting ={ false }
            name={ 'Submit' }
        />)

        it('Should render as a <button>.', () => {
            expect(wrapper.is('button')).to.equal(true)
        })
    })
})
