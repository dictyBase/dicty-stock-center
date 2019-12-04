// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import useStyles from "components/Stocks/Details/styles"

// accessibility helper function
const a11yProps = index => ({
  id: `strain-details-tab-${index}`,
  "aria-controls": `strain-details-tabpanel-${index}`,
})

type Props = {
  /** Strain species */
  species: string,
  /** Tab value */
  value: number,
  /** Function for handling tab changes */
  handleChange: Function,
  /** Number of phenotypes */
  phenotypeLength: number,
}

/** StrainDetailsLeftCardHeader displays the header at the top of the left card
 * on the strain details page.
 */

const StrainDetailsLeftCardHeader = ({
  species,
  value,
  handleChange,
  phenotypeLength,
}: Props) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} className={classes.cardHeader}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Tabs
            indicatorColor="primary"
            value={value}
            onChange={handleChange}
            aria-label="strain details tabs">
            <Tab
              label={<Typography variant="body1">Strain Details</Typography>}
              {...a11yProps(0)}
            />
            <Tab
              label={
                <Typography variant="body1">
                  Phenotypes ({phenotypeLength})
                </Typography>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Grid>
        <Grid item>
          <Typography variant="body1">{species}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StrainDetailsLeftCardHeader
