import { graphql } from "msw"
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
