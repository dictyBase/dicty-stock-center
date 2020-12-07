import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "75%",
    "@media (min-width: 1300px)": {
      width: "1270px",
    },
  },
  header: {
    marginTop: "25px",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  innerPanel: {
    padding: "10px",
  },
})

export default useStyles
