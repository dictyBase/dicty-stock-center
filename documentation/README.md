# Dicty Stock Center

## Table of Contents

- [Readme](/README.md)
- Redux
  - [Shape of the state](/docs/redux/state.md)
- [Navigational flow](./navigational-flow.md)
- [Component wireframe](./component-wireframe.md)
- [Authentication/authorization](./auth.md)

## Stock Components Outline

**/strains**

StrainCatalogContainer

- StockDetailsHeader
- StrainDetailsList

**/strains/:id**

StrainDetailsContainer

- StockDetailsHeader
- PhenotypeTable _(if phenotypes in data)_
- StrainDetailsList
- ShoppingButtons

**/plasmids**

PlasmidCatalogContainer

- StockDetailsHeader

**_/plasmids/:id_**

PlasmidDetailsContainer

- StockDetailsHeader
- PlasmidDetailsList
- ShoppingButtons
