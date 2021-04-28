describe("browsing catalogs", () => {
  it("loads all strains", () => {
    cy.visit("/strains")
    cy.location("pathname").should("eq", "/stockcenter/strains")
    cy.contains("DBS0351367")
  })

  it("loads all plasmids", () => {
    cy.visit("/plasmids")
    cy.location("pathname").should("eq", "/stockcenter/plasmids")
    cy.contains("DBP0001070")
  })
})
