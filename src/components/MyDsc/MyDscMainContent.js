// @flow
import React from "react"
import PanelWrapper from "components/common/PanelWrapper"
import useStyles from "./myDscStyles"

type Props = {
  /** User account data */
  data: {
    id: string,
    attributes: {
      email: string,
      name: string,
    },
  },
  /** Account provider (i.e. orcid, google) */
  provider: string,
}

/**
 * MyDscMainContent currently displays the user's account information.
 */

const MyDscMainContent = ({ data, provider }: Props) => {
  const classes = useStyles()

  return (
    <PanelWrapper title="Personal Information">
      <div className={classes.innerPanel}>
        {data.id && <h3>Id: {data.id}</h3>}
        {data.attributes.email && <h3>Email: {data.attributes.email}</h3>}
        {data.attributes.name && <h3>Name: {data.attributes.name}</h3>}
        <h3>Provider: {provider}</h3>
      </div>
    </PanelWrapper>
  )
}

export default MyDscMainContent
