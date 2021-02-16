import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import Typography from "@material-ui/core/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Publication } from "features/Stocks/Details/types"

const useStyles = makeStyles({
  authors: {
    color: grey[800],
    fontWeight: 600,
  },
})

// get author last names, replace last element with "&"
// example return: "Samereier, Baumann, Meyer & Gräf (2010)"
const listAuthors = (authors: Publication["authors"]) => {
  const lastNames = authors.map((author) => author.last_name)
  const finalName = lastNames.pop()
  return lastNames.length ? lastNames.join(", ") + " & " + finalName : finalName
}

// get the year from a timestamp in format of "2004-06-11T00:00:00.000Z"
const getYearFromTimestamp = (date: string) => {
  const newDate = new Date(date)
  return newDate.getFullYear()
}

// getPubLink returns a doi url if the pubmed id is missing
const getPubLink = (id: string, doi: string) => {
  if (id === "") {
    return `https://doi.org/${doi}`
  }
  return `/publication/${id}`
}

// getJournalInfo displays the volume and pages if that info exists
const getJournalInfo = (volume: string, pages: string) => {
  if (volume !== "" && pages !== "") {
    return `${volume}:${pages}`
  }
  return ""
}

type Props = {
  /** List of publications */
  publications?: Array<Publication>
}

/**
 * PublicationsDisplay handles the display of publications, primarily for use
 * on the stock details pages.
 */
const PublicationsDisplay = ({ publications }: Props) => {
  const classes = useStyles()

  if (!publications) {
    return <div />
  }

  return (
    <React.Fragment>
      {publications.map((pub, index) => (
        <Typography
          component="span"
          data-testid="publication-display"
          key={index}>
          <Typography component="span" className={classes.authors}>
            {listAuthors(pub.authors)} ({getYearFromTimestamp(pub.pub_date)})
          </Typography>{" "}
          '{pub.title}' <em>{pub.journal}</em>{" "}
          {getJournalInfo(pub.volume, pub.pages)}{" "}
          <a href={getPubLink(pub.id, pub.doi)} title="Visit publication page">
            <FontAwesomeIcon icon="external-link-alt" size="sm" />
          </a>
        </Typography>
      ))}
    </React.Fragment>
  )
}

export { listAuthors, getYearFromTimestamp, getPubLink, getJournalInfo }
export default PublicationsDisplay
