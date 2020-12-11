import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  paper: {
    // minHeight: 600,
    width: "100%",
  },
  row: {
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    paddingLeft: "8px",
    paddingRight: "8px",
    "&:nth-child(odd)": {
      backgroundColor: "#F4F6F8",
    },
  },
  item: {
    paddingRight: "4px",
  },
  listHeaders: {
    borderBottom: "1px solid #888",
    backgroundColor: "#f4f6f8",
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
