describe("ordering stocks", () => {
  it("should add strains to cart, fill out order form and successfully submit", () => {
    cy.visit("/")

    cy.log("Navigate to strain catalog")
    // have to force click because of MUI list element "not visible"
    cy.findByRole("link", { name: /Strain Catalog/ }).click({ force: true })
    cy.location("pathname").should("eq", "/stockcenter/strains")
    cy.findByText(/DBS0351367/)

    cy.log("Navigate to details page")
    cy.findByRole("link", { name: /HL501\/X55/ }).click()
    cy.location("pathname").should("eq", "/stockcenter/strains/DBS0351365")

    cy.log("Add two of this item to cart")
    cy.findByRole("button", { name: /Qty 1/i }).click()
    cy.findByRole("option", { name: "2" }).click()
    cy.findByRole("button", { name: /Add to Cart/i }).click()

    cy.log("Go to cart from popup")
    cy.findByText(/Added to Cart/)
    cy.findByRole("button", { name: /View cart/i }).click()

    cy.log("Review cart and navigate to checkout page")
    cy.location("pathname").should("eq", "/stockcenter/cart")
    cy.contains("$60.00")
    cy.findByText(/HL501\/X55/)
    cy.findByRole("button", { name: "Proceed to Checkout" }).click()

    cy.log("Fill out shipping address")
    cy.location("pathname").should("eq", "/stockcenter/order/checkout")
    cy.findByLabelText("firstName").type("Art")
    cy.findByLabelText("lastName").type("Vandelay")
    cy.findByLabelText("email").type("art@vandelayindustries.com")
    cy.findByLabelText("organization").type("Vandelay Industries")
    cy.findByLabelText("lab").type("dictyBase")
    cy.findByLabelText("phone").type("867-5309")
    cy.findByLabelText("address1").type("123 Fake St")
    cy.findByLabelText("city").type("Chicago")
    cy.findByLabelText("state").type("IL")
    cy.findByLabelText("country").type("United States")
    cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click()
    cy.findByLabelText("zip").type("60601")

    cy.log("Select shipping method")
    cy.findByRole("radio", { name: /Send prepaid shipping label/ }).click()
    cy.findByRole("button", { name: /Continue/i }).click()

    cy.log("Fill out payment information")
    cy.findByRole("checkbox").click()
    cy.findByRole("radio", { name: /Credit Card/i }).click()
    cy.findByRole("button", { name: /Continue/i }).click()

    cy.log("Verify and submit order")
    cy.findByText(/Order Summary/)
    cy.findAllByText(/Art Vandelay/)
    cy.findByText(/Sending prepaid shipping label/i)
    cy.findByText(/Credit/i)
    cy.findByRole("button", { name: /Submit/i }).click()

    cy.log("Verify order summary")
    cy.location("pathname").should("eq", "/stockcenter/order/submitted")
    cy.findByText(/Thank you for your order/)
    cy.findByText(/Order ID: 8888888/)
  })
})
