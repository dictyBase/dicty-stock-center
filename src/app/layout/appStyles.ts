import { makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    fontSize: "16px",
    color: "#333",
    backgroundColor: "#fff",
    "& h1, h2, h3, h4, h5, h6": {
      fontWeight: 500,
      lineHeight: 1.1,
    },
    "& h4, h5, h6": {
      marginTop: theme.spacing(1.2),
      marginBottom: theme.spacing(1.2),
    },
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}))

const primaryColor = "#004080"
const blueSecondaryColor = "#001b53"

const navTheme = {
  primary: primaryColor,
  secondary: blueSecondaryColor,
}

const footerTheme = {
  primary: primaryColor,
  secondary: "#ebe97a",
  text: "#d8d8d8",
}

const headerTheme = {
  primary: primaryColor,
  secondary: blueSecondaryColor,
  text: primaryColor,
}

export { useStyles, navTheme, footerTheme, headerTheme }
