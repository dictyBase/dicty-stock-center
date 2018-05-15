// @flow
import React from "react"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelBody
} from "dicty-components-panel"
import Personal from "./Personal"
import Organization from "./Organization"
import Address from "./Address"
import Contact from "./Contact"

type Props = {
  firstName: Object,
  lastName: Object,
  email: Object,
  org: Object,
  group: Object,
  address: Object,
  address2: Object,
  city: Object,
  state: Object,
  zip: Object,
  country: Object,
  phone: Object,
  title: string
}

const User = (props: Props) => {
  const {
    firstName,
    lastName,
    email,
    org,
    group,
    address,
    address2,
    city,
    state,
    zip,
    country,
    phone,
    title
  } = props
  const panelStyle = { border: "1px solid #D2D7D3" }
  const headerStyle = {
    backgroundColor: "#337ab7",
    padding: "20px",
    borderColor: "#2e6da4"
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
        <Personal firstName={firstName} lastName={lastName} email={email} />
        <Organization org={org} group={group} />
        <Address
          address={address}
          address2={address2}
          city={city}
          state={state}
          zip={zip}
          country={country}
        />
        <Contact phone={phone} />
      </PanelBody>
    </Panel>
  )
}

export default User
