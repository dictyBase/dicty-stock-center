import { makeStyles } from "@material-ui/core/styles"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  btnGrid: {
    marginTop: "20px",
    marginRight: "5px",
  },
  alertBox: {
    padding: "15px",
    marginBottom: "20px",
    border: "1px solid transparent",
    borderRadius: "4px",
    color: "#a94442",
    backgroundColor: "#f2dede",
    borderColor: "#ebccd1",
    textAlign: "center",
  },
  header: {
    fontSize: "62px",
    marginTop: "25px",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  continueBtn: {
    marginBottom: "10px",
    marginRight: "10px",
    textTransform: "none",
  },
  checkoutBtn: {
    marginBottom: "10px",
    backgroundColor: "#004080",
    "&:hover": {
      backgroundColor: "#0059b3",
    },
    textTransform: "none",
  },
  buttons: {
    textAlign: "center",
  },
  catalogLink: {
    color: "#004080",
    textDecoration: "none",
  },
  trashBtn: {
    minWidth: 0,
  },
  itemsContainer: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "75%",

    "& tr": {
      padding: "10px",
    },

    "& td": {
      fontSize: "1rem",
    },

    "& a": {
      color: "#004080",
      textDecoration: "none",
    },

    [theme.breakpoints.up("xl")]: {
      width: "1270px",
    },
  },
  itemsHeader: {
    padding: "15px",
    color: "#fff",
    backgroundColor: "rgb(46, 109, 164)",
    textAlign: "center",
    fontWeight: 400,
  },
}))

export default useStyles
