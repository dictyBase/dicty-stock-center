import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExternalLinkIcon from "common/components/ExternalLinkIcon"
import { Publication } from "../Details/types/props"

const useStyles = makeStyles({
  bold: {
    fontWeight: 700,
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

type Props = {
  publication?: Publication
}

const PhenotypePublicationDisplay = ({ publication }: Props) => {
  const classes = useStyles()

  if (!publication) {
    return <div />
  }

  return (
    <React.Fragment>
      <span className={classes.bold}>
        {listAuthors(publication.authors)} (
        {getYearFromTimestamp(publication.pub_date)})
      </span>{" "}
      '{publication.title}' <em>{publication.journal}</em> {publication.volume}:
      {publication.pages}{" "}
      <ExternalLinkIcon
        url={`/publication/${publication.id}`}
        title="Visit dictyBase publication page"
      />
    </React.Fragment>
  )
}

export { listAuthors, getYearFromTimestamp }
export default PhenotypePublicationDisplay
