import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: "80%",
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
  },
  list: {
    width: "100%",
    padding: "0px !important",
  },
  listTitle: {},
  listContent: {},
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
  },
}))

export default useStyles
