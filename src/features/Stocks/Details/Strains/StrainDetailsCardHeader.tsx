import React, { ChangeEvent } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Availability from "features/Stocks/Details/common/Availability"
import { CartItem } from "common/types"

// accessibility helper function
const a11yProps = (index: number) => ({
  id: `strain-details-tab-${index}`,
  "aria-controls": `strain-details-tabpanel-${index}`,
})

const useStyles = makeStyles(({ palette }) => ({
  root: {
    "&:not(:first-of-type)": {
      marginLeft: "5px",
    },
    color: "#002f5e",
    opacity: 1,
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    border: "1px #e4e4e4 solid",
    borderBottomWidth: 0,
  },
  selected: {
    background: "#f4f6f8",
    border: "none",
    "& $wrapper": {
      opacity: 1,
    },
  },
  wrapper: {
    opacity: 0.7,
  },
  indicator: {
    display: "none",
  },
  number: {
    background: palette.primary.main,
    borderRadius: "0.8em",
    color: "#ffffff",
    display: "inline-block",
    fontWeight: 700,
    fontSize: "0.8rem",
    marginLeft: "5px",
    textAlign: "center",
    width: "1.5em",
  },
}))

type Props = {
  /** Tab value */
  value: number
  /** Function for handling tab changes */
  handleChange: (event: ChangeEvent<{}>, value: any) => void
  /** Number of phenotypes */
  phenotypeLength: number
  cartData: CartItem
  inStock: boolean
}

/** StrainDetailsCardHeader displays the header at the top of the  card
 * on the strain details page.
 */

const StrainDetailsCardHeader = ({
  value,
  handleChange,
  phenotypeLength,
  cartData,
  inStock,
}: Props) => {
  const classes = useStyles()

  const tabStyles = {
    root: classes.root,
    selected: classes.selected,
    wrapper: classes.wrapper,
  }

  let content = <Typography variant="h2">Strain Details</Typography>

  if (phenotypeLength > 0) {
    content = (
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{ indicator: classes.indicator }}
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
              Phenotypes
              <span className={classes.number}>{phenotypeLength}</span>
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
          <Availability cartData={cartData} inStock={inStock} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StrainDetailsCardHeader
