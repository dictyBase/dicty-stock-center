import React from "react"
import { Link } from "react-router-dom"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import StrainDetailsCardHeader from "features/Stocks/Details/Strains/StrainDetailsCardHeader"
import DetailsListItem from "features/Stocks/Details/common/DetailsListItem"
import PhenotypeList from "./Phenotypes/PhenotypeList"
import useStyles from "features/Stocks/Details/styles"
import TabPanel from "common/components/TabPanel"
import GenesDisplay from "common/components/GenesDisplay"
import PublicationsDisplay from "common/components/PublicationsDisplay"
import GenotypesDisplay from "common/components/GenotypesDisplay"
import { fees } from "common/constants/fees"
import {
  StrainDetails,
  StrainDetailsProps,
} from "features/Stocks/Details/types"

const strainRowsGenerator = (
  data: StrainDetails,
  parent: string | JSX.Element,
  depositor: string,
  publications: JSX.Element,
  genes: JSX.Element,
  genotypes: JSX.Element,
) => [
  {
    id: 0,
    title: "Strain Descriptor",
    content: data.label,
  },
  {
    id: 1,
    title: "Strain Names",
    content: data.names.slice().sort().join(", "),
  },
  {
    id: 2,
    title: "Strain Summary",
    content: data.summary,
  },
  {
    id: 3,
    title: "Systematic Name",
    content: data.systematic_name,
  },
  {
    id: 4,
    title: "Strain Characteristics",
    content: data.characteristics.slice().sort().join(", "),
  },
  {
    id: 5,
    title: "Genetic Modification",
    content: data.genetic_modification,
  },
  {
    id: 6,
    title: "Mutagenesis Method",
    content: data.mutagenesis_method,
  },
  {
    id: 7,
    title: "Parental Strain",
    content: parent,
  },
  {
    id: 8,
    title: "Plasmid",
    content: data.plasmid,
  },
  {
    id: 9,
    title: "Associated Genes",
    content: genes,
  },
  {
    id: 10,
    title: "Genotypes",
    content: genotypes,
  },
  { id: 11, title: "Species", content: data.species },
  {
    id: 12,
    title: "Depositor",
    content: depositor,
  },
  {
    id: 13,
    title: "Reference(s)",
    content: publications,
  },
]

type Row = {
  /** Data object ID */
  id: number
  /** Title for row */
  title: string
  /** Content to display in row */
  content: string | JSX.Element
}

const StrainDetailsCard = ({ data }: StrainDetailsProps) => {
  const classes = useStyles()
  const [tabValue, setTabValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue)
  }

  const parent = data.parent ? (
    <Link to={`/strains/${data.parent.id}`}>{data.parent.label}</Link>
  ) : (
    ""
  )

  const depositor = data.depositor
    ? `${data.depositor.first_name} ${data.depositor.last_name}`
    : ""

  const rows = strainRowsGenerator(
    data,
    parent,
    depositor,
    <PublicationsDisplay publications={data.publications} />,
    <GenesDisplay genes={data.genes} />,
    <GenotypesDisplay genotypes={data.genotypes[0]} />,
  )

  const cartData = {
    id: data.id,
    name: data.label,
    summary: data.summary,
    fee: fees.STRAIN_FEE,
  }

  const header = (
    <StrainDetailsCardHeader
      value={tabValue}
      handleChange={handleChange}
      phenotypeLength={data.phenotypes.length}
      cartData={cartData}
      inStock={data.in_stock}
    />
  )

  return (
    <Box textAlign="center" mb={3}>
      {data.phenotypes.length > 0 && header}
      <Card raised>
        <Grid container>
          <List className={classes.list}>
            {data.phenotypes.length < 1 && (
              <ListItem divider className={classes.cardHeader}>
                {header}
              </ListItem>
            )}
            <TabPanel value={tabValue} index={0}>
              {rows.map((data: Row) => (
                <DetailsListItem
                  title={data.title}
                  content={data.content}
                  key={data.id}
                />
              ))}
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <PhenotypeList phenotypes={data.phenotypes} />
            </TabPanel>
          </List>
        </Grid>
      </Card>
    </Box>
  )
}

export default StrainDetailsCard
