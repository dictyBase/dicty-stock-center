import types from 'constants'

const {
    AVAILABILITY_FETCH_SUCCESS,
    AVAILABILITY_FETCH_REQUEST,
    AVAILABILITY_FETCH_FAILURE,
    STRAINS_FETCH_REQUEST,
    STRAINS_FETCH_SUCCESS,
    STRAINS_FETCH_FAILURE
} = types

const initialState = {
    availability: {
        isFetching: false
    },
    strainCatalog: {
        isFetching: false
    }
}

const stockCenterReducer = (state = initialState, action) => {
    switch (action.type) {
    case AVAILABILITY_FETCH_REQUEST:
        return {
            ...state,
            availability: {
                isFetching: true
            }
        }
    case AVAILABILITY_FETCH_SUCCESS:
        return {
            ...state,
            availability: {
                isFetching: false,
                data: action.availability
            }
        }
    case AVAILABILITY_FETCH_FAILURE:
        return {
            ...state,
            availability: {
                isFetching: false,
                error: action.error
            }
        }
    case STRAINS_FETCH_REQUEST:
        return {
            ...state,
            strainCatalog: {
                isFetching: true
            }
        }
    case STRAINS_FETCH_SUCCESS:
        return {
            ...state,
            strainCatalog: {
                isFetching: false,
                data: action.data
            }
        }
    case STRAINS_FETCH_FAILURE:
        return {
            ...state,
            strainCatalog: {
                isFetching: false,
                error: action.error
            }
        }
    default:
        return state
    }
}

export default stockCenterReducer
