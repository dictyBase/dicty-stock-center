import React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./homeStyles"

/**
 * StandardOperatingProcedures displays the SOP link (Box PDF).
 */

const StandardOperatingProcedures = () => {
  const classes = useStyles({ panelBackground: "grey" })

  return (
    <Box className={classes.panel}>
      <a
        className={classes.sopLink}
        href="https://betastorage.dictybase.org/uploads/documents/DSC%20SOP.pdf"
        rel="noopener noreferrer"
        target="_blank">
        Standard Operating Procedures
      </a>
    </Box>
  )
}

export default StandardOperatingProcedures
