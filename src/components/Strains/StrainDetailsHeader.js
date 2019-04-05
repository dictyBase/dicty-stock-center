// @flow
import React from "react"

type Props = {
  /** The title of the page (generally strain ID) */
  title: string,
}

/**
 * StrainDetailsHeader is the header at the top of every strain details page.
 */

const StrainDetailsHeader = ({ title }: Props) => (
  <h1 style={{ textAlign: "center" }}>{title}</h1>
)

export default StrainDetailsHeader
