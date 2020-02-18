import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  main: {
    margin: "0 10px 25px 10px",
  },
  body: {
    margin: "auto",
    height: "100%",
    width: "100%",
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    lineHeight: 1.6,
    color: "#333",
    backgroundColor: "#fff",
    boxSizing: "content-box",
    WebkitFontSmoothing: "auto",
    MozOsxFontSmoothing: "auto",
    "& h1, h2, h3, h4, h5, h6": {
      fontWeight: 500,
      lineHeight: 1.1,
    },
    "& h4, h5, h6": {
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
})

const navTheme = {
  primary: "#004080",
  secondary: "#0059b3",
}

export { useStyles, navTheme }
