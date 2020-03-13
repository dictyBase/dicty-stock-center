import addressFieldsGenerator from "./addressFields"

describe("OrderForm/utils/addressFieldsGenerator", () => {
  describe("function behavior", () => {
    it("changes names correctly for payment page", () => {
      expect(addressFieldsGenerator("payment")).toContainEqual({
        field: "First Name",
        name: "payerFirstName",
        required: true,
      })
    })
    it("keeps standard names for shipping page", () => {
      expect(addressFieldsGenerator("shipping")).toContainEqual({
        field: "First Name",
        name: "firstName",
        required: true,
      })
    })
  })
})
