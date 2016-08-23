import React from 'react'
import types from 'constants'
import availability from 'fake-data/availability'

const { AVAILABILITY_FETCH_SUCCESS, STRAINS_FETCH_REQUEST, STRAINS_FETCH_SUCCESS } = types

// const requestAvailability = () => {
//     return {
//         type: AVAILABILITY_FETCH_REQUEST,
//         isFetching: true
//     }
// }
const strainList = {
    rows: [
        {
            availability: true,
            strain_descriptor: 'acaA-',
            strain_names: 'aca-, acaA-(r)',
            systematic_name: 'DG1108',
            id: 'DBS0252577'
        },
        {
            availability: true,
            strain_descriptor: 'abcB4-',
            strain_names: 'AK00010',
            systematic_name: 'DBS0350146',
            id: 'DBS0350146'
        }
    ],
    columns: [
        {
            property: 'availability',
            header: {
                label: 'Availability'
            }
        },
        {
            property: 'strain_descriptor',
            header: {
                label: 'Strain Descriptor'
            }
        },
        {
            property: 'strain_names',
            header: {
                label: 'Strain Names'
            }
        },
        {
            property: 'systematic_name',
            header: {
                label: 'Systematic Name'
            }
        },
        {
            property: 'id',
            header: {
                label: 'Strain ID'
            }
        },
        {
            cell: {
                format: (value, { rowData }) => (
                  <button
                    className="btn btn-primary"
                    onClick={ () => { console.log(`${JSON.stringify(rowData, null, 2)}`) } }>
                      Add to cart
                  </button>
                )
            },
            width: 200,
            visible: true
        }
    ]
}

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
