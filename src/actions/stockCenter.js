import types from 'constants'
import availability from 'fake-data/availability'
// import strainList from 'fake-data/strains'
import { status, json } from 'utils/fetch'
import { getStrainPage, searchStrains } from 'utils/api'

const {
  AVAILABILITY_FETCH_SUCCESS,
  STRAINS_FETCH_REQUEST,
  STRAINS_FETCH_SUCCESS,
  STRAINS_FETCH_FAILURE,
  SEARCH_STRAINS_REQUEST,
  SEARCH_STRAINS_SUCCESS,
  SEARCH_STRAINS_FAILURE,
  CLEAR_STRAIN_SEARCH
} = types

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

const requestStrains = () => {
    return {
        type: STRAINS_FETCH_REQUEST
    }
}

const receiveStrains = (data) => {
    return {
        type: STRAINS_FETCH_SUCCESS,
        isFetching: false,
        data: data.data,
        links: data.links,
        meta: data.meta
    }
}

const strainFetchFailure = (error) => {
    return {
        type: STRAINS_FETCH_FAILURE,
        error
    }
}

// const receiveAllStrains = (data) => {
//     return {
//         type: RECEIVE_ALL_STRAINS_SUCCESS,
//         isFetching: false,
//         data: data.data,
//         links: data.links,
//         meta: data.meta
//     }
// }

const requestStrainSearch = () => {
    return {
        type: SEARCH_STRAINS_REQUEST
    }
}

const receiveStrainSearch = (data) => {
    return {
        type: SEARCH_STRAINS_SUCCESS,
        isFetching: false,
        data: data.data,
        links: data.links,
        meta: data.meta
    }
}

const strainSearchFailure = (error) => {
    return {
        type: SEARCH_STRAINS_FAILURE,
        error
    }
}

// export const fetchStrainList = () => {
//     return (dispatch) => {
//         dispatch(requestStrains())
//         setTimeout(() => {
//             dispatch(receiveStrains(strainList))
//         }, 1000)
//     }
// }

export const fetchAvailability = () => {
    return (dispatch) => {
        dispatch(receiveAvailability(availability.data))
    }
}

export const fetchPage = (page, size) => {
    let server = __API_SERVER__
    return (dispatch) => {
        dispatch(requestStrains())
        getStrainPage(server, page, size)
        .then(status)
        .then(json)
        .then((response) => {
            setTimeout(() => {
                dispatch(receiveStrains(response))
            }, 250)
        })
        .catch((error) => {
            dispatch(strainFetchFailure(error))
        })
    }
}

export const fetchStrainSearch = (search) => {
    let server = __API_SERVER__
    return (dispatch) => {
        dispatch(requestStrainSearch())
        searchStrains(server, search)
        .then(status)
        .then(json)
        .then((response) => {
            setTimeout(() => {
                dispatch(receiveStrainSearch(response))
            }, 250)
        })
        .catch((error) => {
            dispatch(strainSearchFailure(error))
        })
    }
}

export const clearStrainSearch = () => {
    return {
        type: CLEAR_STRAIN_SEARCH,
        data: []
    }
}
