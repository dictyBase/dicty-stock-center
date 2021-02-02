import React from "react"
import { Link } from "react-router-dom"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  continueBtn: {
    fontWeight: 600,
    marginTop: theme.spacing(2),
    "&:hover": {
      color: grey[900],
    },
  },
  card: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: grey[100],
  },
}))

/**
 * ContinueShoppingCard is the card below the total/checkout card on the cart page.
 */
const ContinueShoppingCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Typography variant="h3" align="center">
        Need something else?
      </Typography>
      <Button
        component={Link}
        to="/strains"
        color="default"
        variant="contained"
        size="large"
        fullWidth
        startIcon={<FontAwesomeIcon icon="share" />}
        className={classes.continueBtn}>
        Continue Shopping
      </Button>
    </Card>
  )
}

export default ContinueShoppingCard
