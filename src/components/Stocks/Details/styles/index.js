import { makeStyles } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    width: "90%",
    margin: "auto",
  },
  header: {
    textAlign: "center",
  },
  backButton: {
    marginTop: "10px",
    textAlign: "left",
    color: "#5f6368",
    "&:hover": {
      backgroundColor: "transparent",
      color: "inherit",
    },
  },
  cardHeader: {
    color: "#002f5e",
  },
  details: {
    "&:nth-child(odd)": {
      backgroundColor: "#F4F6F8",
    },
    "@media (max-width: 420px)": {
      display: "block !important",
    },
  },
  listItem: {
    "@media (max-width: 420px)": {
      marginBottom: "10px",
    },
  },
  list: {
    width: "100%",
    padding: "0px !important",
  },
  availabilityCard: {
    paddingTop: "5px",
    textAlign: "center",
  },
  cartBtnRow: {
    padding: "16px",
  },
  unavailableText: {
    padding: "16px",
    textAlign: "justify",
  },
  moreStrainsCard: {
    marginTop: "16px",
    padding: "5px",
    textAlign: "center",
  },
  options: {
    paddingBottom: "8px",
    display: "flex",
    justifyContent: "center",
  },
  secondaryText: {
    paddingTop: "8px",
  },
  link: {
    textDecoration: "none",
    color: palette.primary.main,
  },
  checkoutBtn: {
    borderStyle: "none !important",
    borderRadius: "0px !important",
    fontSize: "0.9rem !important",
  },
  arrowIcon: {
    marginRight: "8px",
  },
  id: {
    display: "flex",
    justifyContent: "center",
  },
  snackbar: {
    width: "300px",
    backgroundColor: green[600],
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center",
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  checkIcon: {
    fontSize: "0.8rem",
    marginRight: spacing(1),
  },
  closeIcon: {
    fontSize: "0.9rem",
  },
  unavailableIcon: {
    marginRight: spacing(2),
  },
  copyIcon: {
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "transparent",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
  detailsItem: {
    fontWeight: 420,
  },
  relatedItem: {
    display: "flex",
    justifyContent: "center !important",
  },
  addToCartBtn: {
    backgroundColor: green[600],
    color: "#fff",
    paddingLeft: "16px",
    paddingRight: "16px",
    "&:hover": {
      backgroundColor: green[700],
      color: "#fff",
    },
  },
  removeBtn: {
    marginTop: "5px",
  },
  quantity: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "16px",
  },
  maxItems: {
    color: palette.secondary.main,
  },
}))

export default useStyles
