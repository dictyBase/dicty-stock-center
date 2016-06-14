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
    }
}
```