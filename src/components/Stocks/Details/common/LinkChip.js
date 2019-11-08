// @flow
import React from "react"
import Chip from "@material-ui/core/Chip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
  /** The item to link to */
  item: string,
  /** The subroute to use (i.e. publication, gene) */
  route: string,
}

const LinkChip = ({ item, route }: Props) => (
  <Chip
    label={item}
    component="a"
    href={`/${route}/${item}`}
    clickable
    deleteIcon={<FontAwesomeIcon icon="external-link-alt" />}
    onDelete={() => {}}
  />
)

export default LinkChip
