// @flow
import React from "react"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelBody
} from "dicty-components-panel"
import PaymentInfo from "./PaymentInfo"

type Props = {
  payMethod: Object,
  poNum: Object,
  title: string
}

const PaymentMethod = (props: Props) => {
  const { payMethod, poNum, title } = props
  const panelStyle = {
    border: "1px solid #D2D7D3",
    height: "100%"
  }
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
        <PaymentInfo payMethod={payMethod} poNum={poNum} />
      </PanelBody>
    </Panel>
  )
}

export default PaymentMethod
