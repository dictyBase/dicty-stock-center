import types from 'constants'

const {
    AVAILABILITY_FETCH_SUCCESS,
    AVAILABILITY_FETCH_REQUEST,
    AVAILABILITY_FETCH_FAILURE,
    STRAINS_FETCH_REQUEST,
    STRAINS_FETCH_SUCCESS,
    STRAINS_FETCH_FAILURE,
    SEARCH_STRAINS,
    STRAIN_FETCH_REQUEST,
    STRAIN_FETCH_SUCCESS,
    STRAIN_FETCH_FAILURE,
    PLASMIDS_FETCH_REQUEST,
    PLASMIDS_FETCH_SUCCESS,
    PLASMIDS_FETCH_FAILURE,
    PLASMIDS_SEARCH_REQUEST,
    PLASMIDS_SEARCH_SUCCESS,
    PLASMIDS_SEARCH_FAILURE
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
    },
    strain: {
        isFetching: false
    },
    plasmidCatalog: {
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
                isFetching: true
            }
        }
    case STRAINS_FETCH_SUCCESS:
        return {
            ...state,
            strainCatalog: {
                ...state.strainCatalog,
                isFetching: false,
                ...action,
                data: state.strainCatalog.data.concat(action.data)
            }
        }
    case STRAINS_FETCH_FAILURE:
        return {
            ...state,
            strainCatalog: {
                ...state.strainCatalog,
                isFetching: false,
                error: action.error
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
    case STRAIN_FETCH_REQUEST:
        return {
            ...state,
            strain: {
                ...state.strain,
                isFetching: true
            }
        }
    case STRAIN_FETCH_SUCCESS:
        return {
            ...state,
            strain: {
                isFetching: false,
                ...action.data
            }
        }
    case STRAIN_FETCH_FAILURE:
        return {
            ...state,
            strain: {
                ...state.strain,
                isFetching: false
            }
        }
    case PLASMIDS_FETCH_REQUEST:
        return {
            ...state,
            plasmidCatalog: {
                ...state.plasmidCatalog,
                isFetching: true
            }
        }
    case PLASMIDS_FETCH_SUCCESS:
        return {
            ...state,
            plasmidCatalog: {
                ...state.plasmidCatalog,
                isFetching: false,
                ...action,
                data: state.plasmidCatalog.data.concat(action.data)
            }
        }
    case PLASMIDS_FETCH_FAILURE:
        return {
            ...state,
            plasmidCatalog: {
                ...state.pasmidCatalog,
                isFetching: false,
                error: action.error
            }
        }
    case PLASMIDS_SEARCH_REQUEST:
        return {
            ...state,
            plasmidCatalog: {
                ...state.plasmidCatalog,
                isFetching: true
            }
        }
    case PLASMIDS_SEARCH_SUCCESS:
        return {
            ...state,
            plasmidCatalog: {
                ...state.plasmidCatalog,
                isFetching: false,
                data: action.data
            }
        }
    case PLASMIDS_SEARCH_FAILURE:
        return {
            ...state,
            plasmidCatalog: {
                ...state.plasmidCatalog,
                isFetching: false,
                error: action.error
            }
        }
    default:
        return state
    }
}

export default stockCenterReducer
