The catalog page components are divided into three sections:

- `common` (all shared catalog components)
- `Plasmids` (specific to plasmids page)
- `Strains` (specific to strains page)

The catalog pages rely on React's [Context](https://reactjs.org/docs/context.html)
with the core logic being found in the `CatalogContext` file. This contains a context
provider and a `useCatalogStore` hook. The context provider is used inside both the
`StrainCatalogWrapper` and `PlasmidCatalogWrapper` components, with individual
components consuming the context via the aforementioned `useCatalogStore` hook.

There is also a separate `Context` provider set up for the `AppBar` components. This
is used for any state necessary for the AppBars on the catalog pages.
