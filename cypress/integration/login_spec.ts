/// <reference path="../support/index.d.ts" />

describe("login", () => {
  it.skip("should successfully log into our app", () => {
    // cy.visit("/login")
    cy.login()
      .then(resp => resp.body)
      .then(() => {
        window.postMessage(
          {
            query: "xyz",
            provider: "mock",
            url: "kjadbg",
          },
          "http://localhost:3000/login",
        )
      })
      .then(body => {
        // const { access_token, expires_in, id_token } = body
        const auth0State = {
          nonce: "",
          state: "some-random-state",
        }
        // const callbackUrl = `/mock/callback?state=${auth0State.state}&code=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer`
        cy.visit("/login", {
          onBeforeLoad(win) {
            win.document.cookie = "refresh-token=" + JSON.stringify(auth0State)
            win.close = cy.stub()
          },
        })
        cy.visit("/login")
      })
  })
})
