import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { PageEditor } from "dicty-components-page-editor"
import Grid from "@material-ui/core/Grid"
import InfoPageViewToolbar from "./InfoPageViewToolbar"
import { Content } from "./types"

type Params = {
  /** Slug name from URL */
  name: string
}

type Props = {
  data: Content
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
    <div key={data.content}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <InfoPageViewToolbar
            handleClick={handleClick}
            lastUpdate={data.updated_at}
            user={data.updated_by}
          />
          <div>
            <PageEditor pageContent={data.content} readOnly />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default InfoPageView
