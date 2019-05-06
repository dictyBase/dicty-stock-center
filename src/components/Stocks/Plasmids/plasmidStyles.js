const styles = theme => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    flex: 1,
    fontSize: 16,
  },
  layout: {
    width: "75%",
    margin: "auto",
    [theme.breakpoints.up("xl")]: {
      width: "1270px",
    },
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  cartButton: {
    backgroundColor: "#80c1ff",
    "&:hover": {
      backgroundColor: "#cce6ff",
    },
  },
  tableCell: {
    borderBottom: 0,
  },
  header: {
    textAlign: "center",
    backgroundColor: "#0059b3",
    color: "#fff",
  },
  rightDisplay: {
    padding: "8px 56px 4px 24px",
    fontWeight: 400,
    marginBottom: "5px",
  },
})

export default styles
