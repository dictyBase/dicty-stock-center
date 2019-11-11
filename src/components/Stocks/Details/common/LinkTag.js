// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    backgroundColor: palette.grey[200],
    borderRadius: "16px",
    "&:hover, &.Mui-focusVisible": {
      "& $icon": {
        color: palette.primary.dark,
        marginLeft: spacing(1),
        visibility: "visible",
        opacity: 1,
      },
    },
  },
  label: {
    transition: "0.2s",
    textTransform: "initial",
  },
  icon: {
    visibility: "hidden",
    opacity: 0,
    transition: "0.3s",
    color: palette.common.white,
    marginLeft: -spacing(1.5),
    "& .MuiIcon--fa": {
      padding: 0,
    },
  },
}))

type Props = {
  /** The item to link to */
  item: string,
  /** The subroute to use (i.e. publication, gene) */
  route: string,
}

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
