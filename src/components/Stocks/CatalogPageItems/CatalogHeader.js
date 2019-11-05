import React from "react"

type Props = {
  /** The title of the page (generally stock ID) */
  title: string,
}

/**
 * StockDetailsHeader is the header at the top of every stock details page.
 */

const CatalogHeader = ({ title }: Props) => (
  <h1 style={{ textAlign: "center" }}>{title}</h1>
)

export default CatalogHeader
