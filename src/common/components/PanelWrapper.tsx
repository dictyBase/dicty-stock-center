import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: "#fff",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  },
  summary: {
    backgroundColor: "rgb(46, 109, 164)",
    marginTop: "0px",
  },
  details: {
    padding: 0,
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
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary className={classes.summary}>
          <Typography
            className={classes.heading}
            component={"div"}
            data-testid="panel-title">
            <h3>{title}</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          className={classes.details}
          data-testid="panel-details">
          <div className={classes.innerContent}>{children}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default PanelWrapper
