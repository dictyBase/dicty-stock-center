import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "5px",
  },
  link: {
    color: "#428bca",
    textDecoration: "none",
  },
  addPageButton: {
    width: "25%",
    marginTop: "25px",
    padding: "25px",
    textTransform: "none",
    backgroundColor: "#FF6347",
    "&:hover": {
      backgroundColor: "#cc381e",
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
        className={classes.link}
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
          <FontAwesomeIcon icon="plus" />
          &nbsp; Add a page to this route
        </Button>
      </Link>
    </div>
  )
}

export default AddPageButton
