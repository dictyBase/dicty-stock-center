import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
import Loader from "common/components/Loader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import InfoPageView from "./InfoPageView"
import { GET_CONTENT_BY_SLUG } from "common/graphql/queries"
import NAMESPACE from "common/constants/namespace"

const metaContent =
  "The Dicty Stock Center is a rapidly growing central repository for Dictyostelium discoideum strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies."
const capitalizedName = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1)

/**
 * InfoPageContainer fetches the data for the desired editable page.
 */

const InfoPageContainer = () => {
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
    return <GraphQLErrorPage error={error} />
  }

  return (
    <>
      <Helmet>
        <title>{capitalizedName(name)} Information - Dicty Stock Center</title>
        <meta name="description" content={metaContent} />
      </Helmet>
      <InfoPageView data={data.contentBySlug} />
    </>
  )
}

export default InfoPageContainer
