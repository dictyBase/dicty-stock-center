import { makeStyles } from "@material-ui/core/styles"
import { blue, grey } from "@material-ui/core/colors"

const useStyles = makeStyles(({ palette }) => ({
  panelGray: {
    backgroundColor: grey[100],
    border: "1px",
    borderStyle: "solid",
    borderColor: grey[100],
    marginBottom: "24px",
    padding: "15px",
    borderRadius: "10px",
    width: "100%",
  },
  panelBlue: {
    backgroundColor: blue[50],
    border: "1px",
    borderStyle: "solid",
    borderColor: blue[50],
    marginBottom: "24px",
    padding: "15px",
    borderRadius: "10px",
    width: "100%",
  },
  sopLink: {
    color: palette.error.dark,
    "&:hover": {
      color: palette.error.main,
    },
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
