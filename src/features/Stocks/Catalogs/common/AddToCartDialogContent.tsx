import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
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
        <Typography gutterBottom>
          <strong>
            <Link to={`/${strainOrPlasmid(item.id)}/${item.id}`}>
              {item.name}
            </Link>
          </strong>
        </Typography>
        <Typography gutterBottom>
          <em>{item.summary}</em>
        </Typography>
        <Typography variant="body2">{item.id}</Typography>
      </DialogContentText>
    ))}
  </DialogContent>
)

export default AddToCartDialogContent
