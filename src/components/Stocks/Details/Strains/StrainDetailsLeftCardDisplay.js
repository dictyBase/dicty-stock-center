// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import DetailsListItem from "components/Stocks/Details/common/DetailsListItem"
import StrainDetailsLeftCardHeader from "components/Stocks/Details/Strains/StrainDetailsLeftCardHeader"
import useStyles from "components/Stocks/Details/styles"
import TabPanel from "components/common/TabPanel"

type Props = {
  /** Rows of strain data to display */
  rows: Array<{
    id: number,
    title: string,
    content: any,
  }>,
  /** Strain species */
  species: string,
}

/**
 * StrainDetailsLeftCardDisplay handles the display of the left card on the
 * strain details page (tab version).
 */

const StrainDetailsLeftCardDisplay = ({ rows, species }: Props) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Grid item xs={12} md={9} lg={10} className={classes.header}>
      <Card className={classes.leftCard} raised>
        <Grid container>
          <List className={classes.list}>
            <ListItem divider className={classes.cardHeader}>
              <StrainDetailsLeftCardHeader
                value={value}
                handleChange={handleChange}
                species={species}
              />
            </ListItem>
            <TabPanel value={value} index={0}>
              {rows.map(data => (
                <DetailsListItem data={data} key={data.id} />
              ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
              phenotype data goes here
            </TabPanel>
          </List>
        </Grid>
      </Card>
    </Grid>
  )
}

export default StrainDetailsLeftCardDisplay
