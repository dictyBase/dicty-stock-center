import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import TextField from "../TextField"

/**
 * AdditionalInformation contains a text area for entering any optional comments.
 */

const AdditionalInformation = () => {
  return (
    <Box mt={1} mb={2} p={2}>
      <Typography variant="h3">Comments:</Typography>
      <TextField
        name="comments"
        multiline
        rows="5"
        placeholder="Please enter any comments or special instructions here"
      />
    </Box>
  )
}

export default AdditionalInformation
