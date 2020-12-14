## DSC Context

This document lists the shape of the state for each context provider.

### Cart

```
addedItems: [
  {
    id: string,
    name: string,
    summary: string,
    type: string,
    fee: string,
  }
],
maxItemsInCart: boolean, // check for ensuring no more than 12 items in cart
```

### Catalog

```
queryVariables: {
  cursor: string,
  filter: string,
},
checkedItems: [
  {
    id: string,
    name: string,
    summary: string,
  }
]
```
