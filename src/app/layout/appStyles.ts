import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  body: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    fontSize: "16px",
    color: "#333",
    backgroundColor: "#fff",
    "& h1, h2, h3, h4, h5, h6": {
      fontWeight: 500,
      lineHeight: 1.1,
    },
    "& h4, h5, h6": {
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
  main: {
    flex: 1,
    marginTop: "15px",
    marginBottom: "25px",
  },
})

const navTheme = {
  primary: "#004080",
  secondary: "#0059b3",
}

const footerTheme = {
  primary: "#004080",
  secondary: "#ebe97a",
  text: "#d8d8d8",
}

const headerTheme = {
  primary: "#004080",
  secondary: "#001b53",
  text: "#004080",
}

export { useStyles, navTheme, footerTheme, headerTheme }
