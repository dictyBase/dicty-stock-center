import { dsctypes } from "./../constants"
import availability from "fake-data/availability"
// import strainList from 'fake-data/strains'
import { status, json } from "utils/fetch"
import { getPage, getStock, searchStocks } from "utils/api"

const {
  AVAILABILITY_FETCH_SUCCESS,
  STRAIN_FETCH_REQUEST,
  STRAIN_FETCH_SUCCESS,
  STRAIN_FETCH_FAILURE,
  STRAINS_FETCH_REQUEST,
  STRAINS_FETCH_SUCCESS,
  STRAINS_FETCH_FAILURE,
  STRAINS_SEARCH_REQUEST,
  STRAINS_SEARCH_SUCCESS,
  STRAINS_SEARCH_FAILURE,
  CLEAR_STRAINS,
  PLASMIDS_FETCH_REQUEST,
  PLASMIDS_FETCH_SUCCESS,
  PLASMIDS_FETCH_FAILURE,
  PLASMIDS_SEARCH_REQUEST,
  PLASMIDS_SEARCH_SUCCESS,
  PLASMIDS_SEARCH_FAILURE,
  CLEAR_PLASMIDS,
} = dsctypes

// const requestAvailability = () => {
//     return {
//         type: AVAILABILITY_FETCH_REQUEST,
//         isFetching: true
//     }
// }
//
const server = process.env.REACT_APP_API_SERVER

const receiveAvailability = data => {
  return {
    type: AVAILABILITY_FETCH_SUCCESS,
    isFetching: false,
    availability: data.attributes.availability,
  }
}

const requestStrains = () => {
  return {
    type: STRAINS_FETCH_REQUEST,
  }
}

const receiveStrains = data => {
  return {
    type: STRAINS_FETCH_SUCCESS,
    data: data.data,
    links: data.links,
    meta: data.meta,
  }
}

const strainsFetchFailure = error => {
  return {
    type: STRAINS_FETCH_FAILURE,
    error,
  }
}

const requestStrain = () => {
  return {
    type: STRAIN_FETCH_REQUEST,
  }
}

const receiveStrain = data => {
  return {
    type: STRAIN_FETCH_SUCCESS,
    data,
  }
}

const strainFetchFailure = error => {
  return {
    type: STRAIN_FETCH_FAILURE,
    error,
  }
}

const strainSearch = search => {
  return {
    type: STRAINS_SEARCH_REQUEST,
  }
}

const receiveStrainSearch = data => {
  return {
    type: STRAINS_SEARCH_SUCCESS,
    isFetching: false,
    data: data.data,
    links: data.links,
    meta: data.meta,
  }
}

const strainSearchFailure = error => {
  return {
    type: STRAINS_SEARCH_FAILURE,
    error,
  }
}

const clearStrains = () => {
  return {
    type: CLEAR_STRAINS,
  }
}

const requestPlasmids = () => {
  return {
    type: PLASMIDS_FETCH_REQUEST,
  }
}

const receivePlasmids = data => {
  return {
    type: PLASMIDS_FETCH_SUCCESS,
    data: data.data,
    links: data.links,
    meta: data.meta,
  }
}

const plasmidsFetchFailure = error => {
  return {
    type: PLASMIDS_FETCH_FAILURE,
    error,
  }
}

const plasmidsSearch = search => {
  return {
    type: PLASMIDS_SEARCH_REQUEST,
  }
}

const receivePlasmidsSearch = data => {
  return {
    type: PLASMIDS_SEARCH_SUCCESS,
    isFetching: false,
    data: data.data,
    links: data.links,
    meta: data.meta,
  }
}

const plasmidsSearchFailure = error => {
  return {
    type: PLASMIDS_SEARCH_FAILURE,
    error,
  }
}

const clearPlasmids = () => {
  return {
    type: CLEAR_PLASMIDS,
  }
}

export const fetchAvailability = () => {
  return dispatch => {
    dispatch(receiveAvailability(availability.data))
  }
}

export const fetchStrains = (page, size) => {
  return dispatch => {
    dispatch(requestStrains())
    getPage(server, page, size, "strain")
      .then(status)
      .then(json)
      .then(response => {
        dispatch(receiveStrains(response))
      })
      .catch(error => {
        dispatch(strainsFetchFailure(error))
      })
  }
}

export const clearStrainSearch = () => {
  return dispatch => {
    dispatch(clearStrains())
  }
}

export const fetchPlasmids = (page, size) => {
  return dispatch => {
    dispatch(requestPlasmids())
    getPage(server, page, size, "plasmid")
      .then(status)
      .then(json)
      .then(response => {
        dispatch(receivePlasmids(response))
      })
      .catch(error => {
        dispatch(plasmidsFetchFailure(error))
      })
  }
}

const transformPlasmid = plasmid => {}

export const fetchPlasmid = id => {
  return dispatch => {
    dispatch(requestStrain())
    getStock(server, id, "plasmid")
      .then(status)
      .then(json)
      .then(response => {
        setTimeout(() => {
          dispatch(receiveStrain(transformPlasmid(response)))
        }, 400)
      })
      .catch(error => {
        dispatch(strainFetchFailure(error))
      })
  }
}

export const searchPlasmids = (page, size, search) => {
  return dispatch => {
    dispatch(plasmidsSearch())
    searchStocks(server, page, size, search, "plasmid")
      .then(status)
      .then(json)
      .then(response => {
        dispatch(receivePlasmidsSearch(response))
      })
      .catch(error => {
        dispatch(plasmidsSearchFailure(error))
      })
  }
}

export const clearPlasmidSearch = () => {
  return dispatch => {
    dispatch(clearPlasmids())
  }
}

const transformStrain = strain => {
  const characteristics = strain.included[0].data.map(characteristic => {
    return characteristic.attributes.value
  })
  const phenotypes = strain.included[1].data.map(phenotype => {
    return {
      name: phenotype.attributes.name,
      observation: phenotype.attributes.observation,
      attribute: phenotype.attributes.phen_attribute,
      notes: phenotype.attributes.value,
      evidence: phenotype.attributes.evidence,
      reference: "placeholder",
    }
  })
  const genotypes = strain.included[2].data.map(genotype => {
    return genotype.attributes.name
  })
  return {
    links: strain.links,
    id: strain.data.id,
    name: strain.data.attributes.name,
    description: strain.data.attributes.description,
    characteristics: characteristics.join(", "),
    phenotypes,
    genotypes,
  }
}

export const fetchStrain = id => {
  return dispatch => {
    dispatch(requestStrain())
    getStock(server, id, "strain")
      .then(status)
      .then(json)
      .then(response => {
        setTimeout(() => {
          dispatch(receiveStrain(transformStrain(response)))
        }, 400)
      })
      .catch(error => {
        dispatch(strainFetchFailure(error))
      })
  }
}
export const searchStrains = (page, size, search) => {
  return dispatch => {
    dispatch(strainSearch())
    searchStocks(server, page, size, search, "strain")
      .then(status)
      .then(json)
      .then(response => {
        dispatch(receiveStrainSearch(response))
      })
      .catch(error => {
        dispatch(strainSearchFailure(error))
      })
  }
}

// export const searchStrains = (search) => {
//     return (dispatch) => {
//         dispatch(searchStrains(search))
//     }
// }
