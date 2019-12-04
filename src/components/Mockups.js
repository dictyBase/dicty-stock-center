// @flow
import React from "react"
import { Link } from "react-router-dom"

/**
 * Mockups displays links to various mockups for the stock pages.
 */

const Mockups = () => (
  <center>
    <ul style={{ listStyle: "none" }}>
      <li>
        <Link to="/strains/DBS0351367">
          Details page with simple add to cart button
        </Link>
      </li>
      <li>
        <Link to="/strains/quantity/DBS0351367">
          Details page with quantity dropdown
        </Link>
      </li>
      <li>
        <Link to="/strains/tabs/DBS0351367">
          Details page with phenotype tab
        </Link>
      </li>
      <li>
        <Link to="/strains/phenotype/DBS0351367">
          Details page with phenotypes in standard display
        </Link>
      </li>
    </ul>
  </center>
)

export default Mockups
