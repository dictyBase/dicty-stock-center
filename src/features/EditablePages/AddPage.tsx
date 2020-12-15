import React from "react"
import { useMutation } from "@apollo/client"
import { useHistory } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import { PageEditor } from "dicty-components-page-editor"
import ErrorNotification from "features/Authentication/ErrorNotification"
import { useAuthStore } from "features/Authentication/AuthStore"
import useAuthorization from "common/hooks/useAuthorization"
import { CREATE_CONTENT } from "common/graphql/mutations"
import NAMESPACE from "common/constants/namespace"
import { theme } from "app/layout/AppProviders"

const useStyles = makeStyles(() => ({
  banner: {
    minHeight: "45px",
    textAlign: "center",
    marginBottom: "20px",
  },
  route: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const newTheme = createMuiTheme({
  ...theme,
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: "7px",
      },
    },
  },
})

const error =
  "Your login token is expired. Please log out and then log back in to regain full user access."

/**
 * This is the view component so an authorized user can add a new page.
 */

const AddPage = () => {
  const [{ token }] = useAuthStore()
  const { user, canEditPages, verifiedToken } = useAuthorization()
  const history = useHistory()
  const classes = useStyles()
  const [createContent] = useMutation(CREATE_CONTENT, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
  const [textValue, setTextValue] = React.useState("")

  const onSave = (value: any) => {
    createContent({
      variables: {
        input: {
          name: textValue,
          created_by: user.id,
          content: JSON.stringify(value.toJSON()),
          namespace: NAMESPACE,
        },
      },
    })
    setTimeout(() => {
      history.push(`/information/${textValue}`)
    }, 800)
  }

  const onCancel = () => {
    history.push("/information")
  }

  return (
    <ThemeProvider theme={newTheme}>
      {canEditPages && !verifiedToken && <ErrorNotification error={error} />}
      <Grid container wrap="wrap" justify="center">
        <Grid item xs={12}>
          <div className={classes.banner}>
            <h2>Add Editable Page for Route:</h2>
            <h3 className={classes.route}>
              /information/
              <TextField
                id="add-page-route"
                variant="outlined"
                value={textValue}
                onChange={(event) => setTextValue(event.target.value)}
              />
            </h3>
          </div>
        </Grid>
        <br />
        <Grid item xs={12}>
          <PageEditor onCancel={onCancel} onSave={onSave} newPage={true} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default AddPage
