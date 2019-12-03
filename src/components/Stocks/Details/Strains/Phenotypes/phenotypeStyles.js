// @flow
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  paper: {
    minHeight: 600,
    width: "100%",
  },
  row: {
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    paddingLeft: "8px",
    paddingRight: "8px",
    "&:hover": {
      backgroundColor: "#eeeeee",
      boxShadow:
        "inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)",
      zIndex: 1,
    },
  },
  item: {
    paddingRight: "4px",
  },
  listHeaders: {
    borderBottom: "1px solid #888",
    backgroundColor: "#f6f9fc",
    color: "#525f7f",
    fontWeight: 600,
  },
  list: {
    padding: 0,
  },
  button: {
    color: "#004080",
  },
})

export default useStyles
