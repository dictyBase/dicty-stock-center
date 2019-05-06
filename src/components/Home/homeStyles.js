// @flow
const styles = (theme: Object) => ({
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
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "75%",
    lineHeight: 1.6,

    [theme.breakpoints.up("xl")]: {
      width: "1270px",
    },
  },
  header: {
    fontSize: "48px",
    marginTop: "0px",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
  },
})

export default styles
