// @flow
import React from "react"
import OauthSignInButton from "components/authentication/OauthSignInButton"
import OauthSignHandler from "components/authentication/OauthSignHandler"
import { Flex, Box } from "rebass"
import {
  DictyHeader,
  GoogleButton,
  FacebookButton,
  LinkedInButton,
  OrcidButton
} from "styles"

/**
 * Component that displays all of the social login buttons
 */

const Login = () => {
  return (
    <Flex justify="center">
      <Box w={[1, 1 / 2, 1 / 3]}>
        <DictyHeader>
          <h1>Log in</h1>
        </DictyHeader>
        <GoogleButton>
          <OauthSignInButton provider="google" />
        </GoogleButton>
        <FacebookButton>
          <OauthSignInButton provider="facebook" />
        </FacebookButton>
        <LinkedInButton>
          <OauthSignInButton provider="linkedin" />
        </LinkedInButton>
        <OrcidButton>
          <OauthSignInButton provider="orcid" />
        </OrcidButton>
        <OauthSignHandler />
      </Box>
    </Flex>
  )
}

export default Login
