import { makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  error400: {
    backgroundColor: "#eff8fb",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
    borderRadius: 5,
  },
  error500: {
    backgroundColor: theme.palette.error.dark,
    // textAlign: "center",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: 5,
    color: theme.palette.getContrastText(theme.palette.error.dark),
    minHeight: "300px",
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  paragraph: {
    padding: "10px",
  },
  list: {
    margin: "0 auto",
    display: "table",
  },
}))

export default useStyles
