import React from 'react'
import ShippingMethod from 'components/form/ShippingMethod'
import ShippingInfo from 'components/form/ShippingInfo'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/ShippingMethod', () => {
        const shipAccount = {value: 'ups', touched: true}
        const shipAccountNum = {value: '6262', touched: true}
        const title = 'Method'

        const wrapper = shallow(<ShippingMethod
            shipAccount={ shipAccount }
            shipAccountNum={ shipAccountNum }
            title={ title }
        />)

        it('should render <ShippingInfo>', () => {
            expect(wrapper.contains(
                <ShippingInfo
                    shipAccount = { shipAccount }
                    shipAccountNum = { shipAccountNum }
                />
            )).to.equal(true)
        })
    })
})
