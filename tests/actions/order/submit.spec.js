import * as actions from '../../../src/actions/order/submit'
import types from '../../../src/constants'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

let server = __API_SERVER__

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const order = {
    consumer: { type: 'user', id: 'john@gmail.com' },
    shipping: { account: 'Fedex', accountNum: '123456', comments: '' },
    payer: { type: 'user', id: 'john@gmail.com' },
    payment: { method: 'Credit', poNum: '' }
}

describe('async actions/order', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates SUBMIT_SUCCESS when submitting the order has been completed', () => {
        nock(server)
            .post('/orders')
            .reply(201, { body: { data: {type: 'order', id: '2555'} } })

        const expectedActions = [
            { type: types.SUBMIT_REQUEST, submitting: true },
            { type: types.SUBMIT_SUCCESS, submitting: false, order }
        ]
        const store = mockStore({ order: order })

        return store.dispatch(actions.submitOrder())
          .then(() => {
              expect(store.getActions()).toEqual(expectedActions)
          })
    })
})
