import reducer from 'reducers/stockCenter'
import types from 'constants'

const initialState = {
    availability: {
        isFetching: false
    },
    strainCatalog: {
        isFetching: false,
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
        data: [],
        links: {},
        meta: {
            pagination: {
                number: 1
            }
        }
    },
    plasmid: {
        isFetching: false
    }
}

const availability = {
    data: {
        type: 'data',
        id: '1',
        attributes: {
            availability: [
                {name: 'Strains', amount: 1927},
                {name: 'Plasmids', amount: 882},
                {name: 'Antibodies', amount: 12},
                {name: 'cDNA library', amount: 1},
                {name: 'Genomic library', amount: 1}
            ]
        }
    }
}

const strainData = {
    data: [
        {
            type: 'strain',
            id: 'DBS00987',
            attributes: {
                name: '3KO 60BAS',
                description: 'CF60B antisense in triple KO',
                category: 'strain',
                in_stock: true
            }
        }
    ],
    links: {
        self: '/stocks?page[number]=1&page[size]=1',
        first: '/stocks?page[number]=1&page[size]=1',
        prev: undefined,
        next: undefined,
        last: '/stocks?page[number]=1&page[size]=1'
    },
    meta: {
        pagination: {
            records: 1,
            total: 1,
            size: 1,
            number: 1
        }
    }
}

const strain = {
    type: 'strain',
    id: 'DBS00987',
    attributes: {
        name: '3KO 60BAS',
        description: 'CF60B antisense in triple KO',
        category: 'strain',
        in_stock: true
    }
}

const plasmidData = {
    data: [
        {
            type: 'plasmid',
            id: 'DBS0210602',
            attributes: {
                name: 'amiB-KO (p82ClaI)',
                description: 'Recapitulation of the R8-2 amiB- REMI mutant (aggregation-minus B)',
                category: 'plasmid',
                in_stock: true
            }
        }
    ],
    links: {
        self: '/stocks?page[number]=1&page[size]=1',
        first: '/stocks?page[number]=1&page[size]=1',
        prev: undefined,
        next: undefined,
        last: '/stocks?page[number]=1&page[size]=1'
    },
    meta: {
        pagination: {
            records: 1,
            total: 1,
            size: 1,
            number: 1
        }
    }
}

const error = 'this is an error'

