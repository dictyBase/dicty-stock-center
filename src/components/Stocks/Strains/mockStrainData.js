export const data = {
  label: "aarA-",
  id: "DBS0236123",
  names: ["aar-", "aardvark null", "HAD 186", "catenin null"],
  systematic_name: "HAD186",
  characteristics: ["blasticidin resistant", "axenic", "null mutant"],
  summary: "aarA (aardvark) null mutant (β-catenin knock-out)",
  editable_summary: "aarA (aardvark) null mutant (β-catenin knock-out)",
  genotypes: ["axeA2", "axeB2", "axeC2", "aarA-[aarA-KO]", "bsR"],
  genetic_modification: "endogenous insertion",
  mutagenesis_method: "Homologous Recombination",
  species: "Dictyostelium discoideum",
  parent: {
    id: "DBS0350762",
    label: "AX2",
  },
  depositor: "Adrian Harwood",
  plasmid: "aar-KO (aar cDNA with bsR cassette)",
  dbxrefs: ["11130075"],
  genes: ["aarA"],
}

export const strainWithPhenotype = {
  id: "DBS0350966",
  label: "spaA-",
  names: ["spaA-KO"],
  systematic_name: "DBS0350966",
  summary: "spaA null mutant",
  editable_summary: "spaA null mutant",
  genotypes: ["axeA2", "axeB2", "axeC2", "spaA-", "[pSpaA-KO]", "bsR"],
  genetic_modification: "endogenous deletion with insertion",
  characteristics: ["blasticidin resistant", "axenic", "null mutant"],
  parent: {
    id: "DBS0235534",
    label: "AX2-214",
  },
  plasmid: "pSpaA-KO",
  dbxrefs: ["29704004"],
  genes: ["spaA"],
  depositor: "Yoko Yamada (Pauline Schaap)",
  species: "Dictyostelium discoideum",
  mutagenesis_method: "Homologous Recombination",
  phenotypes: [
    {
      phenotype: "abolished sporulation",
      note:
        "spores are round , do not stain with calcofluor and are not detergent resistant",
      assay: "fruiting body development",
      environment: "on non-nutrient agar",
      publication: {
        authors: [
          {
            last_name: "Yamada",
          },
          {
            last_name: "Cassidy",
          },
          {
            last_name: "Schaap",
          },
        ],
        id: "29704004",
        pub_date: "2018-04-27",
        title:
          "The transcription factor Spores Absent A is a PKA dependent inducer of Dictyostelium sporulation.",
        journal: "Scientific reports",
        volume: "8",
        pages: "6643",
      },
    },
  ],
}
