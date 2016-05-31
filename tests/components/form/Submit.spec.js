import React from 'react'
import Submit from 'components/form/Submit'
import { shallow } from 'enzyme'

describe('components', () => {
    describe('form/Submit', () => {
        const props = {
            order: {
                payer: {firstName: 'John'},
                consumer: {firstName: 'Sara'}
            },
            orderActions: {
                submitOrder: sinon.spy(),
                editShipping: () => {},
                editPayment: () => {}
            }
        }
        const wrapper = shallow(<Submit {...props}/>)

        it('should dispatch an action when "Complete Order" button is clicked', () => {
            wrapper.find('button').simulate('click')
            expect(props.orderActions.submitOrder.calledOnce).to.equal(true)
        })
    })
})
