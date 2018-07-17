import {
  JsonAPI,
  AuthAPI,
  AuthenticatedUser,
  PermissionAPI,
  RoleAPI,
  ContentAPI,
} from "./apiClasses"

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
      },
      roles: [
        {
          type: "roles",
          id: "99",
          attributes: {
            role: "superuser",
            description: "total power",
            created_at: "2018-07-17T00:57:07.502Z",
            updated_at: "2018-07-17T00:57:07.502Z",
          },
        },
      ],
    }

    const reguser = {
      token: "faketoken",
      isAuthenticated: true,
      provider: "google",
      data: {
        id: "99",
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
      },
      roles: [
        {
          type: "roles",
          id: "99",
          attributes: {
            role: "user",
            description: "regular user",
            created_at: "2018-07-17T00:57:07.502Z",
            updated_at: "2018-07-17T00:57:07.502Z",
          },
        },
      ],
    }

    let instance = new AuthenticatedUser(superuser)
    let regInstance = new AuthenticatedUser(reguser)

    it("creates a new AuthenticatedUser instance", () => {
      expect(typeof instance, "object")
    })

    it("can get user's full name", () => {
      const name = instance.getFullName()
      expect(name).toBe("John Doe")
    })

    it("can get roles", () => {
      const roles = instance.getRoles()
      expect(roles).toBe("Superuser")
    })

    it("can overwrite as superuser and different id", () => {
      const endUser = instance.canOverwrite("0")
      expect(endUser).toBe(true)
    })

    it("can overwrite as same id but not superuser", () => {
      const endUser = regInstance.canOverwrite("99")
      expect(endUser).toBe(true)
    })
  })

  describe("PermissionAPI class", () => {
    const authenticatedUser = {
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
      },
      roles: [
        {
          type: "roles",
          id: "99",
          attributes: {
            role: "superuser",
            description: "total power",
            created_at: "2018-07-17T00:57:07.502Z",
            updated_at: "2018-07-17T00:57:07.502Z",
          },
        },
      ],
      permissions: [
        {
          type: "permissions",
          id: "1",
          attributes: {
            permission: "admin",
            description: "admin access",
            created_at: "2018-07-17T00:57:07.502Z",
            updated_at: "2018-07-17T00:57:07.502Z",
            resource: "dictybase",
          },
        },
        {
          type: "permissions",
          id: "2",
          attributes: {
            permission: "read",
            description: "read access",
            created_at: "2018-07-17T00:57:07.502Z",
            updated_at: "2018-07-17T00:57:07.502Z",
            resource: "genome",
          },
        },
        {
          type: "permissions",
          id: "3",
          attributes: {
            permission: "write",
            description: "write access",
            created_at: "2018-07-17T00:57:07.502Z",
            updated_at: "2018-07-17T00:57:07.502Z",
            resource: "dictybase",
          },
        },
      ],
    }

    let instance = new PermissionAPI(authenticatedUser)

    it("creates a new PermissionAPI instance", () => {
      expect(typeof instance, "object")
    })

    it("can get resources", () => {
      const list = instance.getResources()
      expect(list).toEqual(["dictybase", "genome", "dictybase"])
    })

    it("can get permissions", () => {
      const list = instance.getPermissions()
      expect(list).toEqual(["admin", "read", "write"])
    })

    it("can verify permissions", () => {
      // tests go here
    })
  })

  describe("RoleAPI class", () => {
    const authenticatedUser = {
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
      },
      roles: [
        {
          type: "roles",
          id: "99",
          attributes: {
            role: "user",
            description: "regular user",
            created_at: "2018-07-17T00:57:07.502Z",
            updated_at: "2018-07-17T00:57:07.502Z",
          },
        },
      ],
      permissions: [
        {
          type: "permissions",
          id: "1",
          attributes: {
            permission: "admin",
            description: "admin access",
            created_at: "2018-07-17T00:57:07.502Z",
            updated_at: "2018-07-17T00:57:07.502Z",
            resource: "dictybase",
          },
        },
      ],
    }

    let instance = new RoleAPI(authenticatedUser)

    it("creates a new RoleAPI instance", () => {
      expect(typeof instance, "object")
    })

    it("can get roles", () => {
      const list = instance.getRoles()
      expect(list).toEqual(["user"])
    })

    it("should not be superuser", () => {
      const list = instance.checkRoles("superuser")
      expect(list).toBe(false)
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
