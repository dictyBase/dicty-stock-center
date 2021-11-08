import React from "react"
import { useNavigate } from "react-router-dom"
import Box from "@material-ui/core/Box"
import { PageEditor } from "dicty-components-page-editor"
import { useCreateContentMutation } from "dicty-graphql-schema"
import AddPageBanner from "./AddPageBanner"
import { useAuthStore } from "features/Authentication/AuthStore"
import useAuthorization from "common/hooks/useAuthorization"
import NAMESPACE from "common/constants/namespace"
import { theme } from "app/layout/AppProviders"

/**
 * This is the view component so an authorized user can add a new page.
 */

const AddPage = () => {
  const {
    state: { token },
  } = useAuthStore()
  const { user } = useAuthorization()
  const history = useNavigate()
  const [createContent] = useCreateContentMutation({
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
  const [textValue, setTextValue] = React.useState("")
  const [textValueError, setTextValueError] = React.useState(false)

  const handleSaveClick = (value: any) => {
    if (textValue === "") {
      setTextValueError(true)
      return
    }
    createContent({
      variables: {
        input: {
          name: textValue,
          created_by: user.id,
          content: JSON.stringify(value),
          namespace: NAMESPACE,
        },
      },
    })
    setTimeout(() => {
      history(`/information/${textValue}`)
    }, 800)
  }

  const handleCancelClick = () => {
    history("/information")
  }

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <AddPageBanner
        textValue={textValue}
        setTextValue={setTextValue}
        textValueError={textValueError}
        setTextValueError={setTextValueError}
      />
      <PageEditor
        handleSave={handleSaveClick}
        handleCancel={handleCancelClick}
        readOnly={false}
        theme={theme}
      />
    </Box>
  )
}

export default AddPage
