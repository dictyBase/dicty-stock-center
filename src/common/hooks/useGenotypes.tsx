const addCommasToArrayElements = (arr: string[]) =>
  arr.map((item, index) => (index ? "," : "") + item)

/**
 * useGenotypes is a hook for separating the genotype data into
 * drug resistances and non drug resistance.
 */

const useGenotypes = (genotypes: string) => {
  const drugResistances = ["neoR", "bsR", "hygR", "tetR", "phleoR", "bleoR"]
  const splitGenotype = genotypes.split(",")
  // filter the drug resistances from genotypes string
  let drugResistanceItems = splitGenotype.filter((item: string) =>
    drugResistances.includes(item),
  )
  // filter the non-drug resistances
  let nonDrugResistanceItems = splitGenotype.filter(
    (item: string) => !drugResistances.includes(item),
  )

  // if no drug resistances, make sure last element does not end with comma
  if (!drugResistanceItems.length) {
    nonDrugResistanceItems = addCommasToArrayElements(nonDrugResistanceItems)
  } else {
    // otherwise make sure the comma is missing from last drug resistance element only
    nonDrugResistanceItems = nonDrugResistanceItems.map(
      (item: string) => `${item},`,
    )
    drugResistanceItems = addCommasToArrayElements(drugResistanceItems)
  }

  return {
    nonDrugResistances: nonDrugResistanceItems,
    drugResistances: drugResistanceItems,
  }
}

export default useGenotypes
