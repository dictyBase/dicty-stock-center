import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "32px",
    marginTop: "25px",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  innerForm: {
    paddingBottom: "10px",
    marginTop: "20px",
  },
  requiredText: {
    color: theme.palette.error.main,
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
    marginBottom: "40px",
  },
  continueBtn: {
    minWidth: "200px",
  },
  backBtn: {
    minWidth: "200px",
    marginRight: theme.spacing(1),
  },
  submitBtn: {
    minWidth: "200px",
  },
  paymentBtn: {
    color: theme.palette.error.main,
    fontSize: "1.2em",
    "&:hover": {
      color: theme.palette.error.dark,
    },
  },
  alertBox: {
    padding: "15px",
    marginBottom: "20px",
    border: "1px solid transparent",
    borderRadius: "4px",
    color: "#3c763d",
    backgroundColor: "#dff0d8",
    borderColor: "#d6e9c6",
    textAlign: "center",
  },
  btn: {
    marginBottom: "10px",
    backgroundColor: "#004080",
    "&:hover": {
      backgroundColor: "#0073e6",
    },
  },
  arrowIcon: {
    marginLeft: "4px",
  },
  centerText: {
    textAlign: "center",
  },
  confirmation: {
    fontSize: "1.2em",
  },
  warningBox: {
    margin: "0px auto 22px auto",
    width: "60%",
  },
}))

export default useStyles