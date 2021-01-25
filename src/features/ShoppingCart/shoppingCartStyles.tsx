import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
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
})

export default useStyles
