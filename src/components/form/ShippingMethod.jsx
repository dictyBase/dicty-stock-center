// @flow
import React from "react"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelBody
} from "dicty-components-panel"
import ShippingInfo from "./ShippingInfo"

type Props = {
  shipAccount: Object,
  shipAccountNum: Object,
  title: string
}

const ShippingMethod = (props: Props) => {
  const { title, shipAccount, shipAccountNum } = props
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
        <ShippingInfo
          shipAccount={shipAccount}
          shipAccountNum={shipAccountNum}
        />
      </PanelBody>
    </Panel>
  )
}

export default ShippingMethod
