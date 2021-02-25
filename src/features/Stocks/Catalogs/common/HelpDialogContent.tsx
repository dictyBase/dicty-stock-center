import React from "react"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"

/**
 * HelpDialogContent displays the actual content of the help dialog box.
 */

export const HelpDialogContent = () => (
  <DialogContent>
    <DialogContentText>
      The stock catalogs can be browsed by using the available dropdown menus or
      by searching for items directly.
    </DialogContentText>
    <DialogContentText>
      Currently the search box will search through our entire catalog so there
      is no need to preselect a dropdown.
    </DialogContentText>
    <DialogContentText>
      If you are looking for a specific stock ID, enter that ID into the
      searchbox and press enter and you will be redirected to the individual
      details page for that particular item.
    </DialogContentText>
  </DialogContent>
)

export default HelpDialogContent
