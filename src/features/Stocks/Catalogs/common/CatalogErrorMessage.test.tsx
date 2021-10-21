import CatalogErrorMessage from "./CatalogErrorMessage"

describe("Stocks/Catalog/common/CatalogErrorMessage", () => {
  describe("initial render", () => {
    it("should use function", () => {
      expect(
        CatalogErrorMessage({
          error: {
            graphQLErrors: [],
            name: "",
            extraInfo: undefined,
            networkError: null,
            message: "GraphQL error: You must be logged in",
            clientErrors: [],
          },
        }),
      ).not.toBeNull()

      expect(
        CatalogErrorMessage({
          error: {
            graphQLErrors: [],
            name: "",
            extraInfo: undefined,
            networkError: new Error("Hello"),
            message: "GraphQL error: You must be logged in",
            clientErrors: [],
          },
        }),
      ).not.toBeNull()

      expect(CatalogErrorMessage({})).toBeNull()
    })
  })
})
