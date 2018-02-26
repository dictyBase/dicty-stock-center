// @flow
import React, { Component } from "react"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelBody
} from "dicty-components-panel"
import Comments from "./Comments"

type Props = {
  comments: Object,
  title: string
}

export default class ShippingAdditional extends Component<Props> {
  render() {
    const { title, comments } = this.props
    const panelStyle = { border: "1px solid #D2D7D3" }
    const headerStyle = {
      backgroundColor: "#337ab7",
      padding: "20px",
      borderColor: "#4B77BE"
    }
    const titleStyle = {
      color: "#ffffff",
      fontWeight: "200",
      fontSize: "20px"
    }
    return (
      <Panel collapse style={panelStyle}>
        <PanelHeader style={headerStyle}>
          <PanelTitle style={titleStyle}>{title}</PanelTitle>
        </PanelHeader>
        <PanelBody>
          <Comments
            comments={comments}
            rows={"5"}
            placeholder={
              "Please enter any comments or special instructions here"
            }>
            Comments:
          </Comments>
        </PanelBody>
      </Panel>
    )
  }
}
