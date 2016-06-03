import React from 'react'
import Personal from 'components/form/Personal'
import FormGroupInput from 'components/form/FormGroupInput'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/Personal', () => {
        const firstName = {value: 'John', touched: true}
        const lastName = {value: 'Smith', touched: true}
        const email = {value: 'john@gmail.com', touched: true}

        const wrapper = shallow(<Personal
            firstName={ firstName }
            lastName={ lastName }
            email={ email }
        />)

        it('should render firstName field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ firstName } >
                    <span className="text-danger">* </span>
                    First Name:
                </FormGroupInput>
            )).to.equal(true)
        })
        it('should render lastName field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ lastName } >
                    <span className="text-danger">* </span>
                    Last Name:
                </FormGroupInput>
            )).to.equal(true)
        })
        it('should render email field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ email } >
                    <span className="text-danger">* </span>
                    Email:
                </FormGroupInput>
            )).to.equal(true)
        })
    })
})
