import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  panelGray: {
    backgroundColor: "#f2f2f2",
    border: "1px solid #f2f2f2",
    margin: "15px auto",
    padding: "15px",
    borderRadius: "10px",
    width: "100%",
  },
  panelBlue: {
    backgroundColor: "#e6f2ff",
    border: "1px solid #e6f2ff",
    margin: "15px auto",
    padding: "15px",
    borderRadius: "10px",
    width: "100%",
  },
  sopLink: {
    color: "#961818",
    textDecoration: "none",
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "80%",
    lineHeight: 1.6,

    [theme.breakpoints.up("xl")]: {
      width: "1350px",
    },
  },
  header: {
    paddingBottom: "0px !important",
    "& h1": {
      fontSize: "48px",
      marginTop: "0px",
      marginBottom: "25px",
      borderBottom: "1px solid #eee",
    },
  },
  link: {
    color: "#004080",
    textDecoration: "none",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  intro: {
    paddingTop: "0px !important",
    paddingBottom: "0px !important",
  },
  column: {
    paddingTop: "0px !important",
  },
}))

export default useStyles
