import types from 'constants'
import availability from 'fake-data/availability'
import strainList from 'fake-data/strains'

const {
  AVAILABILITY_FETCH_SUCCESS,
  STRAINS_FETCH_REQUEST,
  STRAINS_FETCH_SUCCESS,
  PAGE_FETCH_SUCCESS,
  PAGE_FETCH_REQUEST,
  SEARCH_STRAINS
} = types

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

const requestNextPage = () => {
    return {
        type: PAGE_FETCH_REQUEST
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

const receiveNextPage = () => {
    return {
        type: PAGE_FETCH_SUCCESS,
        isFetching: false
    }
}

const searchStrains = (search) => {
    return {
        type: SEARCH_STRAINS,
        search
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

export const fetchNextPage = () => {
    return (dispatch) => {
        dispatch(requestNextPage())
        setTimeout(() => {
            dispatch(receiveNextPage())
        }, 500)
    }
}

export const getSearchInput = (search) => {
    return (dispatch) => {
        dispatch(searchStrains(search))
    }
}
