import { makeStyles, Theme } from "@material-ui/core/styles"

// @ts-ignore <-- necessary to include the !important attributes
const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  header: {
    textAlign: "center",
  },
  cardHeader: {
    color: "#002f5e",
    paddingRight: "8px",
  },
  details: {
    "&:nth-child(odd)": {
      backgroundColor: "#F4F6F8",
    },
    "@media (max-width: 420px)": {
      display: "block !important",
    },
  },
  listItem: {
    "@media (max-width: 420px)": {
      marginBottom: "10px",
    },
  },
  list: {
    width: "100%",
    padding: "0px !important",
  },
  id: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
  },
  copyIcon: {
    marginLeft: "5px",
    "&:hover": {
      backgroundColor: "transparent",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
  detailsItem: {
    fontWeight: 420,
  },
  error: {
    color: palette.error.main,
  },
}))

export default useStyles
