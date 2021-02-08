import { graphql } from "msw"
import {
  firstTenStrainCatalogItems,
  nextTenStrainCatalogItems,
  lastFiveStrainCatalogItems,
} from "./mockStrainLists"
import {
  firstTenPlasmidCatalogItems,
  nextTenPlasmidCatalogItems,
  lastFivePlasmidCatalogItems,
} from "./mockPlasmidLists"
import mockUser from "./mockUser"
import { activeToken } from "./mockTokens"

export const handlers = [
  graphql.query("StockList", (req, res, ctx) => {
    return res(
      ctx.data({
        listPlasmids: {
          totalCount: 947,
          __typename: "PlasmidListWithCursor",
        },
        listStrains: {
          totalCount: 6643,
          __typename: "StrainListWithCursor",
        },
      }),
    )
  }),
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
