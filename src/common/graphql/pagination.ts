/**
 * This file contains functions to handle pagination for queries that use infinite scroll.
 * https://www.apollographql.com/docs/react/pagination/core-api/
 */
import { StrainWithPhenotype } from "features/Stocks/Details/types/props"
import { StrainItem, PlasmidItem } from "features/Stocks/Catalogs/types/list"

/**
 * Using interfaces rather than types so SearchInfo can be extended.
 */

interface SearchInfo {
  nextCursor: number
  totalCount: number
  __typename: string
}

interface ListStrainsWithPhenotype extends SearchInfo {
  strains: Array<StrainWithPhenotype>
}

interface ListStrains extends SearchInfo {
  strains: Array<StrainItem>
}

interface ListPlasmids extends SearchInfo {
  plasmids: Array<PlasmidItem>
}

const listStrainsWithPhenotypePagination = () => ({
  keyArgs: ["phenotype"],
  merge(
    existing: ListStrainsWithPhenotype,
    incoming: ListStrainsWithPhenotype,
  ) {
    let strains: ListStrainsWithPhenotype["strains"] = []
    let totalCount: ListStrainsWithPhenotype["totalCount"] = 0
    if (existing) {
      strains = strains.concat(existing.strains)
      totalCount = existing.totalCount
    }
    if (incoming) {
      strains = strains.concat(incoming.strains)
      totalCount = totalCount + incoming.totalCount
    }
    return {
      ...incoming,
      strains,
      totalCount,
    }
  },
  read(existing: ListStrainsWithPhenotype) {
    return existing
  },
})

const listStrainsPagination = () => ({
  keyArgs: ["filter"],
  merge(existing: ListStrains, incoming: ListStrains) {
    let strains: ListStrains["strains"] = []
    if (existing) {
      strains = strains.concat(existing.strains)
    }
    if (incoming) {
      strains = strains.concat(incoming.strains)
    }
    return {
      ...incoming,
      strains,
    }
  },
  read(existing: ListStrains) {
    return existing
  },
})

const listPlasmidsPagination = () => ({
  keyArgs: ["filter"],
  merge(existing: ListPlasmids, incoming: ListPlasmids) {
    let plasmids: ListPlasmids["plasmids"] = []
    if (existing) {
      plasmids = plasmids.concat(existing.plasmids)
    }
    if (incoming) {
      plasmids = plasmids.concat(incoming.plasmids)
    }
    return {
      ...incoming,
      plasmids,
    }
  },
  read(existing: ListPlasmids) {
    return existing
  },
})

export {
  listStrainsWithPhenotypePagination,
  listStrainsPagination,
  listPlasmidsPagination,
}
