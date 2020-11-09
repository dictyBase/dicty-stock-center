const downloadLinks = [
  {
    name: "Phenotype Ontology",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_phenotypes.obo",
    routerAware: false,
    newWindow: true,
  },
  {
    name: "Strain Characteristics",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_strain_characteristics.obo",
    routerAware: false,
    newWindow: true,
  },
  {
    name: "Mutagenesis Methods",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_mutagenesis_method.obo",
    routerAware: false,
    newWindow: true,
  },
  {
    name: "Plasmid Keywords",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_plasmid_keywords.obo",
    routerAware: false,
    newWindow: true,
  },
]

const infoLinks = [
  {
    name: "Order Information",
    to: "/information/order",
    routerAware: true,
    newWindow: false,
  },
  {
    name: "Payment Information",
    to: "/information/payment",
    routerAware: true,
    newWindow: false,
  },
  {
    name: "Deposit Information",
    to: "/information/deposit",
    routerAware: true,
    newWindow: false,
  },
]

const materialsLinks = [
  {
    name: "Strain Catalog",
    to: "/strains",
    routerAware: true,
    newWindow: false,
  },
  {
    name: "Plasmid Catalog",
    to: "/plasmids",
    routerAware: true,
    newWindow: false,
  },
  {
    name: "Bacterial Strains",
    to: "/strains?search=bacterial",
    routerAware: true,
    newWindow: false,
  },
  {
    name: "Additional Materials",
    to: "/information/additional-materials",
    routerAware: true,
    newWindow: false,
  },
]

const miscLinks = [
  {
    name: "Contact the DSC",
    to: "/contact",
    routerAware: true,
    newWindow: false,
  },
  {
    name: "DSC FAQ",
    to: "/information/faq",
    routerAware: true,
    newWindow: false,
  },
  {
    name: "Nomenclature Guide",
    to: "/information/nomenclature-guidelines",
    routerAware: true,
    newWindow: false,
  },
  {
    name: "Other Stock Centers",
    to: "/information/other-stock-centers",
    routerAware: true,
    newWindow: false,
  },
]

export { downloadLinks, infoLinks, materialsLinks, miscLinks }
