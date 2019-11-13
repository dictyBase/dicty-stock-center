describe("DSC snapshots", () => {
  it("visits the DSC homepage", () => {
    cy.visit("/")
    cy.contains("Strain & Plasmid Availability")
    cy.percySnapshot("DSC homepage", { widths: [300, 600, 1000] })
  })
  // it("visits the DSC order information page", function() {
  //   cy.visit("https://eric.dictybase.dev/stockcenter/information/order")
  // })
  // it("visits the DSC login page", function() {
  //   cy.visit("https://eric.dictybase.dev/stockcenter/login")
  // })
})
