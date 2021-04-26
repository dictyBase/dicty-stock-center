const screenWidths = [375, 768, 1280]

describe("DSC snapshots", () => {
  it("visits the DSC homepage", () => {
    cy.visit("/")
    cy.findByText(/Genomic library pools/)
    cy.percySnapshot("DSC homepage", { widths: screenWidths })
  })
  it("visits the order information page", () => {
    cy.visit("/information/order")
    cy.findByText("Ordering Information")
    cy.percySnapshot("order information page", {
      widths: screenWidths,
    })
  })
  it("visits a strain details page", () => {
    cy.visit("/strains/DBS0351367")
    cy.findByText("Extrachromosomal")
    cy.percySnapshot("strain details", {
      widths: screenWidths,
    })
  })
  it("visits a plasmid details page", () => {
    cy.visit("/plasmids/DBP0001070")
    cy.findByText(
      "overexpression of fAR1 with YFP tag; parental vector: pDV-CYFP, dictyBase genes: far1, plasmid resistance: amp",
    )
    cy.percySnapshot("plasmid details", {
      widths: screenWidths,
    })
  })
})
