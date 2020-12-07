import React from "react"
import PanelWrapper from "common/components/PanelWrapper"
import useStyles from "./myDscStyles"

type Props = {
  data: {
    id: string
    email: string
    first_name: string
    last_name: string
  }
  provider: string
}

/**
 * MyDscMainContent currently displays the user's account information.
 */

const MyDscMainContent = ({ data, provider }: Props) => {
  const classes = useStyles()

  const { first_name, last_name, id, email } = data

  const name = `${first_name} ${last_name}`

  return (
    <PanelWrapper title="Personal Information">
      <div className={classes.innerPanel}>
        <h3>Id: {id}</h3>
        <h3>Email: {email}</h3>
        <h3>Name: {name}</h3>
        <h3>Provider: {provider}</h3>
      </div>
    </PanelWrapper>
  )
}

export default MyDscMainContent
