import verifyBrowserSupport from "./verifyBrowserSupport"

describe("common/utils/verifyBrowserSupport", () => {
  it("should allow Firefox 62", () => {
    expect(verifyBrowserSupport("Firefox", "62.0")).toBeTruthy()
  })
  it("should not allow Firefox 61", () => {
    expect(verifyBrowserSupport("Firefox", "61.0")).toBeFalsy()
  })
  it("should allow Chrome 62", () => {
    expect(verifyBrowserSupport("Chrome", "69.0.4280.141")).toBeTruthy()
  })
  it("should not allow Chrome 61", () => {
    expect(verifyBrowserSupport("Chrome", "68.0.4280.141")).toBeFalsy()
  })
  it("should allow Safari 12", () => {
    expect(verifyBrowserSupport("Safari", "12.0")).toBeTruthy()
  })
  it("should not allow Safari 11", () => {
    expect(verifyBrowserSupport("Safari", "11.0")).toBeFalsy()
  })
  it("should not allow Internet Explorer", () => {
    expect(verifyBrowserSupport("Internet Explorer", "11.0")).toBeFalsy()
  })
})
