import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "auto",
  },
  header: {
    textAlign: "center",
  },
  leftCard: {},
  details: {
    "&:hover": {
      boxShadow:
        "inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)",
      zIndex: 1,
    },
    "&:nth-child(odd)": {
      backgroundColor: "#eeeeee",
    },
  },
  listTitle: {},
  listContent: {},
  rightCard: {
    padding: "5px",
    textAlign: "center",
  },
  quantity: {
    display: "inline-flex",
    justifyContent: "center",
  },
  textField: {},
})

export default useStyles
