import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
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
    backgroundColor: "#0059b3",
    color: "#fff",
  },
  cardBottom: {
    backgroundColor: "#0059b3",
    height: "5px",
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
  rightCard: {
    padding: "5px",
    textAlign: "center",
  },
  quantity: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "16px",
  },
  rightCardBottom: {
    marginTop: "16px",
    padding: "5px",
    textAlign: "center",
  },
  options: {
    padding: "16px",
    display: "flex",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },
})

export default useStyles
