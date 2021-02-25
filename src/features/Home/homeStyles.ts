import { makeStyles, Theme } from "@material-ui/core/styles"
import { blue, grey } from "@material-ui/core/colors"

type Props = {
  /** Background color for panel */
  panelBackground?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  panel: {
    backgroundColor: ({ panelBackground }: Props) =>
      panelBackground === "blue" ? blue[50] : grey[100],
    border: "1px",
    borderStyle: "solid",
    borderColor: ({ panelBackground }: Props) =>
      panelBackground === "blue" ? blue[50] : grey[100],
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: "10px",
  },
  sopLink: {
    color: theme.palette.error.dark,
    "&:hover": {
      color: theme.palette.error.main,
    },
  },
  header: {
    paddingBottom: "0px !important",
    "& h1": {
      fontSize: "48px",
      marginTop: "0px",
      marginBottom: "25px",
      borderBottom: "1px solid #eee",
    },
  },
  list: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    listStyle: "none",
  },
  intro: {
    paddingTop: "0px !important",
    paddingBottom: "12px !important",
  },
  column: {
    paddingTop: theme.spacing(1),
  },
}))

export default useStyles
