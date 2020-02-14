import React, { Fragment } from "react"
import { useQuery } from "@apollo/react-hooks"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
import Loader from "components/common/Loader"
import InfoPageView from "./InfoPageView"
import { GET_CONTENT_BY_SLUG } from "queries/queries"
import { NAMESPACE } from "constants/dsctypes"

/**
 * Fetches the data for the desired info page
 */

const InfoPage = () => {
  const { name } = useParams()
  const { loading, error, data } = useQuery(GET_CONTENT_BY_SLUG, {
    variables: {
      slug: `${NAMESPACE}-${name}`,
    },
  })

  if (loading) {
    return <Loader />
  }

  if (error || name === undefined) {
    return <div>got an error</div>
  }

  return (
    <Fragment>
      <Helmet>
        <title>
          {name.charAt(0).toUpperCase() + name.slice(1)} Information - Dicty
          Stock Center
        </title>
        <meta
          name="description"
          content="The Dicty Stock Center is a rapidly growing central repository for Dictyostelium discoideum strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies."
        />
      </Helmet>
      <InfoPageView data={data.contentBySlug} />
    </Fragment>
  )
}

export default InfoPage
