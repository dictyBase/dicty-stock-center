import React from "react"
import useStyles from "./homeStyles"

/**
 * StandardOperatingProcedures displays the SOP link (Box PDF).
 */

const StandardOperatingProcedures = () => {
  const classes = useStyles()

  return (
    <div className={classes.panelGray}>
      <a
        className={classes.sopLink}
        href="https://northwestern.box.com/s/p0f8m70whgiuib2u0wt8gtn497ncmq8i"
        rel="noopener noreferrer"
        target="_blank">
        Standard Operating Procedures
      </a>
    </div>
  )
}

export default StandardOperatingProcedures
