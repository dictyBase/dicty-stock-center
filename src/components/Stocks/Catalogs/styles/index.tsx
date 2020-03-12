import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#0059b3 !important",
  },
  layout: {
    width: "95%",
    margin: "auto",
    "& a": {
      textDecoration: "none",
    },
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
  },
  link: {
    color: "#004080",
    textDecoration: "none",
  },
  item: {
    paddingRight: "10px",
  },
})

export default useStyles
