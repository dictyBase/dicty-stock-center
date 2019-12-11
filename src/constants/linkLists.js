const downloadLinks = [
  {
    name: "Phenotype Ontology",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_phenotypes.obo",
    routerAware: false,
  },
  {
    name: "Strain Characteristics",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_strain_characteristics.obo",
    routerAware: false,
  },
  {
    name: "Mutagenesis Methods",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_mutagenesis_method.obo",
    routerAware: false,
  },
  {
    name: "Plasmid Keywords",
    to:
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/ontologies/dicty_plasmid_keywords.obo",
    routerAware: false,
  },
]

const infoLinks = [
  { name: "Order Information", to: "/information/order", routerAware: true },
  {
    name: "Payment Information",
    to: "/information/payment",
    routerAware: true,
  },
  {
    name: "Deposit Information",
    to: "/information/deposit",
    routerAware: true,
  },
]

const materialsLinks = [
  { name: "Strain Catalog", to: "/strains", routerAware: true },
  { name: "Plasmid Catalog", to: "/plasmids", routerAware: true },
  { name: "Bacterial Strains", to: "", routerAware: true },
  {
    name: "Additional Materials",
    to: "/information/additional-materials",
    routerAware: true,
  },
]

const miscLinks = [
  { name: "Contact the DSC", to: "/contact", routerAware: true },
  { name: "DSC FAQ", to: "/information/faq", routerAware: true },
  {
    name: "Nomenclature Guide",
    to: "/information/nomenclature-guidelines",
    routerAware: false,
  },
  {
    name: "Other Stock Centers",
    to: "/information/other-stock-centers",
    routerAware: true,
  },
]

export { downloadLinks, infoLinks, materialsLinks, miscLinks }
