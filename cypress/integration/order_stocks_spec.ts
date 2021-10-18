const screenWidths = [375, 768, 1280]

describe("ordering stocks", () => {
  it("should add strains to cart, fill out order form and successfully submit", () => {
    cy.visit("/")
    cy.findByText(/Genomic library pools/)
    cy.percySnapshot("DSC homepage", { widths: screenWidths })

    cy.log("Navigate to strain catalog")
    cy.findByTestId(/Strain Catalog/i).click()
    cy.location("pathname").should("eq", "/stockcenter/strains")
    cy.findByText(/DBS0351367/)

    cy.log("Navigate to details page")
    cy.findByRole("link", { name: /HL501\/X55/ }).click()
    cy.location("pathname").should("eq", "/stockcenter/strains/DBS0351365")
    cy.contains(/DL66/)
    cy.percySnapshot("Strain details page", { widths: screenWidths })

    cy.log("Add two of this item to cart")
    cy.findByRole("button", { name: /Qty 1/i }).click()
    cy.findByRole("option", { name: "2" }).click()
    cy.findByRole("button", { name: /Add to Cart/i }).click()
    cy.contains(/DBS0351365/)
    cy.percySnapshot("Add to cart popup", { widths: screenWidths })

    cy.log("Go to cart from popup")
    cy.findByText(/Added to Cart/)
    cy.findByRole("button", { name: /View cart/i }).click()
    cy.percySnapshot("Shopping cart page", { widths: screenWidths })

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
    cy.percySnapshot("Order form shipping details page", {
      widths: screenWidths,
    })
    cy.findByRole("button", { name: /Continue/i }).click()

    cy.log("Fill out payment information")
    cy.findByRole("checkbox").click()
    cy.findByRole("radio", { name: /Credit Card/i }).click()
    cy.percySnapshot("Order form payment details page", {
      widths: screenWidths,
    })
    cy.findByRole("button", { name: /Continue/i }).click()

    cy.log("Verify and submit order")
    cy.findByText(/Order Summary/)
    cy.findAllByText(/Art Vandelay/)
    cy.findByText(/Sending prepaid shipping label/i)
    cy.findByText(/Credit/i)
    cy.percySnapshot("Order form submit page", {
      widths: screenWidths,
    })
    cy.findByRole("button", { name: /Submit/i }).click()

    cy.log("Verify order summary")
    cy.location("pathname").should("eq", "/stockcenter/order/submitted")
    cy.findByText(/Thank you for your order/)
    cy.findByText(/Order ID: .+?/)
    cy.frameLoaded()
    // need to wait for PDF to render
    // eslint-disable-next-line
    cy.wait(10000)
    cy.percySnapshot("Order form summary page", {
      widths: screenWidths,
    })
  })
})

// necessary to prevent block-scoped var typescript warning
export {}
