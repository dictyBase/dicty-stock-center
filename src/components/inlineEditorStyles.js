const styles = () => ({
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
})

export default styles
