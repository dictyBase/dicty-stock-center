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
  breadcrumb: {
    padding: "8px 15px",
    marginBottom: "20px",
    listStyle: "none",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    "&:active": {
      color: "#777",
    },
  },
  breadcrumbFirstItem: {
    display: "inline-block",
  },
  breadcrumbItem: {
    display: "inline-block",
    "&:before": {
      padding: "0 5px",
      color: "#ccc",
      content: "'/'",
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
