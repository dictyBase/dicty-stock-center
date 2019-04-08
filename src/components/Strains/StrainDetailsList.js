// @flow
import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import ItemDisplay from "components/common/ItemDisplay"
import LeftDisplay from "components/common/LeftDisplay"
import RightDisplay from "components/common/RightDisplay"

const styles = theme => ({
  header: {
    textAlign: "center",
    backgroundColor: "#0059b3",
    color: "#fff",
  },
})

type Props = {
  data: {
    id: string,
    descriptor: string,
    names: Array<string>,
    systematic_name: string,
    characteristics: Array<string>,
    summary: string,
    editable_summary?: string,
    genetic_modification: string,
    genotypes: Array<string>,
    mutagenesis_method: string,
    species: string,
    parent: {
      id: string,
      descriptor: string,
    },
    depositor: string,
    plasmid: string,
    dbxrefs: Array<string>,
    genes: Array<string>,
    phenotypes: Object,
  },
  /** Material-UI styling */
  classes: Object,
}

/**
 * StrainDetailsList is the main component for displaying individual strain data.
 */

const StrainDetailsList = (props: Props) => {
  const { data, classes } = props

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <h3>Strain Details</h3>
        </Grid>
      </Grid>
      <ItemDisplay>
        <LeftDisplay>Strain Descriptor</LeftDisplay>
        <RightDisplay>{data.descriptor}</RightDisplay>
        <LeftDisplay>Strain ID</LeftDisplay>
        <RightDisplay>{data.id}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Strain Names</LeftDisplay>
        <RightDisplay>{data.names.join(", ")}</RightDisplay>
        <LeftDisplay>Systematic Name</LeftDisplay>
        <RightDisplay>{data.systematic_name}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Strain Summary</LeftDisplay>
        <RightDisplay>{data.summary}</RightDisplay>
        <LeftDisplay>Strain Characteristics</LeftDisplay>
        <RightDisplay>{data.characteristics.join(", ")}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Genetic Modification</LeftDisplay>
        <RightDisplay>{data.genetic_modification}</RightDisplay>
        <LeftDisplay>Genotypes</LeftDisplay>
        <RightDisplay>
          <em>{data.genotypes.join(", ")}</em>
        </RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Mutagenesis Method</LeftDisplay>
        <RightDisplay>{data.mutagenesis_method}</RightDisplay>
        <LeftDisplay>Species</LeftDisplay>
        <RightDisplay>{data.species}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Parental Strain</LeftDisplay>
        <RightDisplay>
          {data.parent ? (
            <Link to={`/strains/${data.parent.id}`}>
              {data.parent.descriptor}
            </Link>
          ) : (
            <Fragment>N/A</Fragment>
          )}
        </RightDisplay>
        <LeftDisplay>Depositor</LeftDisplay>
        <RightDisplay>{data.depositor}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Plasmid</LeftDisplay>
        <RightDisplay>{data.plasmid}</RightDisplay>
        <LeftDisplay>Reference(s)</LeftDisplay>
        <RightDisplay>{data.dbxrefs.join(", ")}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Associated Genes</LeftDisplay>
        <RightDisplay>
          <em>
            {data.genes.map((gene, index) => (
              <Fragment>
                <a href={`/gene/${gene}`}>{(index ? ", " : "") + gene}</a>
              </Fragment>
            ))}
          </em>
        </RightDisplay>
        <RightDisplay />
        <RightDisplay />
      </ItemDisplay>
    </Fragment>
  )
}

export default withStyles(styles)(StrainDetailsList)
