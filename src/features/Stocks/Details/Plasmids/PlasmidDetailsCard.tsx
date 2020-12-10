import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import DetailsListItem from "features/Stocks/Details/common/DetailsListItem"
import GenesDisplay from "common/components/GenesDisplay"
import PublicationsDisplay from "common/components/PublicationsDisplay"
import Availability from "features/Stocks/Details/common/Availability"
import useStyles from "features/Stocks/Details/styles"
import {
  PlasmidDetails,
  PlasmidDetailsProps,
} from "features/Stocks/Details/types/props"

const plasmidRowGenerator = (
  data: PlasmidDetails,
  imageMap: any,
  publications: JSX.Element,
  genes: JSX.Element,
) => [
  {
    id: 0,
    title: "Name",
    content: data.name,
  },
  {
    id: 1,
    title: "Description",
    content: data.summary,
  },
  {
    id: 2,
    title: "GenBank Accession Number",
    content: data.genbank_accession,
  },
  {
    id: 3,
    title: "Depositor",
    content: data.depositor,
  },
  {
    id: 4,
    title: "Associated Genes",
    content: genes,
  },
  {
    id: 5,
    title: "Keywords",
    content: data.keywords.sort().join(", "),
  },
  {
    id: 6,
    title: "Reference(s)",
    content: publications,
  },
  {
    id: 7,
    title: "Image Map",
    content: imageMap,
  },
  {
    id: 8,
    title: "Sequence",
    content: data.sequence,
  },
]

const PlasmidDetailsCard = ({ data }: PlasmidDetailsProps) => {
  const classes = useStyles()

  const imageMap = data.image_map ? (
    <img src={data.image_map} alt={`Map for plasmid ${data.id}`} />
  ) : (
    ""
  )

  const rows = plasmidRowGenerator(
    data,
    imageMap,
    <PublicationsDisplay publications={data.publications} />,
    <GenesDisplay genes={data.genes} />,
  )

  const cartData = {
    id: data.id,
    name: data.name,
    summary: data.summary,
    type: "plasmid",
  }

  return (
    <Grid item xs={12} className={classes.header}>
      <Card raised>
        <Grid container>
          <List className={classes.list}>
            <ListItem divider className={classes.cardHeader}>
              <Grid item xs={12} className={classes.cardHeader}>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="h6">Plasmid Details</Typography>
                  </Grid>
                  <Grid item>
                    <Availability cartData={cartData} inStock={data.in_stock} />
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
            {rows.map((data) => (
              <DetailsListItem data={data} key={data.id} />
            ))}
          </List>
        </Grid>
      </Card>
    </Grid>
  )
}

export default PlasmidDetailsCard
