import React from 'react'
import Contact from 'components/form/Contact'
import FormGroupInput from 'components/form/FormGroupInput'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/Contact', () => {
        const phone = {value: '', touched: true}
        const wrapper = shallow(<Contact
            phone ={ phone }
        />)

        it('should render an input field for phone number', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ phone } >
                    Phone:
                </FormGroupInput>
            )).to.equal(true)
        })
    })
})
