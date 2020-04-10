```jsx
const leftDropdownItems = [
  {
    name: "All Strains",
    value: "",
  },
  {
    name: "GWDI Strains",
    value: "",
  },
  {
    name: "Available Strains",
    value: "",
  },
  {
    name: "Unavailable Strains",
    value: "",
  },
]
const rightDropdownItems = [
  {
    name: "ID",
    value: "id",
  },
  {
    name: "Descriptor",
    value: "label",
  },
  {
    name: "Summary",
    value: "summary",
  },
]
;<CatalogAppBar leftDropdownItems={leftDropdownItems} rightDropdownItems={rightDropdownItems} />
```
