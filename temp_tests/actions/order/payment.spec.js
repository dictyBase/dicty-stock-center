import * as actions from 'actions/order/payment'
import types from 'constants'

describe('actions', () => {
    describe('order', () => {
        it('should create an action to add payment information', () => {
            const user = {
                data: {
                    type: 'user',
                    id: '25',
                    attributes: {
                        first_name: 'John',
                        last_name: 'Smith',
                        email: 'john@gmail.com',
                        organization: 'Northwestern',
                        group: 'Bio',
                        address: {
                            first: 'N Lake Shore', second: ''
                        },
                        city: 'Chicago',
                        state: 'IL',
                        zip: '60848',
                        country: 'USA',
                        phone: ''
                    }
                }
            }
            const payment = {
                method: 'Credit',
                poNum: ''
            }
            const payer = {
                type: 'user',
                id: '25',
                firstName: 'John',
                lastName: 'Smith',
                email: 'john@gmail.com',
                org: 'Northwestern',
                group: 'Bio',
                address: 'N Lake Shore',
                address2: '',
                city: 'Chicago',
                state: 'IL',
                zip: '60848',
                country: 'USA',
                phone: ''
            }
            const expectedAction = {
                type: types.ADD_PAYMENT,
                initialized: true,
                payer,
                payment
            }
            expect(actions.addPayment(user, payment)).to.deep.equal(expectedAction)
        })
    })
})
