import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { PageEditor } from "dicty-components-page-editor"
import Box from "@material-ui/core/Box"
import { ContentBySlugQuery } from "dicty-graphql-schema"
import InfoPageViewToolbar from "./InfoPageViewToolbar"
import { theme } from "app/layout/AppProviders"

type Params = {
  /** Slug name from URL */
  name: string
}

type Props = {
  data: ContentBySlugQuery["contentBySlug"]
}

/** Displays the info page data that was fetched from the InfoPage component */

const InfoPageView = ({ data }: Props) => {
  const history = useHistory()
  const { name } = useParams<Params>()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    history.push(`/information/${name}/edit`, {
      data: data,
    })
  }

  return (
    <Box>
      {data?.updated_by && (
        <InfoPageViewToolbar
          handleClick={handleClick}
          lastUpdate={data?.updated_at}
          user={data.updated_by}
        />
      )}
      <PageEditor
        pageContent={data?.content}
        handleSave={() => {}}
        handleCancel={() => {}}
        theme={theme}
        readOnly
      />
    </Box>
  )
}

export default InfoPageView
