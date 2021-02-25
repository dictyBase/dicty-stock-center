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
        href="https://northwestern.box.com/s/p0f8m70whgiuib2u0wt8gtn497ncmq8i"
        rel="noopener noreferrer"
        target="_blank">
        Standard Operating Procedures
      </a>
    </Box>
  )
}

export default StandardOperatingProcedures
