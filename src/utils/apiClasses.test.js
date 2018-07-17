import { JsonAPI, AuthAPI } from "./apiClasses"

const authenticatedUser = {
  token: "faketoken",
  isAuthenticated: true,
  data: {
    id: "9",
    attributes: {
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@fakeemail.com",
      organization: "Northwestern University",
      group_name: "n/a",
      first_address: "750 N Lake Shore Drive",
      second_address: "#11",
      city: "Chicago",
      state: "IL",
      zipcode: "60611",
      country: "USA",
      phone: "n/a",
      is_active: true,
      created_at: "2018-07-16T22:58:10.407Z",
      updated_at: "2018-07-16T22:58:10.407Z",
    },
    relationships: {
      roles: {
        links: {
          self: "string",
        },
      },
    },
  },
}

describe("API Classes", () => {
  describe("JsonAPI class", () => {
    let instance = new JsonAPI(authenticatedUser)

    it("creates a new JsonAPI instance", () => {
      expect(typeof instance, "object")
    })

    it("can get attributes", () => {
      const attr = instance.getAttributes()
      expect(attr).toBe(authenticatedUser.data.attributes)
    })

    it("can get id", () => {
      const id = instance.getId()
      expect(id).toBe(authenticatedUser.data.id)
    })

    it("can get relationships", () => {
      const relationships = instance.getRelationships()
      expect(relationships).toBe(authenticatedUser.data.relationships)
    })
  })

  describe("AuthAPI class", () => {
    let instance = new AuthAPI(authenticatedUser)

    it("creates a new AuthAPI instance", () => {
      expect(typeof instance, "object")
    })

    it("checks if authenticated", () => {
      const authenticated = instance.isAuthenticated()
      expect(authenticated).toBe(authenticatedUser.isAuthenticated)
    })

    it("can get token", () => {
      const token = instance.getToken()
      expect(token).toBe(authenticatedUser.token)
    })

    it("can get provider", () => {
      const provider = instance.getProvider()
      expect(provider).toBe(authenticatedUser.provider)
    })

    it("can get user", () => {
      const user = instance.getUser()
      expect(user).toBe(authenticatedUser.user)
    })
  })

  describe("AuthenticatedUser class", () => {
    // tests go here
  })

  describe("PermissionAPI class", () => {
    // tests go here
  })

  describe("RoleAPI class", () => {
    // tests go here
  })

  describe("ContentAPI class", () => {
    // tests go here
  })
})
