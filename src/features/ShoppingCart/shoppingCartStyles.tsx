import { makeStyles } from "@material-ui/core/styles"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  btnGrid: {
    marginTop: "20px",
    marginRight: "5px",
  },
  alertBox: {
    padding: "15px",
    marginBottom: "20px",
    border: "1px solid transparent",
    borderRadius: "4px",
    color: theme.palette.error.main,
    backgroundColor: "#f2dede",
    borderColor: "#ebccd1",
    textAlign: "center",
  },
  header: {
    fontSize: "3rem",
    marginTop: "25px",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  continueBtn: {
    marginBottom: "10px",
    marginRight: "10px",
    "&:hover": {
      color: "inherit",
    },
  },
  checkoutBtn: {
    marginBottom: "10px",
    "&:hover": {
      color: "#fff",
    },
  },
  buttons: {
    textAlign: "center",
  },
  trashBtn: {
    minWidth: 0,
  },
  itemsContainer: {
    "& tr": {
      padding: "10px",
    },
    "& td": {
      fontSize: "1rem",
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
