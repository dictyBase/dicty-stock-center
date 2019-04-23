// @flow
const styles = (theme: Object) => ({
  layout: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    fontSize: "32px",
    marginTop: "25px",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  innerForm: {
    paddingBottom: "10px",
  },
  requiredText: {
    color: "#dc3545",
  },
  panelBlue: {
    backgroundColor: "#e6f2ff",
    color: "#31708f",
    border: "1px solid #e6f2ff",
    margin: "15px auto",
    padding: "25px",
    borderRadius: "10px",
    width: "100%",
  },
  submitPage: {
    textAlign: "center",
    paddingLeft: "25px",
  },
  continueBtn: {
    width: "100%",
    color: "#fff",
    backgroundColor: "rgb(46, 109, 164)",
    "&:hover": {
      backgroundColor: "#0073e6",
    },
  },
  previousBtn: {
    width: "100%",
    color: "#fff",
    backgroundColor: "#5cb85c",
    "&:hover": {
      backgroundColor: "#449d44",
    },
  },
  submitBtn: {
    width: "100%",
    color: "#fff",
    backgroundColor: "rgb(46, 109, 164)",
    "&:hover": {
      backgroundColor: "#0073e6",
    },
  },
})

export default styles
