import React from "react"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "./formStyles"

type Props = {
  /** Current order form page number */
  pageNum: number
  /** Function to set the page number */
  setPageNum: Function
}

/**
 * BackButton displays the Back button on each order form page.
 */

const BackButton = ({ pageNum, setPageNum }: Props) => {
  const classes = useStyles()

  return (
    <Button
      color="primary"
      size="large"
      className={classes.backBtn}
      onClick={() => setPageNum(pageNum - 1)}>
      <FontAwesomeIcon icon="arrow-circle-left" />
      &nbsp; Back
    </Button>
  )
}

export default BackButton
