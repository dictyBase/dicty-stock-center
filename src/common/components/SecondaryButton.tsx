import { withStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const SecondaryButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}))(Button)

export default SecondaryButton
