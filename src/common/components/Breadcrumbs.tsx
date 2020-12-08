import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { default as MuiBreadCrumbs } from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import { useLocation, Link as RouterLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import capitalizeString from "common/utils/capitalizeString"

const useStyles = makeStyles({
  icon: {
    marginRight: "5px",
  },
})

const breadcrumbNameMap: { [key: string]: string } = {
  "/information": "Information",
  "/order": "Order",
  "/mydsc": "MyDSC",
  "/strains": "Strains",
  "/plasmids": "Plasmids",
  "/phenotypes": "Phenotypes",
}

const Breadcrumbs = () => {
  const classes = useStyles()
  const location = useLocation()
  // get list of pathnames, filter out empty strings
  const pathnames = location.pathname.split("/").filter((x) => x)

  return (
    <MuiBreadCrumbs aria-label="breadcrumb">
      {pathnames.length > 0 && (
        <Link color="inherit" component={RouterLink} to="/">
          <FontAwesomeIcon icon="home" className={classes.icon} />
          Home
        </Link>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
        const isLast = index === pathnames.length - 1
        return isLast ? (
          <Typography key={routeTo} color="textPrimary">
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
