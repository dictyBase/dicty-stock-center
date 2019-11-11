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
  },
  cardHeader: {
    color: "#002f5e",
  },
  leftCard: {},
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
  quantity: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "16px",
  },
  moreStrainsCard: {
    marginTop: "16px",
    paddingTop: "5px",
    paddingBottom: "5px",
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
    textTransform: "none !important",
    borderStyle: "none !important",
    borderRadius: "0px !important",
    fontSize: "0.75rem !important",
  },
  arrowIcon: {
    marginRight: "8px",
  },
  id: {
    display: "flex",
    justifyContent: "center",
  },
  snackbar: {
    width: "400px",
    backgroundColor: green[600],
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center",
  },
  checkIcon: {
    fontSize: "0.8rem",
    marginRight: spacing(1),
  },
  closeIcon: {
    fontSize: "0.9rem",
  },
}))

export default useStyles
