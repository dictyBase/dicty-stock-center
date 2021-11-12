const screenWidths = [375, 768, 1280]

// TODO: Uncomment cy.percySnapshot(...) after resolution from https://github.com/percy/percy-cypress/issues/430
describe("DSC snapshots", () => {
  it("visits the order information page", () => {
    cy.visit("/information/order")
    cy.findByText("Ordering Information")
    // cy.percySnapshot("Order information page", {
    //   widths: screenWidths,
    // })
  })
  it("visits a strain details page with phenotypes", () => {
    cy.visit("/strains/DBS0351367")
    cy.findByText("Extrachromosomal")
    // cy.percySnapshot("Strain details with phenotypes", {
    //   widths: screenWidths,
    // })
  })
  it("visits a plasmid details page", () => {
    cy.visit("/plasmids/DBP0001070")
    cy.findByText(
      "overexpression of fAR1 with YFP tag; parental vector: pDV-CYFP, dictyBase genes: far1, plasmid resistance: amp",
    )
    // cy.percySnapshot("Plasmid details", {
    //   widths: screenWidths,
    // })
  })
})
