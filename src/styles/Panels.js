import styled from "styled-components"

export const PanelGreen = styled.div`
  background-color: #dff0d8;
  border: 1px solid #dff0d8;
  margin: 15px auto;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
`

export const EditPanel = styled.div`
  /* border: 1px solid #ddd; */
  /* padding: 10px; */
  [contenteditable="true"]:focus {
    outline: none;
  }
`
