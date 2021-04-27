import React from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
import { useContentBySlugQuery } from "dicty-graphql-schema"
import Loader from "common/components/Loader"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import InfoPageView from "./InfoPageView"
import { pageTitleLookup } from "common/utils/convertPageTitles"
import NAMESPACE from "common/constants/namespace"

const metaContent =
  "The Dicty Stock Center is a rapidly growing central repository for Dictyostelium discoideum strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies."

type Params = {
  /** Slug name from URL */
  name: string
}

/**
 * InfoPageContainer fetches the data for the desired editable page.
 */

const InfoPageContainer = () => {
  const { name } = useParams<Params>()
  const { loading, error, data } = useContentBySlugQuery({
    variables: {
      slug: `${NAMESPACE}-${name}`,
    },
    fetchPolicy: "cache-and-network",
  })

  if (loading) {
    return <Loader />
  }

  if (error || name === undefined) {
    return <GraphQLErrorPage error={error} />
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{pageTitleLookup(name)} - Dicty Stock Center</title>
        <meta name="description" content={metaContent} />
      </Helmet>
      <InfoPageView data={data?.contentBySlug} />
    </React.Fragment>
  )
}

export default InfoPageContainer
