import { graphql } from "msw"

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
]
