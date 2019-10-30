const styles = theme => ({
  error400: {
    backgroundColor: "#eff8fb",
    textAlign: "center",
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 30,
    borderRadius: 5,
  },
  error500: {
    backgroundColor: "#a63232",
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 40,
    marginBottom: 30,
    borderRadius: 5,
    color: "#e3e3e3",
  },
  link500: {
    color: "#e0e0e0",
    textDecoration: "none",
  },
  mainGrid: {
    marginTop: "40px",
  },
  paragraph: {
    padding: "10px",
  },
  link: {
    color: "#428bca",
    textDecoration: "none",
  },
  list: {
    margin: "0 auto",
    display: "table",
  },
  gridContainer: {
    marginTop: "33px",
  },
  paper: {
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: "#eff8fb",
    borderRadius: "15px",
    marginBottom: "10px",
    maxHeight: "500px",
    overflow: "auto",
    [theme.breakpoints.down("md")]: {
      height: "350px",
    },
  },
})

export default styles
