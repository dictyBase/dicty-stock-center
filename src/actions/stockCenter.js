import types from 'constants'
import availability from 'fake-data/availability'
import strainList from 'fake-data/strains'

const { AVAILABILITY_FETCH_SUCCESS, STRAINS_FETCH_REQUEST, STRAINS_FETCH_SUCCESS } = types

// const requestAvailability = () => {
//     return {
//         type: AVAILABILITY_FETCH_REQUEST,
//         isFetching: true
//     }
// }

const requestStrains = () => {
    return {
        type: STRAINS_FETCH_REQUEST
    }
}

const receiveStrains = (data) => {
    return {
        type: STRAINS_FETCH_SUCCESS,
        data
    }
}

const receiveAvailability = (data) => {
    return {
        type: AVAILABILITY_FETCH_SUCCESS,
        isFetching: false,
        availability: data.attributes.availability
    }
}

export const fetchStrainList = () => {
    return (dispatch) => {
        dispatch(requestStrains())
        setTimeout(() => {
            dispatch(receiveStrains(strainList))
        }, 1000)
    }
}

export const fetchAvailability = () => {
    return (dispatch) => {
        dispatch(receiveAvailability(availability.data))
    }
}
