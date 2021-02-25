import { makeStyles, Theme } from "@material-ui/core/styles"
import { blue } from "@material-ui/core/colors"

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: blue[800],
  },
  catalogPaper: {
    height: 600,
    width: "100%",
  },
  listHeaders: {
    position: "sticky",
    top: 0,
  },
  row: {
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    "&:hover": {
      backgroundColor: "#eeeeee",
      boxShadow:
        "inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)",
      zIndex: 1,
    },
    "@media (max-width: 1024px)": {
      "& p": {
        fontSize: "0.75rem !important",
      },
    },
  },
  item: {
    paddingRight: theme.spacing(1),
  },
  trashBtn: {
    color: theme.palette.error.main,
  },
}))

export default useStyles
