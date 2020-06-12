import React from "react"
import { Link } from "react-router-dom"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import strainOrPlasmid from "common/utils/strainOrPlasmid"

type Props = {
  /** Stock data */
  data: Array<{
    /** ID number */
    id: string
    /** Label/name */
    name: string
    /** Summary/description */
    summary: string
  }>
}

/**
 * AddToCartDialogContent is the main content of the add to cart dialog box.
 */

export const AddToCartDialogContent = ({ data }: Props) => (
  <DialogContent>
    {data.map((item, index) => (
      <DialogContentText key={index}>
        <strong>
          <Link to={`/${strainOrPlasmid(item.id)}/${item.id}`}>
            {item.name}
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

export default AddToCartDialogContent
