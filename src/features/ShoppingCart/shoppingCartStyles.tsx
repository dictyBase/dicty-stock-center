import { makeStyles } from "@material-ui/core/styles"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  btnGrid: {
    marginTop: "20px",
    marginRight: "5px",
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
}))

export default useStyles
