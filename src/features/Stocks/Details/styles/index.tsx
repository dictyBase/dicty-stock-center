import { makeStyles } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

// @ts-ignore
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
    textTransform: "none",
  },
  cardHeader: {
    paddingTop: "5px",
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
    textAlign: "center",
    borderRadius: "0px",
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
    textTransform: "none !important",
  },
  viewMoreBtn: {
    textTransform: "none",
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
  moreInfoText: {
    marginTop: "4px",
    fontSize: "0.75rem",
  },
  unavailableContainer: {
    backgroundColor: "rgb(253, 236, 234)",
    border: "1px solid #cc0000",
    color: "rgb(97, 26, 21)",
  },
}))

export default useStyles
