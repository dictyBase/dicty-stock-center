import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ palette }) => ({
  appBar: {
    backgroundColor: "#0059b3 !important",
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
    paddingRight: "10px",
  },
  spinner: {
    textAlign: "center",
    marginTop: "200px",
    marginBottom: "200px",
  },
  trashBtn: {
    color: palette.error.main,
  },
}))

export default useStyles
