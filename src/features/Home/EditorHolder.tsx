import React from "react"

interface IEditorHolderProps {
  minHeight: string
  children: React.ReactNode
}

const EditorHolder = ({ minHeight, children }: IEditorHolderProps) => {
  return <div style={{ minHeight: minHeight }}>{children}</div>
}

export default EditorHolder
