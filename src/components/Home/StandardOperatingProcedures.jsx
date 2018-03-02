// @flow
import React from "react"
import { PanelGray, SopLink } from "styles"

/**
 * Displays the SOP link (Box PDF)
 */

const Materials = () => {
  return (
    <PanelGray>
      <SopLink
        href="https://northwestern.box.com/s/p0f8m70whgiuib2u0wt8gtn497ncmq8i"
        rel="noopener noreferrer"
        target="_blank">
        Standard Operating Procedures
      </SopLink>
    </PanelGray>
  )
}

export default Materials