describe('reducers', () => {
    describe('stockCenter reducer', () => {
        it('should return the initial state', () => {
            expect(
              reducer(undefined, {})
            ).to.eql(initialState)
        })
        // it('should handle AVAILABILITY_FETCH_REQUEST', () => {
        //     expect(
        //         initialState,
        //         {
        //             type: types.AVAILABILITY_FETCH_REQUEST
        //         }
        //     ).to.eql({
        //         ...initialState,
        //         availability: {
        //             isFetching: true
        //         }
        //     })
        // })
        it('should handle AVAILABILITY_FETCH_SUCCESS', () => {
            expect(
                reducer(
                    initialState,
                    {
                        type: types.AVAILABILITY_FETCH_SUCCESS,
                        availability: availability.data.attributes.availability
                    }
                )
            ).to.eql({
                ...initialState,
                availability: {
                    // ...initialState.availability,
                    isFetching: false,
                    data: availability.data.attributes.availability
                }
            })
        })
        it('should handle STRAINS_FETCH_REQUEST', () => {
            expect(
              reducer(
                  initialState,
                  {
                      type: types.STRAINS_FETCH_REQUEST
                  }
              )
            ).to.eql({
                ...initialState,
                strainCatalog: {
                    ...initialState.strainCatalog,
                    isFetching: true
                }
            })
        })
        it('should handle STRAINS_FETCH_SUCCESS', () => {
            expect(
              reducer(
                  {
                      ...initialState,
                      strainCatalog: {
                          ...initialState.strainCatalog,
                          isFetching: true
                      }
                  },
                  {
                      type: types.STRAINS_FETCH_SUCCESS,
                      ...strainData
                  }
              )
            ).to.eql({
                ...initialState,
                strainCatalog: {
                    ...initialState.strainCatalog,
                    isFetching: false,
                    ...strainData,
                    data: initialState.strainCatalog.data.concat(strainData.data)
                }
            })
        })
        it('should handle STRAINS_FETCH_FAILURE', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        strainCatalog: {
                            ...initialState.strainCatalog,
                            isFetching: true
                        }
                    },
                    {
                        type: types.STRAINS_FETCH_FAILURE,
                        error
                    }
              )
            ).to.eql({
                ...initialState,
                strainCatalog: {
                    ...initialState.strainCatalog,
                    isFetching: false,
                    error
                }
            })
        })
        it('should handle STRAINS_SEARCH_REQUEST', () => {
            expect(
                reducer(
                    initialState,
                    {
                        type: types.STRAINS_SEARCH_REQUEST
                    }
                )
            ).to.eql({
                ...initialState,
                strainCatalog: {
                    ...initialState.strainCatalog,
                    isFetching: true
                }
            })
        })
        it('should handle STRAINS_SEARCH_SUCCESS', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        strainCatalog: {
                            ...initialState.strainCatalog,
                            isFetching: true
                        }
                    },
                    {
                        type: types.STRAINS_SEARCH_SUCCESS,
                        ...strainData
                    }
                )
            ).to.eql({
                ...initialState,
                strainCatalog: {
                    ...initialState.strainCatalog,
                    isFetching: false,
                    ...strainData
                }
            })
        })
        it('should handle STRAINS_SEARCH_FAILURE', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        strainCatalog: {
                            ...initialState.strainCatalog,
                            isFetching: true
                        }
                    },
                    {
                        type: types.STRAINS_SEARCH_FAILURE,
                        error
                    }
                )
            ).to.eql({
                ...initialState,
                strainCatalog: {
                    ...initialState.strainCatalog,
                    isFetching: false,
                    error
                }
            })
        })
        it('should handle CLEAR_STRAINS', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        strainCatalog: {
                            ...initialState.strainCatalog,
                            ...strainData
                        }
                    },
                    {
                        type: types.CLEAR_STRAINS
                    }
                )
            ).to.eql(initialState)
        })
        it('should handle STRAIN_FETCH_REQUEST', () => {
            expect(
                reducer(
                    initialState,
                    {
                        type: types.STRAIN_FETCH_REQUEST
                    }
                )
            ).to.eql({
                ...initialState,
                strain: {
                    ...initialState.strain,
                    isFetching: true
                }
            })
        })
        it('should handle STRAIN_FETCH_SUCCESS', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        strain: {
                            ...initialState.strain,
                            isFetching: true
                        }
                    },
                    {
                        type: types.STRAIN_FETCH_SUCCESS,
                        data: strain
                    }
                )
            ).to.eql({
                ...initialState,
                strain: {
                    ...strain,
                    isFetching: false
                }
            })
        })
        it('should handle STRAIN_FETCH_FAILURE', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        strain: {
                            ...initialState.strain,
                            isFetching: true
                        }
                    },
                    {
                        type: types.STRAIN_FETCH_FAILURE,
                        error
                    }
                )
            ).to.eql({
                ...initialState,
                strain: {
                    ...initialState.strain,
                    error
                }
            })
        })
        it('should handle PLASMIDS_FETCH_REQUEST', () => {
            expect(
                reducer(
                    initialState,
                    {
                        type: types.PLASMIDS_FETCH_REQUEST
                    }
                )
            ).to.eql({
                ...initialState,
                plasmidCatalog: {
                    ...initialState.plasmidCatalog,
                    isFetching: true
                }
            })
        })
        it('should handle PLASMIDS_FETCH_SUCCESS', () => {
            expect(
              reducer(
                  {
                      ...initialState,
                      plasmidCatalog: {
                          ...initialState.plasmidCatalog,
                          isFetching: true
                      }
                  },
                  {
                      type: types.PLASMIDS_FETCH_SUCCESS,
                      ...plasmidData
                  }
              )
            ).to.eql({
                ...initialState,
                plasmidCatalog: {
                    ...initialState.plasmidCatalog,
                    isFetching: false,
                    ...plasmidData,
                    data: initialState.plasmidCatalog.data.concat(plasmidData.data)
                }
            })
        })
        it('should handle PLASMIDS_FETCH_FAILURE', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        plasmidCatalog: {
                            ...initialState.plasmidCatalog,
                            isFetching: true
                        }
                    },
                    {
                        type: types.PLASMIDS_FETCH_FAILURE,
                        error
                    }
                )
            ).to.eql({
                ...initialState,
                plasmidCatalog: {
                    ...initialState.plasmidCatalog,
                    isFetching: false,
                    error
                }
            })
        })
        it('should handle PLASMIDS_SEARCH_REQUEST', () => {
            expect(
                reducer(
                    initialState,
                    {
                        type: types.PLASMIDS_SEARCH_REQUEST
                    }
                )
            ).to.eql({
                ...initialState,
                plasmidCatalog: {
                    ...initialState.plasmidCatalog,
                    isFetching: true
                }
            })
        })
        it('should handle PLASMIDS_SEARCH_SUCCESS', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        plasmidCatalog: {
                            ...initialState.plasmidCatalog,
                            isFetching: true
                        }
                    },
                    {
                        type: types.PLASMIDS_SEARCH_SUCCESS,
                        ...plasmidData
                    }
                )
            ).to.eql({
                ...initialState,
                plasmidCatalog: {
                    ...initialState.plasmidCatalog,
                    isFetching: false,
                    ...plasmidData
                }
            })
        })
        it('should handle PLASMIDS_SEARCH_FAILURE', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        plasmidCatalog: {
                            ...initialState.plasmidCatalog,
                            isFetching: true
                        }
                    },
                    {
                        type: types.PLASMIDS_SEARCH_FAILURE,
                        error
                    }
                )
            ).to.eql({
                ...initialState,
                plasmidCatalog: {
                    ...initialState.plasmidCatalog,
                    isFetching: false,
                    error
                }
            })
        })
        it('should handle CLEAR_PLASMIDS', () => {
            expect(
                reducer(
                    {
                        ...initialState,
                        plasmidCatalog: {
                            ...initialState.plasmidCatalog,
                            ...plasmidData
                        }
                    },
                    {
                        type: types.CLEAR_PLASMIDS
                    }
                )
            ).to.eql(initialState)
        })
    })
})
