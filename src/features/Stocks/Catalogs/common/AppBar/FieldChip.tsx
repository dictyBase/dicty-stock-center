import { Chip, Typography } from "@material-ui/core"
import { DropDown } from "./AppBarSearch"
import DeleteIcon from "@material-ui/icons/Cancel"

interface FieldChipProps {
  searchValue: string
  option: DropDown
  onDelete: () => void
}

const FieldChip = ({ searchValue, option, onDelete }: FieldChipProps) => {
  if (option.value === "none") return <></>

  if (searchValue === "" && option.value !== "none") {
    return <Typography>{option.name}:</Typography>
  }
  return (
    <Chip
      label={
        <div>
          {option.name} : <b>{searchValue}</b>
        </div>
      }
      size={"small"}
      variant="outlined"
      onDelete={onDelete}
      deleteIcon={
        <DeleteIcon role="remove-field" aria-hidden="false" focusable="true" />
      }
    />
  )
}

export default FieldChip
