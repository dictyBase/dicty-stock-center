describe("browsing catalogs", () => {
  xit("loads all strains", () => {
    cy.visit("/strains")
    cy.location("pathname").should("eq", "/stockcenter/strains")
    cy.findByText(/DBS0351367/)
  })

  xit("loads all plasmids", () => {
    cy.visit("/plasmids")
    cy.location("pathname").should("eq", "/stockcenter/plasmids")
    cy.findByText(/DBP0001070/)
  })

  it("should add and remove items from cart", () => {
    cy.visit("/strains")
    cy.location("pathname").should("eq", "/stockcenter/strains")
    cy.findByText(/DBS0351367/)

    cy.log("Add first item to cart")
    cy.findByTestId(/DBS0351365/).trigger("mouseover")
    cy.findByRole("button", { name: /Add to shopping cart/i }).click()
    cy.findByRole("button", { name: /Continue Shopping/i }).click()
    cy.findByRole("link", { name: /shopping cart/i }).contains("1")

    cy.log("Add second item to cart")
    cy.findByTestId(/DBS0351363/).trigger("mouseover")
    cy.findByRole("button", { name: /Add to shopping cart/i }).click()
    cy.findByRole("button", { name: /Continue Shopping/i }).click()
    cy.findByRole("link", { name: /shopping cart/i }).contains("2")

    cy.log("Remove first item from cart")
    cy.findByTestId(/DBS0351365/).trigger("mouseover")
    cy.findByRole("button", { name: /Remove from cart/i }).click()
    cy.findByRole("link", { name: /shopping cart/i }).contains("1")

    cy.log("Remove second item from cart")
    cy.findByTestId(/DBS0351363/).trigger("mouseover")
    cy.findByRole("button", { name: /Remove from cart/i }).click()
    cy.findByRole("link", { name: /shopping cart/i }).contains("0")
  })
})
