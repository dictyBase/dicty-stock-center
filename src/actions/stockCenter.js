import types from 'constants'
import avl from 'fake-data/availability.json'

const { AVAILABILITY_FETCH_SUCCESS } = types

// const requestAvailability = () => {
//     return {
//         type: AVAILABILITY_FETCH_REQUEST,
//         isFetching: true
//     }
// }

const receiveAvailability = (l) => {
    return {
        type: AVAILABILITY_FETCH_SUCCESS,
        isFetching: false,
        availability: l.data.attributes.availability
    }
}

export const fetchAvailability = () => {
    return (dispatch) => {
        dispatch(receiveAvailability(avl))
    }
}
