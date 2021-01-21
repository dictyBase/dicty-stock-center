import { withStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const TrashButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(theme.palette.error.main),
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  },
}))(Button)

export default TrashButton
