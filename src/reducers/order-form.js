import types from '../constants'

const { FORM_SUBMIT_REQUEST, FORM_SUBMIT_SUCCESS, FORM_SUBMIT_FAILURE } = types

const sameAsCustomer = (state) => {
    const fields = [['firstName', 'payerFirstName'], ['lastName', 'payerLastName'],
        ['email', 'payerEmail'], ['org', 'payerOrg'], ['group', 'payerGroup'],
        ['address', 'payerAddress'], ['address2', 'payerAddress2'], ['city', 'payerCity'],
        ['state', 'payerState'], ['zip', 'payerZip'], ['country', 'payerCountry'],
        ['phone', 'payerPhone']
    ]
    let newState = {}
    for (let [customer, payer] of fields) {
        // only if there is a value in the customer field,
        // then copy the value into the payer field
        if (state[customer]) {
            newState[payer] = {
                value: state[customer].value
            }
        }
    }
    return Object.assign({}, state, newState)
}

const orderFormReducer = (state, action) => {
    switch (action.type) {
    case FORM_SUBMIT_REQUEST:
        return {
            ...state,
            submitted: false
        }
    case FORM_SUBMIT_SUCCESS:
        return {
            ...state,
            submitted: true,
            data: action.data
        }
    case FORM_SUBMIT_FAILURE:
        return {
            ...state,
            submitted: false,
            error: action.error
        }
    case 'redux-form/CHANGE':
        if (action.field === 'sameAsCustomer' && action.value) {
            return sameAsCustomer(state)
        } else if (state.sameAsCustomer && state.sameAsCustomer.value) {
            return sameAsCustomer(state)
        }
        return state
    default:
        return state
    }
}
export default orderFormReducer
