import React from "react"
import { Link } from "react-router-dom"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import {
  Gene,
  StrainQuery,
  Phenotype,
  Publication,
  User,
} from "dicty-graphql-schema"
import StrainDetailsCardHeader from "features/Stocks/Details/Strains/StrainDetailsCardHeader"
import DetailsListItem from "features/Stocks/Details/common/DetailsListItem"
import PhenotypeList from "./Phenotypes/PhenotypeList"
import useStyles from "features/Stocks/Details/styles"
import TabPanel from "common/components/TabPanel"
import GenesDisplay from "common/components/GenesDisplay"
import PublicationsDisplay from "common/components/PublicationsDisplay"
import GenotypesDisplay from "common/components/GenotypesDisplay"
import getDepositorName from "features/Stocks/Details/utils/getDepositorName"
import { fees } from "common/constants/fees"
import { DetailsRow } from "features/Stocks/Details/types"

const strainRowsGenerator = (
  data: StrainQuery["strain"],
  parent: string | JSX.Element,
  depositor: string,
  publications: JSX.Element,
  genes: JSX.Element,
  genotypes: JSX.Element,
) => [
  {
    id: 0,
    title: "Strain Descriptor",
    content: data?.label,
  },
  {
    id: 1,
    title: "Strain Names",
    content: data?.names?.slice().sort().join(", "),
  },
  {
    id: 2,
    title: "Strain Summary",
    content: data?.summary,
  },
  {
    id: 3,
    title: "Systematic Name",
    content: data?.systematic_name,
  },
  {
    id: 4,
    title: "Strain Characteristics",
    content: data?.characteristics?.slice().sort().join(", "),
  },
  {
    id: 5,
    title: "Genetic Modification",
    content: data?.genetic_modification,
  },
  {
    id: 6,
    title: "Mutagenesis Method",
    content: data?.mutagenesis_method,
  },
  {
    id: 7,
    title: "Parental Strain",
    content: parent,
  },
  {
    id: 8,
    title: "Plasmid",
    content: data?.plasmid,
  },
  {
    id: 9,
    title: "Associated Gene(s)",
    content: genes,
  },
  {
    id: 10,
    title: "Genotype",
    content: genotypes,
  },
  { id: 11, title: "Species", content: data?.species },
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

type Props = {
  data: StrainQuery["strain"]
}

const StrainDetailsCard = ({ data }: Props) => {
  const classes = useStyles()
  const [tabValue, setTabValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue)
  }

  const parent = data?.parent ? (
    <Link to={`/strains/${data.parent.id}`}>{data.parent.label}</Link>
  ) : (
    ""
  )
  const publications = data?.publications as Publication[]
  const genes = data?.genes as Gene[]
  const depositor = data?.depositor as User
  const genotypes = data?.genotypes as string[]
  const inStock = data?.in_stock as boolean

  const rows = strainRowsGenerator(
    data,
    parent,
    getDepositorName(depositor),
    <PublicationsDisplay publications={publications} />,
    <GenesDisplay genes={genes} />,
    <GenotypesDisplay genotypes={genotypes[0]} />,
  )

  const cartData = {
    id: data?.id as string,
    name: data?.label as string,
    summary: data?.summary as string,
    fee: fees.STRAIN_FEE,
  }

  const phenotypes = data?.phenotypes as Phenotype[]
  const numPhenotypes = phenotypes.length

  const header = (
    <StrainDetailsCardHeader
      value={tabValue}
      handleChange={handleChange}
      phenotypeLength={numPhenotypes}
      cartData={cartData}
      inStock={inStock}
    />
  )

  return (
    <Box textAlign="center" mb={3}>
      {numPhenotypes && header}
      <Card raised>
        <Grid container>
          <List className={classes.list}>
            {numPhenotypes < 1 && (
              <ListItem divider className={classes.cardHeader}>
                {header}
              </ListItem>
            )}
            <TabPanel value={tabValue} index={0}>
              {rows.map((data: DetailsRow) => (
                <DetailsListItem
                  title={data.title}
                  content={data.content}
                  key={data.id}
                />
              ))}
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <PhenotypeList phenotypes={phenotypes} />
            </TabPanel>
          </List>
        </Grid>
      </Card>
    </Box>
  )
}

export default StrainDetailsCard
