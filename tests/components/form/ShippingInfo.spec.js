import React from 'react'
import ShippingInfo from 'components/form/ShippingInfo'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/ShippingInfo', () => {
        const shipAccount = {value: 'Fedex', touched: true}
        const shipAccountNum = {value: '', touched: false}

        const wrapper = shallow(<ShippingInfo
            shipAccount={ shipAccount }
            shipAccountNum={ shipAccountNum }
        />)

        it('should not render shipAccountNum textbox when "call in" option is selected', () => {
            expect(wrapper.containsMatchingElement(
                  <input type="text" className="form-control" />
            )).to.equal(true)

            wrapper.setProps({shipAccount: {value: 'Will call 1-312-503-4169', touched: true}})

            expect(wrapper.containsMatchingElement(
                  <input type="text" className="form-control" />
            )).to.equal(false)
        })

        it('should render validation error messages for shipAccount radio buttons properly', () => {
            expect(wrapper.hasClass('help-block')).to.equal(false)

            const field = {value: '', touched: true, error: 'required'}
            wrapper.setProps({shipAccount: field})
            expect(wrapper.contains(
                <div className="help-block">{ field.error }</div>
            )).to.equal(true)
        })

        it('should render validation error messages for shipAccountNum textbox properly', () => {
            expect(wrapper.hasClass('help-block')).to.equal(false)

            const field = {value: '', touched: true, error: 'number required'}
            wrapper.setProps({shipAccountNum: field})
            expect(wrapper.contains(
                <div className="help-block">{ field.error }</div>
            )).to.equal(true)
        })
    })
})
