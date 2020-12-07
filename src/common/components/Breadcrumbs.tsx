import React from "react"
import { default as MuiBreadCrumbs } from "@material-ui/core/Breadcrumbs"
import Link, { LinkProps } from "@material-ui/core/Link"
import { useLocation, Link as RouterLink } from "react-router-dom"

const Breadcrumbs = () => {
  const location = useLocation()

  return (
    <MuiBreadCrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/" component={RouterLink}>
        Home
      </Link>
    </MuiBreadCrumbs>
  )
}

export default Breadcrumbs
