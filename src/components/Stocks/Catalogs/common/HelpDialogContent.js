// @flow
import React from "react"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"

/**
 * HelpDialogContent displays the actual content of the help dialog box.
 */

export const HelpDialogContent = () => (
  <DialogContent>
    <DialogContentText>
      The catalog page data is provided as as infinite scroll. As you move down
      the page, more data is continuously loaded, creating a seamless
      experience.
    </DialogContentText>
    <DialogContentText>
      The catalog content can be filtered by either selecting an option from the
      left dropdown menu (coming soon), or by performing a search. The search
      box provides a dropdown of available fields. Once you select a field, type
      in your query and hit enter to receive the filtered results.
    </DialogContentText>
    <DialogContentText>
      The ellipsis icon on the right side of the app bar provides options to
      download the shown data in either PDF or CSV format (coming soon).
    </DialogContentText>
    <DialogContentText>
      Each row of data contains checkboxes, which if toggled will produce new
      icons to add the items to cart or download a PDF containing those
      selections. Hovering over an item in the list will also show an "add to
      cart" button if the item is available in the DSC.
    </DialogContentText>
  </DialogContent>
)

export default HelpDialogContent
