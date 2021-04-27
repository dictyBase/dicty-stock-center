import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme: Theme) => ({
  typography: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
}))

const filterText = (text: string) =>
  text.replace(/[^a-zA-Z^\d- ]/g, "").toLowerCase()

type Props = {
  /** Value of route textbox */
  textValue: string
  /** Sets the state to match the value in the text box */
  setTextValue: (arg0: string) => void
  /** Indicates if there was an error with the text value used in the route textbox */
  textValueError: boolean
  /** Sets the boolean value of any text box errors */
  setTextValueError: (arg0: boolean) => void
}

/**
 * AddPageBanner is the banner at the top of AddPage.
 */

const AddPageBanner = ({
  textValue,
  setTextValue,
  textValueError,
  setTextValueError,
}: Props) => {
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(filterText(event.target.value))
    if (textValue !== "") {
      setTextValueError(false)
    }
  }

  return (
    <Box minHeight="45px" textAlign="center" mb={3}>
      <Typography variant="h2" className={classes.typography}>
        Add Editable Page for Route:
      </Typography>
      <Typography variant="h3" className={classes.typography}>
        /information/
        <TextField
          id="add-page-route"
          variant="outlined"
          value={textValue}
          autoFocus
          onChange={handleChange}
          placeholder="Enter route here..."
        />
      </Typography>
      <Box fontStyle="italic">
        <Typography
          variant="body2"
          color="inherit"
          className={classes.typography}>
          Only lowercase letters, numbers and hyphens are allowed for routes
        </Typography>
      </Box>
      {textValueError && (
        <Typography
          variant="body1"
          color="error"
          className={classes.typography}>
          Please enter a route before saving
        </Typography>
      )}
    </Box>
  )
}

export default AddPageBanner
