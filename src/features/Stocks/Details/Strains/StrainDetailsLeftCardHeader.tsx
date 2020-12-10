import React, { ChangeEvent } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Availability from "./Availability"

// accessibility helper function
const a11yProps = (index: number) => ({
  id: `strain-details-tab-${index}`,
  "aria-controls": `strain-details-tabpanel-${index}`,
})

const useStyles = makeStyles(() => ({
  root: {
    "&:not(:first-of-type)": {
      marginLeft: -1,
    },
    background: "#f7f7f7",
    color: "#002f5e",
    opacity: 1,
    textTransform: "none",
  },
  selected: {
    borderBottomWidth: 0,
    background: "#ffffff",
    "& $wrapper": {
      opacity: 1,
    },
  },
  wrapper: {
    opacity: 0.7,
  },
}))

type Props = {
  /** Strain species */
  species: string
  /** Tab value */
  value: number
  /** Function for handling tab changes */
  handleChange: (event: ChangeEvent<{}>, value: any) => void
  /** Number of phenotypes */
  phenotypeLength: number
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

  const tabStyles = {
    root: classes.root,
    selected: classes.selected,
    wrapper: classes.wrapper,
  }

  let content = <Typography variant="h6">Strain Details</Typography>

  if (phenotypeLength > 0) {
    content = (
      <Tabs
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        aria-label="strain details tabs">
        <Tab
          classes={tabStyles}
          label={<Typography variant="body1">Strain Details</Typography>}
          {...a11yProps(0)}
        />
        <Tab
          classes={tabStyles}
          label={
            <Typography variant="body1">
              Phenotypes ({phenotypeLength})
            </Typography>
          }
          {...a11yProps(1)}
        />
      </Tabs>
    )
  }

  return (
    <Grid item xs={12}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>{content}</Grid>
        <Grid item>
          {/* <Typography variant="body1" data-testid="strain-species">
            {species}
          </Typography> */}
          <Availability
            cartData={{
              id: "DBS123456",
              name: "abc",
              summary: "boo",
              type: "strain",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StrainDetailsLeftCardHeader
