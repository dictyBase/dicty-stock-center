import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import DetailsHeaderCopyIcon from "./DetailsHeaderCopyIcon"
import characterConverter from "common/utils/characterConverter"

const useStyles = makeStyles((theme: Theme) => ({
  name: {
    marginBottom: theme.spacing(2),
  },
  id: {
    marginBottom: theme.spacing(2),
  },
}))

type Props = {
  /** Stock ID */
  id: string
  /** Strain descriptor or plasmid name */
  name: string
}

/**
 * DetailsHeader is the header at the top of every stock details page.
 */

const DetailsHeader = ({ name, id }: Props) => {
  const classes = useStyles()

  return (
    <Box mt={2}>
      <Typography className={classes.name} variant="h1" noWrap>
        {characterConverter(name)}
      </Typography>
      <Typography className={classes.id} variant="h3" color="textSecondary">
        <em>{id}</em>
        <DetailsHeaderCopyIcon id={id} />
      </Typography>
    </Box>
  )
}

export default DetailsHeader
