import reducer from 'reducers/stockCenter'
import types from 'constants'

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
    },
    plasmid: {
        isFetching: false
    }
}
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
        // it('should handle STRAINS_FETCH_SUCCESS', () => {
        //     const data = {
        //         data: [
        //             {
        //                 type: 'strain',
        //                 id: 'DBS00987',
        //                 attributes: {
        //                     name: '3KO 60BAS',
        //                     description: 'CF60B antisense in triple KO',
        //                     category: 'strain',
        //                     in_stock: true
        //                 }
        //             }
        //         ],
        //         links: {
        //             self: '/stocks?page[number]=1&page[size]=1',
        //             first: '/stocks?page[number]=1&page[size]=1',
        //             prev: undefined,
        //             next: '/stocks?page[number]=1&page[size]=1',
        //             last: '/stocks?page[number]=1&page[size]=1'
        //         },
        //         meta: {
        //             pagination: {
        //                 records: 1,
        //                 total: 1,
        //                 size: 1,
        //                 number: 1
        //             }
        //         }
        //     }
        //     expect(
        //       reducer(
        //           {
        //               ...initialState,
        //               strainCatalog: {
        //                   ...initialState.strainCatalog,
        //                   isFetching: true
        //               }
        //           },
        //           {
        //               type: types.STRAINS_FETCH_SUCCESS,
        //               ...data
        //           }
        //       )
        //     ).to.eql({
        //         ...initialState,
        //         strainCatalog: {
        //             ...initialState.strainCatalog,
        //             isFetching: false,
        //             data: data.data,
        //             meta: data.meta,
        //             links: data.links
        //         }
        //     })
        // })
    })
})
