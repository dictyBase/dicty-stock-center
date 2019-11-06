// @flow
import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"

const useStyles = makeStyles(({ palette }) => ({
  link: {
    color: palette.primary.main,
    textDecoration: "none",
  },
}))

type Props = {
  /** Stock data */
  data: Array<{
    /** ID number */
    id: string,
    /** Label/name */
    label: string,
    /** Summary/description */
    summary: string,
  }>,
}

/**
 * AddToCartDialogContent is the main content of the add to cart dialog box.
 */

export const AddToCartDialogContent = ({ data }: Props) => {
  const classes = useStyles()

  return (
    <DialogContent>
      {data.map((item, index) => (
        <DialogContentText key={index}>
          <strong>
            <Link className={classes.link} to={`/strains/${item.id}`}>
              {item.label}
            </Link>
          </strong>
          <br />
          <em>{item.summary}</em>
          <br />
          {item.id}
        </DialogContentText>
      ))}
    </DialogContent>
  )
}

export default AddToCartDialogContent
