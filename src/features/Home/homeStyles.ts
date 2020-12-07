import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
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
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  intro: {
    paddingTop: "0px !important",
    paddingBottom: "12px !important",
  },
  column: {
    paddingTop: "0px !important",
  },
}))

export default useStyles
