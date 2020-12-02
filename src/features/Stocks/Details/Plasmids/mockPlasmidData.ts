import { PlasmidDetails } from "features/Stocks/Details/types/props"

const availablePlasmid = {
  type: "plasmid",
  summary: "Knockout plasmid for acgA",
  id: "DBP0000385",
  name: "pACG-KO",
  depositor: "Karin Weening (Pauline Schaap)",
  dbxrefs: ["17267449"],
  genes: [{ name: "acgA" }],
  image_map: "http://dictybase.org/data/plasmid/images/385.jpg",
  publications: [{ id: "17267449", doi: "10.1242/dev.02775" }],
  sequence: "",
  keywords: [],
  genbank_accession: "",
  in_stock: true,
} as PlasmidDetails

export { availablePlasmid }
