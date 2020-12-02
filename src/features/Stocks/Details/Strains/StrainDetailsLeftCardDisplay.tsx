import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import StrainDetailsLeftCardHeader from "features/Stocks/Details/Strains/StrainDetailsLeftCardHeader"
import DetailsListItem from "features/Stocks/Details/common/DetailsListItem"
import PhenotypeList from "./Phenotypes/PhenotypeList"
import useStyles from "features/Stocks/Details/styles"
import TabPanel from "common/components/TabPanel"
import { PhenotypeData } from "../types/props"

type Props = {
  /** Rows of strain data to display */
  rows: Array<{
    id: number
    title: string
    content: any
  }>
  /** Strain species */
  species: string
  /** List of phenotypes */
  phenotypes: Array<PhenotypeData>
}

/**
 * StrainDetailsLeftCardDisplay handles the display of the left card on the
 * strain details page (tab version).
 */

const StrainDetailsLeftCardDisplay = ({ rows, species, phenotypes }: Props) => {
  const classes = useStyles()
  const [tabValue, setTabValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Grid item xs={12} md={9} lg={10} className={classes.header}>
      <Card raised>
        <Grid container>
          <List className={classes.list}>
            <ListItem divider className={classes.cardHeader}>
              <StrainDetailsLeftCardHeader
                value={tabValue}
                handleChange={handleChange}
                species={species}
                phenotypeLength={phenotypes.length}
              />
            </ListItem>
            <TabPanel value={tabValue} index={0}>
              {rows.map((data: any) => (
                <DetailsListItem data={data} key={data.id} />
              ))}
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <PhenotypeList phenotypes={phenotypes} />
            </TabPanel>
          </List>
        </Grid>
      </Card>
    </Grid>
  )
}

export default StrainDetailsLeftCardDisplay
