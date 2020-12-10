import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(({ palette }) => ({
  container: {
    marginTop: "5px",
  },
  addPageButton: {
    marginTop: "25px",
    padding: "25px",
    backgroundColor: palette.secondary.main,
    "&:hover": {
      backgroundColor: palette.secondary.dark,
    },
  },
}))

type Props = {
  /** Name params from route */
  name: string
  /** Subname params from route */
  subname: string
  /** Location pathname */
  url: string
}

const AddPageButton = ({ name, subname, url }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Link
        to={{
          pathname: "/addpage",
          state: {
            name,
            subname,
            url,
          },
        }}>
        <Button
          className={classes.addPageButton}
          size="small"
          variant="contained"
          color="primary">
          <FontAwesomeIcon icon="plus" size="lg" />
          &nbsp; Add a page to this route
        </Button>
      </Link>
    </div>
  )
}

export default AddPageButton
