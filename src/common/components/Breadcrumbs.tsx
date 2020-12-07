import React from "react"
import { default as MuiBreadCrumbs } from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import { useLocation, Link as RouterLink } from "react-router-dom"
import capitalizeString from "common/utils/capitalizeString"

const breadcrumbNameMap: { [key: string]: string } = {
  "/information": "Information",
  "/order": "Order",
  "/mydsc": "MyDSC",
  "/strains": "Strains",
  "/plasmids": "Plasmids",
  "/phenotypes": "Phenotypes",
}

const Breadcrumbs = () => {
  const location = useLocation()
  // get list of pathnames, filter out empty strings
  const pathnames = location.pathname.split("/").filter((x) => x)

  return (
    <MuiBreadCrumbs aria-label="breadcrumb">
      {pathnames.length > 0 && (
        <Link color="inherit" component={RouterLink} to="/">
          Home
        </Link>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
        const isLast = index === pathnames.length - 1
        return isLast ? (
          <Typography key={routeTo}>
            {capitalizeString(name).replaceAll("+", " ")}
          </Typography>
        ) : (
          <Link color="inherit" key={name} component={RouterLink} to={routeTo}>
            {breadcrumbNameMap[routeTo]}
          </Link>
        )
      })}
    </MuiBreadCrumbs>
  )
}

export default Breadcrumbs
