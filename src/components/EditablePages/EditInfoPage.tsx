import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { useHistory, useParams } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { PageEditor } from "dicty-components-page-editor"
import useAuthorization from "hooks/useAuthorization"
import { UPDATE_CONTENT } from "graphql/mutations"

const useStyles = makeStyles(() => ({
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "90%",
    "@media (min-width: 1300px)": {
      width: "80%",
    },
  },
  editor: {
    "& a": {
      color: "#004080",
      textDecoration: "none",
    },
  },
  error: {
    textAlign: "center",
    marginTop: 50,
  },
}))

type Props = {
  location: {
    state: {
      /** Content API data */
      data: {
        id: string
        content: string
        slug: string
        name: string
        created_by: {
          id: string
          first_name: string
          last_name: string
          roles: Array<{
            role: string
          }>
        }
        /** User data for last person to update page */
        updated_by: {
          id: string
          first_name: string
          last_name: string
          updated_at: string
          roles: Array<{
            role: string
          }>
        }
      }
    }
  }
}

/**
 * Allows editing of the info page components (i.e. Deposit, Payment, Order)
 */
const EditInfoPage = ({ location }: Props) => {
  const classes = useStyles()
  const {
    state: { data },
  } = location
  const { user } = useAuthorization()
  const [updateContent] = useMutation(UPDATE_CONTENT)
  const history = useHistory()
  const { name } = useParams()

  const prevURL = `/information/${name}`

  const onSave = (value: any) => {
    updateContent({
      variables: {
        input: {
          id: data.id,
          updated_by: user.id,
          content: JSON.stringify(value.toJSON()),
        },
      },
    })
    history.push(prevURL)
  }

  const onCancel = () => {
    history.push(prevURL)
  }

  return (
    <Grid container justify="center">
      <Grid item xs={11} lg={8}>
        <div className={classes.editor}>
          <PageEditor
            pageContent={data.content}
            onCancel={onCancel}
            onSave={onSave}
            readOnly={false}
          />
        </div>
      </Grid>
    </Grid>
  )
}

export default EditInfoPage
