import { redirectUrlGenerator } from "./oauthConfig"

describe("redirectUrlGenerator function", () => {
  beforeEach(() => {
    delete global.window.location
    global.window.location = new URL("http://localhost:3000")
  })

  afterEach(() => {
    delete process.env.REACT_APP_BASENAME
  })

  it("should handle empty string properly", () => {
    process.env.REACT_APP_BASENAME = ""

    expect(redirectUrlGenerator("google")).toEqual(
      "http://localhost:3000/google/callback",
    )
  })

  it("should handle / properly", () => {
    process.env.REACT_APP_BASENAME = "/"

    expect(redirectUrlGenerator("google")).toEqual(
      "http://localhost:3000/google/callback",
    )
  })

  it("should set correct url for /stockcenter basename", () => {
    process.env.REACT_APP_BASENAME = "/stockcenter"

    expect(redirectUrlGenerator("google")).toEqual(
      "http://localhost:3000/stockcenter/google/callback",
    )
  })

  it("should set correct url for stockcenter basename", () => {
    process.env.REACT_APP_BASENAME = "stockcenter"

    expect(redirectUrlGenerator("google")).toEqual(
      "http://localhost:3000/stockcenter/google/callback",
    )
  })
})
