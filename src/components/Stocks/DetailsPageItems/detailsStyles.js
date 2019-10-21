// @flow
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  layout: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    "& a": {
      textDecoration: "none",
    },
  },
  header: {
    textAlign: "center",
    backgroundColor: "#0059b3",
    color: "#fff",
  },
  link: {
    color: "#004080",
    textDecoration: "none",
  },
  detailsPaper: {
    width: "100%",
    overflowX: "auto",
    paddingBottom: "10px",
  },
})

export default useStyles
