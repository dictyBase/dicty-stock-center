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

const error = 'this is an error'

describe('reducers', () => {
    describe('stockCenter reducer', () => {
        it('should return the initial state', () => {
            expect(
              reducer(undefined, {})
            ).to.eql(initialState)
        })
        it('should handle STRAINS_FETCH_REQUEST', () => {
            expect(
              reducer(initialState, {
                  type: types.STRAINS_FETCH_REQUEST
              })
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
        it('should handle STRAIN_SEARCH_REQUEST', () => {
            expect(
                reducer(
                    initialState,
                    {
                        type: types.STRAIN_SEARCH_REQUEST
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
        it('should handle STRAIN_SEARCH_SUCCESS', () => {
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
                        type: types.STRAIN_SEARCH_SUCCESS,
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
        it('should handle STRAIN_SEARCH_FAILURE', () => {
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
                        type: types.STRAIN_SEARCH_FAILURE,
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
    })
})
