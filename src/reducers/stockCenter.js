import types from 'constants'

const {
    AVAILABILITY_FETCH_SUCCESS,
    AVAILABILITY_FETCH_REQUEST,
    AVAILABILITY_FETCH_FAILURE,
    STRAINS_FETCH_REQUEST,
    STRAINS_FETCH_SUCCESS,
    STRAINS_FETCH_FAILURE,
    PAGE_FETCH_REQUEST,
    PAGE_FETCH_SUCCESS,
    PAGE_FETCH_FAILURE,
    SEARCH_STRAINS,
    RECEIVE_ALL_STRAINS_SUCCESS
} = types

const initialState = {
    availability: {
        isFetching: false
    },
    strainCatalog: {
        isFetching: false,
        search: '',
        data: [],
        links: {},
        meta: {
            pagination: {
                number: 1
            }
        }
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
                ...state.strainCatalog,
                isFetching: true,
                pages: 1
            }
        }
    case STRAINS_FETCH_SUCCESS:
        return {
            ...state,
            strainCatalog: {
                ...state.strainCatalog,
                isFetching: false,
                data: action.data.strains
            }
        }
    case STRAINS_FETCH_FAILURE:
        return {
            ...state,
            strainCatalog: {
                ...state.straingCatalog,
                isFetching: false,
                error: action.error
            }
        }
    case PAGE_FETCH_REQUEST:
        return {
            ...state,
            strainCatalog: {
                ...state.strainCatalog,
                isFetching: true
            }
        }
    case PAGE_FETCH_SUCCESS:
        return {
            ...state,
            strainCatalog: {
                ...state.strainCatalog,
                isFetching: false,
                ...action,
                data: state.strainCatalog.data.concat(action.data)
            }
        }
    case PAGE_FETCH_FAILURE:
        return {
            ...state,
            strainCatalog: {
                ...state.strainCatalog,
                isFetching: false
            }
        }
    case SEARCH_STRAINS:
        return {
            ...state,
            strainCatalog: {
                ...state.strainCatalog,
                search: action.search
            }
        }
    case RECEIVE_ALL_STRAINS_SUCCESS:
        return {
            ...state,
            strainCatalog: {
                ...state.strainCatalog,
                isFetching: false,
                ...action,
                data: action.data
            }
        }
    default:
        return state
    }
}

export default stockCenterReducer
