# Shape of the state

```JavaScript
{
    auth: {
        isFetching: false,
        isAuthenticated: false,
        provider: null,
        token: null,
        user: null
    },
    routing: {
        location: {
            pathname: "order/form",
            search: "",
            hash: "",
            state: null,
            action: "REPLACE",
            key: "mb4dta"
        },
        query: {},
        $searchBase: {}
    },
    form: {
        shipping: {
            asyncValidating: false,
            error: undefined,
            initialized: false,
            submitting: false,
            submitFailed: false,
            firstName: {
                visited: true,
                value: "John",
                touched: true
            },
            lastName: {..},
            email: {..}

            // other form fields
        },
        payment: {
            asyncValidating: false,
            error: undefined,
            initialized: false,
            submitting: false,
            submitFailed: false,
            firstName: {
                visited: true,
                value: "John",
                touched: true
            },
            lastName: {..},
            email: {..}

            // other form fields
        },
        editShipping: {
            asyncValidating: false,
            error: undefined,
            initialized: false,
            ...
        },
        editPayment: {
            asyncValidating: false,
            error: undefined,
            initialized: false,
            ...
        }
    },
    order: {
        initialized: true,
        consumer: {type: "user", id: "john@gmail.com", firstName: "John", ...},
        shipping: {account: "Fedex" accountNum: "123", comments: ""},
        payer: {type: "user", id: "sara@gmail.com", firstName: "Sara", ...},
        payment: {method: "Credit card", poNum: ""}
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
    stockCenter: {
        availability: {
            isFetching: false
        },
        strainCatalog: {
            isFetching: false,
            data: [ {type: "strain", id: "DBS0252577", attributes: ...}, ...],
            links: {
                self: "/stocks?page[number]=1&page[size]=10",
                first: "/stocks?page[number]=1&page[size]=10",
                next: "/stocks?page[number]=2&page[size]=10",
                last: "/stocks?page[number]=13&page[size]=10"
            },
            meta: {
                pagination: {records: 126, total: 13, size: 10, number: 1}
            }
        },
        strain: {
            isFetching: false,
            links: {self: "/stocks/DBS0236225"},
            data: {type: "strain", id: "DBS0252577", attributes: ...}
        },
        plasmidCatalog: {
            isFetching: false,
            data: [ {type: "plasmid", id: "DBS0252577", attributes: ...}, ...],
            links: {
                self: "/stocks?page[number]=1&page[size]=10",
                first: "/stocks?page[number]=1&page[size]=10",
                next: "/stocks?page[number]=2&page[size]=10",
                last: "/stocks?page[number]=13&page[size]=10"
            },
            meta: {
                pagination: {records: 126, total: 13, size: 10, number: 1}
            }
        },
        plasmid: {
            isFetching: false,
            links: {self: "/stocks/DBS0236225"},
            data: {type: "plasmid", id: "DBS0252577", attributes: ...}
        }
    }
}
```
