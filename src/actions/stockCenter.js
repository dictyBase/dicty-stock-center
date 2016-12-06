import types from 'constants'
import availability from 'fake-data/availability'
import strainList from 'fake-data/strains'
import { status, json } from 'utils/fetch'
import { getStrainPage } from 'utils/api'

const {
  AVAILABILITY_FETCH_SUCCESS,
  STRAINS_FETCH_REQUEST,
  STRAINS_FETCH_SUCCESS,
  PAGE_FETCH_SUCCESS,
  PAGE_FETCH_REQUEST,
  PAGE_FETCH_FAILURE,
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

const receiveNextPage = (data) => {
    return {
        type: PAGE_FETCH_SUCCESS,
        isFetching: false,
        data: data.strains,
        hasNextPage: data.hasNextPage
    }
}

const searchStrains = (search) => {
    return {
        type: SEARCH_STRAINS,
        search
    }
}

const pageFetchFailure = (error) => {
    return {
        type: PAGE_FETCH_FAILURE,
        error
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

export const fetchNextPage = (page) => {
    let server = __API_SERVER__
    return (dispatch) => {
        dispatch(requestNextPage())
        getStrainPage(server, page)
        .then(status)
        .then(json)
        .then((response) => {
            setTimeout(() => {
                dispatch(receiveNextPage(response.data))
            }, 2000)
        })
        .catch((error) => {
            dispatch(pageFetchFailure(error))
        })
    }
}

export const getSearchInput = (search) => {
    return (dispatch) => {
        dispatch(searchStrains(search))
    }
}
