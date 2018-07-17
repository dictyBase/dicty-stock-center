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

    describe("getAttributes()", () => {
      it("can get attributes", () => {
        const attr = instance.getAttributes()
        expect(attr).toBe(userJson.data.attributes)
      })
    })

    describe("getId()", () => {
      it("can get id", () => {
        const id = instance.getId()
        expect(id).toBe("9")
      })
    })

    describe("getRelationships()", () => {
      it("can get relationships", () => {
        const relationships = instance.getRelationships()
        expect(relationships).toBe(userJson.data.relationships)
      })
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

    describe("isAuthenticated()", () => {
      it("checks if authenticated", () => {
        const authenticated = instance.isAuthenticated()
        expect(authenticated).toBe(true)
      })
    })

    describe("getToken()", () => {
      it("can get token", () => {
        const token = instance.getToken()
        expect(token).toBe(authenticatedUser.token)
      })
    })

    describe("getProvider()", () => {
      it("can get provider", () => {
        const provider = instance.getProvider()
        expect(provider).toBe("google")
      })
    })

    describe("getUser()", () => {
      it("can get user", () => {
        const user = instance.getUser()
        expect(user).toBe(authenticatedUser.user)
      })
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

    describe("getFullName()", () => {
      it("can get user's full name", () => {
        const name = instance.getFullName()
        expect(name).toBe("John Doe")
      })
    })

    describe("getRoles()", () => {
      it("can get roles", () => {
        const roles = instance.getRoles()
        expect(roles).toBe("Superuser")
      })
    })

    describe("canOverwrite()", () => {
      it("can overwrite as superuser and different id", () => {
        const endUser = instance.canOverwrite("0")
        expect(endUser).toBe(true)
      })

      it("can overwrite as same id but not superuser", () => {
        const endUser = regInstance.canOverwrite("99")
        expect(endUser).toBe(true)
      })
    })
  })

  describe("PermissionAPI class", () => {
    const superuser = {
      data: {
        id: "9",
        attributes: {
          first_name: "John",
          last_name: "Doe",
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
            resource: "dsccontent",
          },
        },
      ],
    }

    const noPerms = {
      data: {
        id: "9",
        attributes: {
          first_name: "John",
          last_name: "Doe",
        },
      },
      roles: [],
    }

    const emptyPerms = {
      data: {
        id: "9",
        attributes: {
          first_name: "John",
          last_name: "Doe",
        },
      },
      roles: [],
      permissions: [],
    }

    let instance = new PermissionAPI(superuser)
    let noPermsInstance = new PermissionAPI(noPerms)
    let emptyPermsInstance = new PermissionAPI(emptyPerms)

    it("creates a new PermissionAPI instance", () => {
      expect(typeof instance, "object")
    })

    describe("getResources()", () => {
      it("can get resources", () => {
        const list = instance.getResources()
        expect(list).toEqual(["dictybase", "genome", "dsccontent"])
      })
    })

    describe("getPermissions()", () => {
      it("can get permissions", () => {
        const list = instance.getPermissions()
        expect(list).toEqual(["admin", "read", "write"])
      })
    })

    describe("verifyPermissions()", () => {
      it("can verify permissions", () => {
        const list = instance.verifyPermissions("write", "dsccontent")
        expect(list).toBe(true)
      })

      it("returns false if no permissions exist", () => {
        const list = noPermsInstance.verifyPermissions("write", "dsccontent")
        expect(list).toBe(false)
      })

      it("returns false if no permissions exist", () => {
        const list = emptyPermsInstance.verifyPermissions("write", "dsccontent")
        expect(list).toBe(false)
      })
    })
  })

  describe("RoleAPI class", () => {
    const regularUser = {
      data: {
        id: "9",
        attributes: {
          first_name: "John",
          last_name: "Doe",
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

    const userNoRoles = {
      data: {
        id: "9",
        attributes: {
          first_name: "John",
          last_name: "Doe",
        },
      },
    }

    let instance = new RoleAPI(regularUser)
    let noRolesInstance = new RoleAPI(userNoRoles)

    it("creates a new RoleAPI instance", () => {
      expect(typeof instance, "object")
    })

    describe("getRoles()", () => {
      it("can get roles", () => {
        const list = instance.getRoles()
        expect(list).toEqual(["user"])
      })

      it("should return null if no roles exist", () => {
        const list = noRolesInstance.getRoles()
        expect(list).toEqual(null)
      })
    })

    describe("checkRoles()", () => {
      it("should not be superuser", () => {
        const list = instance.checkRoles("superuser")
        expect(list).toBe(false)
      })

      it("should be user", () => {
        const list = instance.checkRoles("user")
        expect(list).toBe(true)
      })
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

    const noData = {
      something: "no data",
    }

    let instance = new ContentAPI(content)
    let noDataInstance = new ContentAPI(noData)

    it("creates a new ContentAPI instance", () => {
      expect(typeof instance, "object")
    })

    describe("getUser()", () => {
      it("can get user's ID", () => {
        const name = instance.getUser()
        expect(name).toBe("99")
      })

      it("returns null if no data", () => {
        const name = noDataInstance.getUser()
        expect(name).toBe(null)
      })
    })
  })
})
