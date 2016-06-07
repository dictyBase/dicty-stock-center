import reducer from 'reducers/order'
import types from 'constants'

describe('reducers', () => {
    describe('order reducer', () => {
        it('should return the initial state', () => {
            expect(
              reducer(undefined, {})
            ).to.eql({
                initialized: false
            })
        })

        it('should handle ADD_SHIPPING', () => {
            expect(
                reducer({}, {
                    type: types.ADD_SHIPPING,
                    initialized: true,
                    consumer: {firstName: 'John', lastName: 'Smith'},
                    details: {
                        shipAccount: 'UPS',
                        shipAccountNum: '20',
                        comments: ''
                    }
                })
            ).to.eql({
                initialized: true,
                consumer: {firstName: 'John', lastName: 'Smith'},
                shipping: {
                    account: 'UPS',
                    accountNum: '20',
                    comments: ''
                }
            })
        })

        it('should handle ADD_PAYMENT', () => {
            expect(
                reducer({}, {
                    type: types.ADD_PAYMENT,
                    initialized: true,
                    payer: {firstName: 'Sara', lastName: 'Brown'},
                    payment: {
                        method: 'Credit',
                        poNum: ''
                    }
                })
            ).to.eql({
                initialized: true,
                payer: {firstName: 'Sara', lastName: 'Brown'},
                payment: {
                    method: 'Credit',
                    poNum: ''
                }
            })
        })

        it('should handle SUBMIT_REQUEST', () => {
            expect(
                reducer({}, {
                    type: types.SUBMIT_REQUEST,
                    submitting: true
                })
            ).to.eql({
                submitting: true
            })
        })

        it('should handle SUBMIT_SUCCESS', () => {
            expect(
                reducer({}, {
                    type: types.SUBMIT_SUCCESS,
                    submitting: false,
                    order: {id: '25'}
                })
            ).to.eql({
                submitting: false,
                id: '25'
            })
        })

        it('should handle SUBMIT_FAILURE', () => {
            expect(
                reducer({}, {
                    type: types.SUBMIT_FAILURE,
                    submitting: false,
                    error: 'error 404'
                })
            ).to.eql({
                submitting: false,
                error: 'error 404'
            })
        })
    })
})
