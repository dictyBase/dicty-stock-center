import React from 'react'
import PaymentMethod from 'components/form/PaymentMethod'
import PaymentInfo from 'components/form/PaymentInfo'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/PaymentMethod', () => {
        const payMethod = {value: 'credit', touched: true}
        const poNum = {value: '', touched: false}
        const title = 'Method'

        const wrapper = shallow(<PaymentMethod
            payMethod={ payMethod }
            poNum={ poNum }
            title={ title }
        />)

        it('should render <PaymentInfo>', () => {
            expect(wrapper.contains(
                <PaymentInfo payMethod={ payMethod } poNum={ poNum }/>
            )).to.equal(true)
        })
    })
})
