import reducer from "reducers/stockCenter"
import { dsctypes } from "constants/dsctypes"

const {
  AVAILABILITY_FETCH_SUCCESS,
  STRAINS_FETCH_REQUEST,
  STRAINS_FETCH_SUCCESS,
  STRAINS_FETCH_FAILURE,
  STRAIN_FETCH_REQUEST,
  STRAIN_FETCH_SUCCESS,
  STRAIN_FETCH_FAILURE,
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
  CLEAR_PLASMIDS
} = dsctypes

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
    type: "data",
    id: "1",
    attributes: {
      availability: [
        { name: "Strains", amount: 1927 },
        { name: "Plasmids", amount: 882 },
        { name: "Antibodies", amount: 12 },
        { name: "cDNA library", amount: 1 },
        { name: "Genomic library", amount: 1 }
      ]
    }
  }
}

const strainData = {
  data: [
    {
      type: "strain",
      id: "DBS00987",
      attributes: {
        name: "3KO 60BAS",
        description: "CF60B antisense in triple KO",
        category: "strain",
        in_stock: true
      }
    }
  ],
  links: {
    self: "/stocks?page[number]=1&page[size]=1",
    first: "/stocks?page[number]=1&page[size]=1",
    prev: undefined,
    next: undefined,
    last: "/stocks?page[number]=1&page[size]=1"
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
  type: "strain",
  id: "DBS00987",
  attributes: {
    name: "3KO 60BAS",
    description: "CF60B antisense in triple KO",
    category: "strain",
    in_stock: true
  }
}

const plasmidData = {
  data: [
    {
      type: "plasmid",
      id: "DBS0210602",
      attributes: {
        name: "amiB-KO (p82ClaI)",
        description:
          "Recapitulation of the R8-2 amiB- REMI mutant (aggregation-minus B)",
        category: "plasmid",
        in_stock: true
      }
    }
  ],
  links: {
    self: "/stocks?page[number]=1&page[size]=1",
    first: "/stocks?page[number]=1&page[size]=1",
    prev: undefined,
    next: undefined,
    last: "/stocks?page[number]=1&page[size]=1"
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

const error = "this is an error"

describe("reducers", () => {
  describe("stockCenter reducer", () => {
    // it("should return the initial state", () => {
    //   expect(reducer(undefined, {})).toEqual(initialState)
    // })
    // it('should handle AVAILABILITY_FETCH_REQUEST', () => {
    //     expect(
    //         initialState,
    //         {
    //             type: AVAILABILITY_FETCH_REQUEST
    //         }
    //     ).toEqual({
    //         ...initialState,
    //         availability: {
    //             isFetching: true
    //         }
    //     })
    // })
    it("should handle AVAILABILITY_FETCH_SUCCESS", () => {
      expect(
        reducer(initialState, {
          type: AVAILABILITY_FETCH_SUCCESS,
          payload: {
            availability: availability.data.attributes.availability
          }
        })
      ).toEqual({
        ...initialState,
        availability: {
          // ...initialState.availability,
          isFetching: false,
          data: availability.data.attributes.availability
        }
      })
    })
    it("should handle STRAINS_FETCH_REQUEST", () => {
      expect(
        reducer(initialState, {
          type: STRAINS_FETCH_REQUEST
        })
      ).toEqual({
        ...initialState,
        strainCatalog: {
          ...initialState.strainCatalog,
          isFetching: true
        }
      })
    })
    it("should handle STRAINS_FETCH_SUCCESS", () => {
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
            type: STRAINS_FETCH_SUCCESS,
            payload: {
              ...strainData
            }
          }
        )
      ).toEqual({
        ...initialState,
        strainCatalog: {
          ...initialState.strainCatalog,
          isFetching: false,
          ...strainData,
          data: initialState.strainCatalog.data.concat(strainData.data)
        }
      })
    })
    it("should handle STRAINS_FETCH_FAILURE", () => {
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
            type: STRAINS_FETCH_FAILURE,
            payload: {
              error
            }
          }
        )
      ).toEqual({
        ...initialState,
        strainCatalog: {
          ...initialState.strainCatalog,
          isFetching: false,
          error
        }
      })
    })
    it("should handle STRAINS_SEARCH_REQUEST", () => {
      expect(
        reducer(initialState, {
          type: STRAINS_SEARCH_REQUEST
        })
      ).toEqual({
        ...initialState,
        strainCatalog: {
          ...initialState.strainCatalog,
          isFetching: true
        }
      })
    })
    it("should handle STRAINS_SEARCH_SUCCESS", () => {
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
            type: STRAINS_SEARCH_SUCCESS,
            payload: {
              ...strainData
            }
          }
        )
      ).toEqual({
        ...initialState,
        strainCatalog: {
          ...initialState.strainCatalog,
          isFetching: false,
          ...strainData
        }
      })
    })
    it("should handle STRAINS_SEARCH_FAILURE", () => {
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
            type: STRAINS_SEARCH_FAILURE,
            payload: {
              error
            }
          }
        )
      ).toEqual({
        ...initialState,
        strainCatalog: {
          ...initialState.strainCatalog,
          isFetching: false,
          error
        }
      })
    })
    it("should handle CLEAR_STRAINS", () => {
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
            type: CLEAR_STRAINS
          }
        )
      ).toEqual(initialState)
    })
    it("should handle STRAIN_FETCH_REQUEST", () => {
      expect(
        reducer(initialState, {
          type: STRAIN_FETCH_REQUEST
        })
      ).toEqual({
        ...initialState,
        strain: {
          ...initialState.strain,
          isFetching: true
        }
      })
    })
    it("should handle STRAIN_FETCH_SUCCESS", () => {
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
            type: STRAIN_FETCH_SUCCESS,
            payload: {
              data: strain
            }
          }
        )
      ).toEqual({
        ...initialState,
        strain: {
          ...strain,
          isFetching: false
        }
      })
    })
    it("should handle STRAIN_FETCH_FAILURE", () => {
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
            type: STRAIN_FETCH_FAILURE,
            payload: {
              error
            }
          }
        )
      ).toEqual({
        ...initialState,
        strain: {
          ...initialState.strain,
          error
        }
      })
    })
    it("should handle PLASMIDS_FETCH_REQUEST", () => {
      expect(
        reducer(initialState, {
          type: PLASMIDS_FETCH_REQUEST
        })
      ).toEqual({
        ...initialState,
        plasmidCatalog: {
          ...initialState.plasmidCatalog,
          isFetching: true
        }
      })
    })
    it("should handle PLASMIDS_FETCH_SUCCESS", () => {
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
            type: PLASMIDS_FETCH_SUCCESS,
            payload: {
              ...plasmidData
            }
          }
        )
      ).toEqual({
        ...initialState,
        plasmidCatalog: {
          ...initialState.plasmidCatalog,
          isFetching: false,
          ...plasmidData,
          data: initialState.plasmidCatalog.data.concat(plasmidData.data)
        }
      })
    })
    it("should handle PLASMIDS_FETCH_FAILURE", () => {
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
            type: PLASMIDS_FETCH_FAILURE,
            payload: {
              error
            }
          }
        )
      ).toEqual({
        ...initialState,
        plasmidCatalog: {
          ...initialState.plasmidCatalog,
          isFetching: false,
          error
        }
      })
    })
    it("should handle PLASMIDS_SEARCH_REQUEST", () => {
      expect(
        reducer(initialState, {
          type: PLASMIDS_SEARCH_REQUEST
        })
      ).toEqual({
        ...initialState,
        plasmidCatalog: {
          ...initialState.plasmidCatalog,
          isFetching: true
        }
      })
    })
    it("should handle PLASMIDS_SEARCH_SUCCESS", () => {
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
            type: PLASMIDS_SEARCH_SUCCESS,
            payload: {
              ...plasmidData
            }
          }
        )
      ).toEqual({
        ...initialState,
        plasmidCatalog: {
          ...initialState.plasmidCatalog,
          isFetching: false,
          ...plasmidData
        }
      })
    })
    it("should handle PLASMIDS_SEARCH_FAILURE", () => {
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
            type: PLASMIDS_SEARCH_FAILURE,
            payload: {
              error
            }
          }
        )
      ).toEqual({
        ...initialState,
        plasmidCatalog: {
          ...initialState.plasmidCatalog,
          isFetching: false,
          error
        }
      })
    })
    it("should handle CLEAR_PLASMIDS", () => {
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
            type: CLEAR_PLASMIDS
          }
        )
      ).toEqual(initialState)
    })
  })
})
