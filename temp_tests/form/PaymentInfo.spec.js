import React from 'react'
import PaymentInfo from 'components/form/PaymentInfo'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/PaymentInfo', () => {
        const payMethod = {value: 'Credit', touched: true}
        const poNum = {value: '', touched: true}

        const wrapper = shallow(<PaymentInfo
            payMethod={ payMethod }
            poNum={ poNum }
        />)

        it('should render poNum textbox only when payMethod is PO', () => {
            expect(wrapper.containsMatchingElement(
                  <input type="text" className="form-control" />
            )).to.equal(false)

            wrapper.setProps({payMethod: {value: 'PO', touched: true}})

            expect(wrapper.containsMatchingElement(
                  <input type="text" className="form-control" />
            )).to.equal(true)
        })

        it('should render validation error messages properly', () => {
            expect(wrapper.hasClass('help-block')).to.equal(false)

            const field = {value: '', touched: true, error: 'required'}
            wrapper.setProps({payMethod: field})
            expect(wrapper.contains(
                <div className="help-block">{ field.error }</div>
            )).to.equal(true)
        })
    })
})
