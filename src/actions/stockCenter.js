import types from 'constants'
import availability from 'fake-data/availability'

const { AVAILABILITY_FETCH_SUCCESS } = types

// const requestAvailability = () => {
//     return {
//         type: AVAILABILITY_FETCH_REQUEST,
//         isFetching: true
//     }
// }

const receiveAvailability = (data) => {
    return {
        type: AVAILABILITY_FETCH_SUCCESS,
        isFetching: false,
        availability: data.attributes.availability
    }
}

export const fetchAvailability = () => {
    return (dispatch) => {
        dispatch(receiveAvailability(availability.data))
    }
}
