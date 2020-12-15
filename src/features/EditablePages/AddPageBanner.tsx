import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

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
    <div className={classes.banner}>
      <h2>Add Editable Page for Route:</h2>
      <h3 className={classes.route}>
        /information/
        <TextField
          id="add-page-route"
          variant="outlined"
          value={textValue}
          autoFocus
          onChange={handleChange}
          placeholder="Enter route here..."
        />
      </h3>
      <Typography variant="body2" color="inherit">
        <em>
          Only lowercase letters, numbers and hyphens are allowed for routes
        </em>
      </Typography>
      {textValueError && (
        <Typography variant="body1" color="error">
          Please enter a route before saving
        </Typography>
      )}
    </div>
  )
}

export default AddPageBanner
