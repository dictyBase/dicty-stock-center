import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import { PageEditor } from "dicty-components-page-editor"
import {
  useUpdateContentMutation,
  ContentBySlugQuery,
} from "dicty-graphql-schema"
import useAuthorization from "common/hooks/useAuthorization"
import { useAuthStore } from "features/Authentication/AuthStore"
import { theme } from "app/layout/AppProviders"

const useStyles = makeStyles((theme) => ({
  editor: {
    "& a": {
      cursor: "pointer",
    },
  },
}))

type Params = {
  /** Slug name from URL */
  name: string
}

type Props = {
  location: {
    state: {
      data: ContentBySlugQuery["contentBySlug"]
    }
  }
}

/**
 * Allows editing of the info page components (i.e. Deposit, Payment, Order)
 */
const EditInfoPage = ({ location }: Props) => {
  const classes = useStyles()
  const {
    state: { token },
  } = useAuthStore()
  const {
    state: { data },
  } = location
  const { user } = useAuthorization()
  const [updateContent] = useUpdateContentMutation({
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
  const history = useHistory()
  const { name } = useParams<Params>()

  const prevURL = `/information/${name}`

  const handleSaveClick = (value: any) => {
    if (data?.id === undefined) {
      return
    }
    updateContent({
      variables: {
        input: {
          id: data.id,
          updated_by: user.id,
          content: JSON.stringify(value),
        },
      },
    })
    setTimeout(() => history.push(prevURL), 1000)
  }

  const handleCancelClick = () => {
    history.push(prevURL)
  }

  return (
    <Box mt={2} className={classes.editor}>
      <PageEditor
        pageContent={data?.content}
        handleSave={handleSaveClick}
        handleCancel={handleCancelClick}
        theme={theme}
        readOnly={false}
      />
    </Box>
  )
}

export default EditInfoPage
