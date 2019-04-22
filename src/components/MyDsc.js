// @flow
import React from "react"
import { connect } from "react-redux"
import PanelWrapper from "components/common/PanelWrapper"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import { Container, DictyHeader, Breadcrumb } from "styles"
import type { MapStateToProps } from "react-redux"

type Props = {
  /** the object that contains auth data from current state */
  auth: Object,
}

/**
 * Personalized component that displays the user's login information (ID, email, name, provider)
 */

export const MyDsc = (props: Props) => {
  const { auth } = props

  return (
    <Container>
      <Grid container wrap="wrap" justify="center">
        <Grid item xs={12}>
          <Breadcrumb>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>My DSC</li>
          </Breadcrumb>
        </Grid>
        <Grid item xs={12}>
          <DictyHeader>
            <h2>My DSC</h2>
          </DictyHeader>
        </Grid>
        <Grid item xs={8}>
          <PanelWrapper title="Personal Information">
            {auth.user.data.id && <h3>Id: {auth.user.data.id}</h3>}
            {auth.user.data.attributes.email && (
              <h3>Email: {auth.user.data.attributes.email}</h3>
            )}
            {auth.user.data.attributes.name && (
              <h3>Name: {auth.user.data.attributes.name}</h3>
            )}
            <h3>Provider: {auth.provider}</h3>
          </PanelWrapper>
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(MyDsc)
