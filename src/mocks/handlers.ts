import { graphql } from "msw"
import {
  firstTenStrainCatalogItems,
  nextTenStrainCatalogItems,
  lastFiveStrainCatalogItems,
  mockBacterialStrains,
} from "./mockStrainLists"
import {
  firstTenPlasmidCatalogItems,
  nextTenPlasmidCatalogItems,
  lastFivePlasmidCatalogItems,
} from "./mockPlasmidLists"
import {
  availableStrain,
  unavailableStrain,
  strainWithPhenotype,
  gwdiData,
} from "./mockStrain"
import mockUser from "./mockUser"
import { activeToken } from "./mockTokens"
import { availablePlasmid } from "./mockPlasmid"

export const handlers = [
  graphql.query("StrainList", (req, res, ctx) => {
    const cursor = req.body?.variables.cursor
    if (cursor === 0) {
      return res(
        ctx.data({
          listStrains: firstTenStrainCatalogItems,
        }),
      )
    }
    if (cursor === firstTenStrainCatalogItems.nextCursor) {
      return res(
        ctx.data({
          listStrains: nextTenStrainCatalogItems,
        }),
      )
    }
    if (cursor === nextTenStrainCatalogItems.nextCursor) {
      return res(
        ctx.data({
          listStrains: lastFiveStrainCatalogItems,
        }),
      )
    }
  }),
  graphql.query("ListBacterialStrains", (req, res, ctx) => {
    return res(ctx.data(mockBacterialStrains))
  }),
  graphql.query("PlasmidListFilter", (req, res, ctx) => {
    const cursor = req.body?.variables.cursor
    if (cursor === 0) {
      return res(
        ctx.data({
          listPlasmids: firstTenPlasmidCatalogItems,
        }),
      )
    }
    if (cursor === firstTenPlasmidCatalogItems.nextCursor) {
      return res(
        ctx.data({
          listPlasmids: nextTenPlasmidCatalogItems,
        }),
      )
    }
    if (cursor === nextTenPlasmidCatalogItems.nextCursor) {
      return res(
        ctx.data({
          listPlasmids: lastFivePlasmidCatalogItems,
        }),
      )
    }
  }),
  graphql.query("Strain", (req, res, ctx) => {
    const id = req.body?.variables.id
    if (id === availableStrain.id) {
      return res(
        ctx.data({
          strain: availableStrain,
        }),
      )
    }
    if (id === unavailableStrain.id) {
      return res(
        ctx.data({
          strain: unavailableStrain,
        }),
      )
    }
    if (id === strainWithPhenotype.id) {
      return res(
        ctx.data({
          strain: strainWithPhenotype,
        }),
      )
    }
    if (id === gwdiData.id) {
      return res(
        ctx.data({
          strain: gwdiData,
        }),
      )
    }
  }),
  graphql.query("Plasmid", (req, res, ctx) => {
    const id = req.body?.variables.id
    if (id === availablePlasmid.data.id) {
      return res(ctx.data(availablePlasmid))
    }
  }),
  graphql.query("GetRefreshToken", (req, res, ctx) => {
    if (!req.body?.variables.token) {
      return res(
        ctx.errors([
          {
            message: "refresh token does not exist",
            extensions: {
              code: "NotFound",
              timestamp: "xyz",
            },
          },
        ]),
      )
    }

    return res(
      ctx.data({
        getRefreshToken: {
          token: activeToken,
          user: mockUser,
          identity: {
            provider: "orcid",
          },
        },
      }),
    )
  }),
  // graphql.mutation("Login", (req, res, ctx) => {
  //   return res(
  //     context.cookie("refresh-token", activeToken),
  //     ctx.data({
  //       login: {
  //         token: activeToken,
  //         user: mockUser,
  //         identity: {
  //           provider: "orcid",
  //         },
  //       },
  //     }),
  //   )
  // }),
]
