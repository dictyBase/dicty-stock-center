/**
 * Helper function that identifies if an ID is for a strain or plasmid
 */
const strainOrPlasmid = id => {
  let type
  id.slice(0, 3) === "DBS" ? (type = "strains") : (type = "plasmids")
  return type
}

export default strainOrPlasmid
