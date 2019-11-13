describe("DSC snapshots", () => {
  it("visits the DSC homepage", () => {
    cy.visit("/")
    cy.contains("Strain & Plasmid Availability")
    cy.percySnapshot("DSC homepage", { widths: [360, 768, 1024] })
  })
  it("visits the order information page", () => {
    cy.visit("/information/order")
    cy.percySnapshot("order information page", { widths: [360, 768, 1024] })
  })
  it("visits the strain catalog", () => {
    cy.visit("/strains")
    cy.contains("DBS0351367")
    cy.percySnapshot("strain catalog", {
      widths: [360, 768, 1024],
    })
  })
  it("visits a strain details page", () => {
    cy.visit("/strains/DBS0351367")
    cy.contains("Extrachromosomal")
    cy.percySnapshot("strain details", {
      widths: [360, 768, 1024],
    })
  })
  it("visits the plasmid catalog", () => {
    cy.visit("/plasmids")
    cy.contains("DBP0001070")
    cy.percySnapshot("plasmid catalog", {
      widths: [360, 768, 1024],
    })
  })
  it("visits a plasmid details page", () => {
    cy.visit("/plasmids/DBP0001070")
    cy.contains("overexpression")
    cy.percySnapshot("plasmid details", {
      widths: [360, 768, 1024],
    })
  })
})
