import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { default as MuiBreadCrumbs } from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import { useLocation, Link as RouterLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BreadcrumbsLink from "./BreadcrumbsLink"
import { capitalizeEveryWordInString } from "common/utils/stringCapitalizations"

const useStyles = makeStyles({
  icon: {
    marginRight: "5px",
  },
})

/**
 * convertBreadcrumbTitle takes a given breadcrumb and converts it into
 * the desired format
 */
const convertBreadcrumbTitle = (crumb: string) => {
  let title = crumb
  switch (crumb) {
    case "faq":
      title = "FAQs"
      break
    case "mydsc":
      title = "MyDSC"
      break
    case "addpage":
      title = "Add Page"
      break
    default:
      const cleanString = crumb.replaceAll("+", " ").replaceAll("-", " ")
      /** don't return uppercase words if crumb is for phenotype
       * i.e. abolished+protein+phosphorylation
       */
      if (crumb.includes("+")) {
        return cleanString
      }
      // for everything else, capitalize
      return capitalizeEveryWordInString(cleanString)
  }
  return title
}

/**
 * Breadcrumbs displays navigation breadcrumbs for the DSC app.
 */

const Breadcrumbs = () => {
  const classes = useStyles()
  const location = useLocation()
  // get list of pathnames, filter out empty strings
  const pathnames = location.pathname.split("/").filter((x) => x)

  return (
    <MuiBreadCrumbs aria-label="breadcrumb">
      {pathnames.length > 0 && (
        <Link
          color="inherit"
          component={RouterLink}
          to="/"
          data-testid="breadcrumbs-home">
          <FontAwesomeIcon icon="home" className={classes.icon} />
          DSC Home
        </Link>
      )}
      {pathnames.map((pathname, index) => {
        const isLast = index === pathnames.length - 1
        return isLast ? (
          <Typography
            key={pathname}
            color="textPrimary"
            data-testid="breadcrumbs-last">
            {convertBreadcrumbTitle(pathname)}
          </Typography>
        ) : (
          <BreadcrumbsLink key={pathname} pathname={pathname} />
        )
      })}
    </MuiBreadCrumbs>
  )
}

export default Breadcrumbs
