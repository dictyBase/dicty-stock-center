# Shape of the state (logged out)

```JavaScript
{
  auth: {
      isFetching: false,
      isAuthenticated: false,
      provider: null,
      token: null,
      user: null
  },
  page: {
      content: null,
      isFetching: false,
      [slugName]: {
          data: {
              type: "contents",
              id: "9",
              attributes: {
                  name: "intro",
                  slug: "dsc-intro",
                  created_by: "999999",
                  updated_by: "999999",
                  created_at: "2018-02-12T19:32:42.184656Z",
                  updated_at: "2018-02-12T19:32:42.184656Z",
                  content: "draftjs block contents",
                  namespace: "dsc"
              },
              links: {
                  self: "http://"
              }
          },
          links: {
              self: "http://"
          }
      }
  },
  cart: {
    addedItems: [
      {
        id: "DBS123456",
        name: "test1",
        fee: "$30.00"
      }
    ]
  },
  footer: {
    isFetching: false,
    links: [
      [
        header: {},
        items: []
      ]
    ]
  },
  navbar: {
    isFetching: false,
    links: [
      {
        dropdown: true,
        title: "Tools",
        items: []
      }
    ]
  },
  router: {
    location: {
      pathname: "/strains",
      search: "",
      hash: "",
      key: "j884t3",
    }
  }
}
```

# Shape of the state (logged in)

```JavaScript
{
  auth: {
      isFetching: false,
      isAuthenticated: true,
      provider: "google",
      token: "largeJWTstring",
      user: {
          identity: {
              data: {
                  type: "identities",
                  id: "id",
                  attributes: {
                      identifier: "email@email.com",
                      provider: "google",
                      user_id: "99999",
                      created_at: "2018-02-12T19:32:42.184656Z",
                      updated_at: "2018-02-12T19:32:42.184656Z"
                  }
              },
              links: {
                  self: "/identities/99999",
                  related: "/users/99999"
              }
          },
          data: {
              type: "users",
              id: "99999",
              attributes: {
                  first_name: "Art",
                  last_name: "Vandelay",
                  email: "artvandelay@gmail.com",
                  organization: "Northwestern University",
                  group_name: "Northwestern University",
                  first_address: "750 N Lake Shore Drive",
                  second_address: "Floor 11",
                  city: "Chicago",
                  state: "IL",
                  zipcode: "60611",
                  country: "USA",
                  is_active: true,
                  created_at: "2018-04-30T21:00:27.127278Z",
                  updated_at: "2018-04-30T21:00:27.127278Z"
              },
              links: {
                  self: "/users/999999"
              }
          },
          roles: {
              data: {
                  type: "roles",
                  id: "1",
                  attributes: {
                      role: "superuser",
                      description: "Total power!",
                      created_at: "2018-04-30T21:11:53.259Z",
                      updated_at: "2018-04-30T21:11:53.259Z"
                  },
                  links: {
                      self: "/roles/1"
                  },
                  relationships: {
                      permissions: {
                          links: {
                              self: "/roles/1/relationships/permissions",
                              related: "/roles/1/permissions"
                          }
                      },
                      users: {
                          links: {
                              self: "/roles/1/relationships/users",
                              related: "/roles/1/users"
                          }
                      }
                  }
              },
          },
          permissions: {
              data: [
                  {
                      type: "permissions",
                      id: "1",
                      attributes: {
                          permission: "read",
                          description: "read only",
                          created_at: "2018-04-30T21:11:53.259Z",
                          updated_at: "2018-04-30T21:11:53.259Z",
                          resource: "dsccontent"
                      }
                  },
                  {
                      type: "permissions",
                      id: "2",
                      attributes: {
                          permission: "write",
                          description: "write only",
                          created_at: "2018-04-30T21:11:53.259Z",
                          updated_at: "2018-04-30T21:11:53.259Z",
                          resource: "dsccontent"
                      }
                  },
                  {
                      type: "permissions",
                      id: "3",
                      attributes: {
                          permission: "admin",
                          description: "total admin privileges",
                          created_at: "2018-04-30T21:11:53.259Z",
                          updated_at: "2018-04-30T21:11:53.259Z",
                          resource: "dsccontent"
                      }
                  },
              ]
          }
      }
  },
  page: {
      content: null,
      isFetching: false,
      [slugName]: {
          data: {
              type: "contents",
              id: "9",
              attributes: {
                  name: "intro",
                  slug: "dsc-intro",
                  created_by: "999999",
                  updated_by: "999999",
                  created_at: "2018-02-12T19:32:42.184656Z",
                  updated_at: "2018-02-12T19:32:42.184656Z",
                  content: "draftjs block contents",
                  namespace: "dsc"
              },
              links: {
                  self: "http://"
              }
          },
          links: {
              self: "http://"
          }
      }
  },
    cart: {
    addedItems: [
      {
        id: "DBS123456",
        name: "test1",
        fee: "$30.00"
      }
    ]
  },
  footer: {
    isFetching: false,
    links: [
      [
        header: {},
        items: []
      ]
    ]
  },
  navbar: {
    isFetching: false,
    links: [
      {
        dropdown: true,
        title: "Tools",
        items: []
      }
    ]
  },
  router: {
    location: {
      pathname: "/strains",
      search: "",
      hash: "",
      key: "j884t3",
    }
  }
}
```
