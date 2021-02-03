import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { blue } from "@material-ui/core/colors"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: blue[100],
    borderRadius: "16px",
    lineHeight: 1.5,
    "&:hover, &.Mui-focusVisible": {
      "& $icon": {
        color: theme.palette.primary.dark,
        marginLeft: theme.spacing(1),
        visibility: "visible",
        opacity: 1,
      },
    },
    marginRight: "5px",
  },
  label: {
    transition: "0.2s",
    textTransform: "initial",
  },
  icon: {
    visibility: "hidden",
    opacity: 0,
    transition: "0.3s",
    color: theme.palette.common.white,
    marginLeft: -theme.spacing(1.5),
    "& .MuiIcon--fa": {
      padding: 0,
    },
  },
}))

type Props = {
  /** The item to link to */
  item: string
  /** The subroute to use (i.e. publication, gene) */
  route: string
}

/**
 * LinkTag is a tag-style display for showing links.
 */
const LinkTag = ({ item, route }: Props) => {
  const classes = useStyles()

  return (
    <Button
      component="a"
      href={`/${route}/${item}`}
      title={`View ${route} ${item}`}
      classes={{ root: classes.root, label: classes.label }}>
      {item}
      <FontAwesomeIcon
        icon="external-link-alt"
        className={classes.icon}
        size="sm"
      />
    </Button>
  )
}

export default LinkTag
