// @flow
import React from "react"
import Chip from "@material-ui/core/Chip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
  /** The item to link to */
  item: string,
}

const LinkChip = ({ item }: Props) => (
  <Chip
    label={item}
    component="a"
    href={`/publication/${item}`}
    clickable
    deleteIcon={<FontAwesomeIcon icon="external-link-alt" />}
    onDelete={() => {}}
  />
)

export default LinkChip
