/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    percySnapshot(value: string, options?: any): void
  }
}
