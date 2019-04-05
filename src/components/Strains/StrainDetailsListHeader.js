// @flow
import React from "react"

type Props = {
  /** The header of the strain details list */
  title: string,
}

/**
 * StrainDetailsListHeader is the header at the top of the strain details section.
 */

const StrainDetailsListHeader = ({ title }: Props) => (
  <h2 style={{ textAlign: "center" }}>{title}</h2>
)

export default StrainDetailsListHeader
