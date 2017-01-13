# Shape of the state

```javscript
{
    auth: {
        isFetching: false,
        isAuthenticated: false
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
    stockCenter: {
        availability: {
            isFetching: false
        },
        strainCatalog: {
            isFetching: false,
            data: [ {type: "stocks", id: "DBS0252577", attributes: ...}, ...],
            links: {
                self:"/stocks?page[number]=1&page[size]=10",
                first:"/stocks?page[number]=1&page[size]=10",
                next:"/stocks?page[number]=2&page[size]=10",
                last:"/stocks?page[number]=13&page[size]=10"
            },
            meta: {
                pagination: {records:126, total:13, size:10, number:1}
            }
        },
        strain: {
            isFetching: false,
            links: {self:"/stocks/DBS0236225"},
            data: {type: "stocks", id: "DBS0252577", attributes: ...}
        }
    }
}
```
