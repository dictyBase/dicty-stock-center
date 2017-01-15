import types from 'constants'
import availability from 'fake-data/availability'
import strainList from 'fake-data/strains'
import { status, json } from 'utils/fetch'
import { getStrainPage, getStrain } from 'utils/api'

const {
  AVAILABILITY_FETCH_SUCCESS,
  STRAIN_FETCH_REQUEST,
  STRAIN_FETCH_SUCCESS,
  STRAIN_FETCH_FAILURE,
  STRAINS_FETCH_REQUEST,
  STRAINS_FETCH_SUCCESS,
  PAGE_FETCH_SUCCESS,
  PAGE_FETCH_REQUEST,
  PAGE_FETCH_FAILURE,
  SEARCH_STRAINS,
  RECEIVE_ALL_STRAINS_SUCCESS
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

const requestPage = () => {
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
        data: data.data,
        links: data.links,
        meta: data.meta
    }
}

const receiveAllStrains = (data) => {
    return {
        type: RECEIVE_ALL_STRAINS_SUCCESS,
        isFetching: false,
        data: data.data,
        links: data.links,
        meta: data.meta
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
const requestStrain = () => {
    return {
        type: STRAIN_FETCH_REQUEST
    }
}
const receiveStrain = (data) => {
    return {
        type: STRAIN_FETCH_SUCCESS,
        data
    }
}
const strainFetchFailure = () => {
    return {
        type: STRAIN_FETCH_FAILURE
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

export const fetchNextPage = (page, size) => {
    let server = __API_SERVER__
    return (dispatch) => {
        dispatch(requestStrain())
        getStrainPage(server, page, size)
        .then(status)
        .then(json)
        .then((response) => {
            setTimeout(() => {
                dispatch(receiveNextPage(response))
            }, 500)
        })
        .catch((error) => {
            dispatch(pageFetchFailure(error))
        })
    }
}
export const searchAllStrains = (currentRecords, totalRecords, search) => {
    let server = __API_SERVER__
    if ((totalRecords !== currentRecords) && search.length > 0) {
        return (dispatch) => {
            dispatch(requestPage())
            getStrainPage(server, 1, totalRecords)
            .then(status)
            .then(json)
            .then((response) => {
                setTimeout(() => {
                    dispatch(receiveAllStrains(response))
                }, 500)
            })
            .catch((error) => {
                dispatch(pageFetchFailure(error))
            })
            .then(() => {
                dispatch(searchStrains(search))
            })
        }
    } else if ((totalRecords === currentRecords) || search.length === 0) {
        return (dispatch) => {
            dispatch(searchStrains(search))
        }
    }
}
// const commaFormat = (vals) => {
//     const length = vals.length
//     let result = ''
//     for (let i = 0; i < length; i += 1) {
//         if (length === 1) {
//             result += vals[i]
//         } else if (length > 1 && i < length - 1) {
//             result += vals[i]
//             result += ', '
//         } else if (i === length - 1) {
//             result += vals[i]
//         }
//     }
// }
const transformStrain = (strain) => {
    const characteristics = strain.included[0].data.map((characteristic) => {
        return characteristic.attributes.value
    })
    const phenotypes = strain.included[1].data.map((phenotype) => {
        return {
            name: phenotype.attributes.name,
            observation: phenotype.attributes.observation,
            attribute: phenotype.attributes.phen_attribute,
            value: phenotype.attributes.value,
            evidence: phenotype.attributes.evidence
        }
    })
    const genotypes = strain.included[2].data.map((genotype) => {
        return genotype.attributes.name
    })
    return {
        links: strain.links,
        id: strain.data.id,
        name: strain.data.attributes.name,
        description: strain.data.attributes.description,
        characteristics: characteristics.join(', '),
        phenotypes,
        genotypes
    }
}
export const fetchStrain = (id) => {
    let server = __API_SERVER__
    return (dispatch) => {
        dispatch(requestPage())
        getStrain(server, id)
        .then(status)
        .then(json)
        .then((response) => {
            setTimeout(() => {
                dispatch(receiveStrain(transformStrain(response)))
            }, 1000)
        })
        .catch((error) => {
            dispatch(strainFetchFailure(error))
        })
    }
}
// export const searchStrains = (search) => {
//     return (dispatch) => {
//         dispatch(searchStrains(search))
//     }
// }
