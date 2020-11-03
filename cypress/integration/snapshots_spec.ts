const screenWidths = [375, 768, 1280]

describe("DSC snapshots", () => {
  it("visits the DSC homepage", () => {
    cy.visit("/")
    cy.contains("Strain & Plasmid Availability")
    cy.percySnapshot("DSC homepage", { widths: screenWidths })
  })
  it("visits the order information page", () => {
    cy.visit("/information/order")
    cy.contains("Ordering Information")
    cy.percySnapshot("order information page", {
      widths: screenWidths,
    })
  })
  // it("visits the strain catalog", () => {
  //   cy.visit("/strains")
  //   cy.contains("HL206")
  //   cy.percySnapshot("strain catalog", {
  //     widths: screenWidths,
  //   })
  // })
  it("visits a strain details page", () => {
    cy.visit("/strains/DBS0351367")
    cy.contains("Extrachromosomal")
    cy.percySnapshot("strain details", {
      widths: screenWidths,
    })
  })
  // it("visits the plasmid catalog", () => {
  //   cy.visit("/plasmids")
  //   cy.contains("pSigK")
  //   cy.percySnapshot("plasmid catalog", {
  //     widths: screenWidths,
  //   })
  // })
  it("visits a plasmid details page", () => {
    cy.visit("/plasmids/DBP0001070")
    cy.contains("overexpression")
    cy.percySnapshot("plasmid details", {
      widths: screenWidths,
    })
  })
  it("visits a phenotype search results page", () => {
    cy.visit("/phenotypes/abolished+protein+phosphorylation")
    cy.contains("gskA-")
    cy.percySnapshot("phenotype search results", {
      widths: screenWidths,
    })
  })
})
