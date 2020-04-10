import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ValidationDialog from "./ValidationDialog"
import useStyles from "./formStyles"

type Props = {
  /** List of fields */
  fields: Array<string>
  /** Current order form page number */
  pageNum: number
  /** Function to set the page number */
  setPageNum: Function
}

/**
 * ContinueButton displays the continue button on each order form page.
 */

const ContinueButton = ({ pageNum, setPageNum, fields }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const classes = useStyles()

  const validationChecker = () => {
    if (fields.includes("")) {
      setModalOpen(true)
      setPageNum(pageNum)
    }
  }

  const handleClick = () => {
    setPageNum(pageNum + 1)
    validationChecker()
  }

  return (
    <>
      <Button
        size="large"
        className={classes.continueBtn}
        onClick={handleClick}>
        Continue &nbsp;
        <FontAwesomeIcon icon="arrow-circle-right" />
      </Button>
      {modalOpen && (
        <ValidationDialog modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </>
  )
}

export default ContinueButton
