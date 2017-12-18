import React from 'react'
import Address from 'components/form/Address'
import FormGroupInput from 'components/form/FormGroupInput'
import FormGroupSelect from 'components/form/FormGroupSelect'
import countryList from 'forms/utils/countryList'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/Address', () => {
        const address = {value: 'n michigan', touched: true}
        const address2 = {value: 'floor 1', touched: true}
        const city = {value: 'chicago', touched: true}
        const state = {value: 'IL', touched: true}
        const zip = {value: '65222', touched: true}
        const country = {value: 'USA', touched: true}

        const wrapper = shallow(<Address
            address = { address }
            address2 = { address2 }
            city = { city }
            state = { state }
            zip = { zip }
            country = { country }
        />)

        it('should render address line_1 field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ address } >
                    <span className="text-danger">* </span>
                    Address:
                </FormGroupInput>
            )).to.equal(true)
        })
        it('should render address line_2 field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ address2 } >
                    Address:
                </FormGroupInput>
            )).to.equal(true)
        })
        it('should render city field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ city } >
                    <span className="text-danger">* </span>
                    City:
                </FormGroupInput>
            )).to.equal(true)
        })
        it('should render state field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ state } >
                    State/Province:
                </FormGroupInput>
            )).to.equal(true)
        })
        it('should render zip field', () => {
            expect(wrapper.contains(
                <FormGroupInput field={ zip } >
                    <span className="text-danger">* </span>
                    ZIP:
                </FormGroupInput>
            )).to.equal(true)
        })
        it('should render country field with the list of countries', () => {
            expect(wrapper.contains(
                <FormGroupSelect field={ country } list={ countryList }>
                    <span className="text-danger">* </span>
                    Country:
                </FormGroupSelect>
            )).to.equal(true)
        })
    })
})
