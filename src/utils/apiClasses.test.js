import { JsonAPI, AuthAPI, AuthenticatedUser, ContentAPI } from "./apiClasses"

describe("API Classes", () => {
  describe("JsonAPI class", () => {
    const userJson = {
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

    let instance = new JsonAPI(userJson)

    it("creates a new JsonAPI instance", () => {
      expect(typeof instance, "object")
    })

    it("can get attributes", () => {
      const attr = instance.getAttributes()
      expect(attr).toBe(userJson.data.attributes)
    })

    it("can get id", () => {
      const id = instance.getId()
      expect(id).toBe("9")
    })

    it("can get relationships", () => {
      const relationships = instance.getRelationships()
      expect(relationships).toBe(userJson.data.relationships)
    })
  })

  describe("AuthAPI class", () => {
    const authenticatedUser = {
      token: "faketoken",
      isAuthenticated: true,
      provider: "google",
      user: {
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
      },
    }

    let instance = new AuthAPI(authenticatedUser)

    it("creates a new AuthAPI instance", () => {
      expect(typeof instance, "object")
    })

    it("checks if authenticated", () => {
      const authenticated = instance.isAuthenticated()
      expect(authenticated).toBe(true)
    })

    it("can get token", () => {
      const token = instance.getToken()
      expect(token).toBe(authenticatedUser.token)
    })

    it("can get provider", () => {
      const provider = instance.getProvider()
      expect(provider).toBe("google")
    })

    it("can get user", () => {
      const user = instance.getUser()
      expect(user).toBe(authenticatedUser.user)
    })
  })

  describe("AuthenticatedUser class", () => {
    const superuser = {
      token: "faketoken",
      isAuthenticated: true,
      provider: "google",
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
      roles: {
        type: "roles",
        id: "99",
        attributes: {
          role: "superuser",
          description: "total power",
          created_at: "2018-07-17T00:57:07.502Z",
          updated_at: "2018-07-17T00:57:07.502Z",
        },
      },
    }

    let instance = new AuthenticatedUser(superuser)

    it("creates a new AuthenticatedUser instance", () => {
      expect(typeof instance, "object")
    })

    it("can get user's full name", () => {
      const name = instance.getFullName()
      expect(name).toBe("John Doe")
    })

    // need to list roles as array above

    // it("can get roles", () => {
    //   const roles = instance.getRoles()
    //   expect(roles).toBe("Superuser")
    // })

    // it("can overwrite as superuser", () => {
    //   const endUser = instance.canOverwrite("99")
    //   expect(endUser).toBe(true)
    // })
  })

  describe("PermissionAPI class", () => {
    it("can get resources", () => {
      // test goes here
    })

    it("can get permissions", () => {
      // tests go here
    })

    it("can verify permissions", () => {
      // tests go here
    })
  })

  describe("RoleAPI class", () => {
    it("can get roles", () => {
      // test goes here
    })

    it("can check roles", () => {
      // tests go here
    })
  })

  describe("ContentAPI class", () => {
    const content = {
      data: {
        id: "9",
        attributes: {
          name: "content",
          slug: "information",
          created_by: "99",
          updated_by: "99",
          created_at: "2018-07-17T01:07:20.898Z",
          updated_at: "2018-07-17T01:07:20.898Z",
          content: "fake content",
          namespace: "dictybase",
        },
      },
    }

    let instance = new ContentAPI(content)

    it("creates a new ContentAPI instance", () => {
      expect(typeof instance, "object")
    })

    it("can get user's ID", () => {
      const name = instance.getUser()
      expect(name).toBe("99")
    })
  })
})
