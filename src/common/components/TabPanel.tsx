import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

type Props = {
  /** Any content inside the tab panel */
  children: any
  /** Tab value */
  value: number
  /** Index of tab selected */
  index: number
}

/**
 * TabPanel is a simple wrapper for content inside of tab panels.
 */
const TabPanel = ({ children, value, index, ...other }: Props) => (
  <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}>
    {value === index && <Box>{children}</Box>}
  </Typography>
)

export default TabPanel
