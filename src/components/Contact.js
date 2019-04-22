// @flow
import React from "react"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import { DictyHeader, Container } from "styles"

type Props = {}

/**
 * DSC contact form
 */

const Contact = (props: Props) => (
  <Container>
    <Helmet>
      <title>Contact Us - Dicty Stock Center</title>
      <meta name="description" content="Contact page for Dicty Stock Center" />
    </Helmet>
    <Grid container wrap="wrap" justify="center">
      <Grid item xs={12}>
        <DictyHeader>
          <h1>Contact Us</h1>
        </DictyHeader>
      </Grid>
      <Grid item xs={12}>
        <p>
          For questions, comments, or suggestions, please send us an email&nbsp;
          <a
            href="mailto:dictystocks@northwestern.edu?Subject=Question"
            target="_top">
            (dictystocks@northwestern.edu)
          </a>
        </p>
        <p>We will be adding a working contact form soon.</p>
      </Grid>
    </Grid>
  </Container>
)

export default Contact
