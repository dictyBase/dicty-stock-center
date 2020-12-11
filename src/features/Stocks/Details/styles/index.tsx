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
  },
  snackbar: {
    width: "300px",
    backgroundColor: palette.secondary.main,
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center",
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  checkIcon: {
    fontSize: "0.8rem",
    marginRight: spacing(1),
  },
  closeIcon: {
    fontSize: "0.9rem",
  },
  copyIcon: {
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "transparent",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
  detailsItem: {
    fontWeight: 420,
  },
  maxItems: {
    color: palette.error.main,
  },
  moreInfoText: {
    marginTop: "4px",
    fontSize: "0.75rem",
    color: "#000",
  },
  error: {
    color: palette.error.main,
  },
}))

export default useStyles
