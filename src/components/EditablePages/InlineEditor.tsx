import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PageEditor } from "dicty-components-page-editor"
import useAuthorization from "hooks/useAuthorization"
import { UPDATE_CONTENT } from "graphql/mutations"

const useStyles = makeStyles(() => ({
  inlineLink: {
    cursor: "pointer",
  },
  toolbar: {
    backgroundColor: "#fafafa",
    borderRadius: "2px",
    border: "1px solid #ddd",
    padding: "5px",
    width: "100%",
    display: "inline-block",
  },
  editorGrid: {
    marginTop: "4px",

    "& a": {
      color: "#004080",
      textDecoration: "none",
    },
  },
  editButton: {
    fontSize: "0.9em",
    color: "#337ab7",
    "&:hover": {
      color: "#337ab7",
      backgroundColor: "transparent",
    },
  },
  saveButton: {
    width: "100%",
    backgroundColor: "#15317e",
  },
  cancelButton: {
    width: "100%",
  },
  cancelButtonGrid: {
    marginRight: "4px",
    marginTop: "4px",
  },
  saveButtonGrid: {
    marginTop: "4px",
  },
  container: {
    "[contenteditable='true']:focus": {
      outline: "none",
    },
  },
}))

type Props = {
  data: {
    id: string
    updated_by: string
    content: string
    slug: string
  }
}

/**
 * Inline editor for all inline editable content
 */

const InlineEditor = ({ data }: Props) => {
  const [readOnly, setReadOnly] = React.useState(true)
  const [value, setValue] = useState(data.content)
  const { canEditPages, verifiedToken, user } = useAuthorization()
  const [updateContent] = useMutation(UPDATE_CONTENT)
  const classes = useStyles()

  const onSave = value => {
    updateContent({
      variables: {
        input: {
          id: data.id,
          updated_by: user.id,
          content: JSON.stringify(value.toJSON()),
        },
      },
    })
    setValue(value)
    setReadOnly(true)
  }

  const onCancel = () => {
    setValue(value)
    setReadOnly(true)
  }

  if (readOnly) {
    return (
      <>
        <PageEditor
          pageContent={data.content}
          readOnly={true}
          onSave={onSave}
          onCancel={onCancel}
        />
        {canEditPages && verifiedToken && (
          <div>
            {canEditPages && verifiedToken && readOnly && (
              <span>
                <Button
                  className={classes.editButton}
                  color="primary"
                  onClick={() => setReadOnly(false)}
                  title="Edit">
                  <FontAwesomeIcon icon="pencil-alt" /> Edit
                </Button>
              </span>
            )}
          </div>
        )}
      </>
    )
  }

  return (
    <div>
      <PageEditor
        pageContent={data.content}
        readOnly={false}
        onSave={onSave}
        onCancel={onCancel}
      />
    </div>
  )
}

export default InlineEditor
