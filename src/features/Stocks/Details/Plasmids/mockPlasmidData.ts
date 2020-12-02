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
  publications: [
    {
      id: "11084033",
      pub_date: "2000-11-17T00:00:00.000Z",
      title:
        "Myosin I phosphorylation is increased by chemotactic stimulation.",
      journal: "The Journal of biological chemistry",
      volume: "276",
      pages: "5235-5239",
      authors: [
        {
          last_name: "Gliksman",
        },
        {
          last_name: "Santoyo",
        },
        {
          last_name: "Novak",
        },
        {
          last_name: "Titus",
        },
      ],
    },
  ],
  sequence: "",
  keywords: [],
  genbank_accession: "",
  in_stock: true,
} as PlasmidDetails

export { availablePlasmid }
