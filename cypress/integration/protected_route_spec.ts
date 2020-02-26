describe("visiting protected MyDSC route", () => {
  it("redirects to login page if unauthorized", () => {
    cy.visit("/mydsc")
    cy.location("pathname").should("eq", "/stockcenter/login")
  })
})
