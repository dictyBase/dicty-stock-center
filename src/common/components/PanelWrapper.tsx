import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  heading: {
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  },
  summary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  details: {
    padding: "0px",
  },
  innerContent: {
    width: "100%",
  },
}))

type Props = {
  /** The title to display for the panel */
  title: string
  /** Children passed to component */
  children: React.ReactNode
}

/**
 * This is a basic panel wrapper that uses Material-UI for the design.
 * It is used for all panel implementations.
 */

const PanelWrapper = ({ title, children }: Props) => {
  const classes = useStyles()

  return (
    <Box>
      <Accordion defaultExpanded>
        <AccordionSummary className={classes.summary}>
          <Typography
            variant="h2"
            className={classes.heading}
            component={"div"}
            data-testid="panel-title">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          className={classes.details}
          data-testid="panel-details">
          <div className={classes.innerContent}>{children}</div>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default PanelWrapper
