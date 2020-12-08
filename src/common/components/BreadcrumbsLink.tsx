import React from "react"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import { Link as RouterLink } from "react-router-dom"
import { capitalizeFirstCharacter } from "common/utils/stringCapitalizations"

const breadcrumbNameMap: { [key: string]: string } = {
  "/information": "Information",
  "/order": "Order",
  "/mydsc": "MyDSC",
  "/strains": "Strains",
  "/plasmids": "Plasmids",
  "/phenotypes": "Phenotypes",
}

const nonClickableRoutes = ["information", "order", "phenotypes"]

type Props = {
  /** Pathname from URL (i.e. information) */
  pathname: string
}

/**
 * BreadcrumbsLink handles the display of any breadcrumbs that are not the
 * final list item.
 */

const BreadcrumbsLink = ({ pathname }: Props) => {
  if (nonClickableRoutes.includes(pathname)) {
    return (
      <Typography color="textPrimary">
        {capitalizeFirstCharacter(pathname)}
      </Typography>
    )
  }

  const route = `/${pathname}`

  return (
    <Link color="inherit" component={RouterLink} to={route}>
      {breadcrumbNameMap[route]}
    </Link>
  )
}

export default BreadcrumbsLink
