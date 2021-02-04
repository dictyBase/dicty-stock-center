/// <reference path="../support/index.d.ts" />

describe("login", () => {
  it("should successfully log into our app", () => {
    cy.visit("/login")
  })
})
