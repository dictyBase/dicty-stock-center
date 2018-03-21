// @flow
import React from "react"
import OauthSignInButton from "components/authentication/OauthSignInButton"
import OauthSignHandler from "components/authentication/OauthSignHandler"
import { Flex, Box } from "rebass"
import FontAwesome from "react-fontawesome"
import {
  DictyHeader,
  GoogleButton,
  FacebookButton,
  LinkedInButton,
  OrcidButton,
  FontAwesomeIconContainer
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
          <FontAwesomeIconContainer>
            <FontAwesome name="google" />
          </FontAwesomeIconContainer>
          <OauthSignInButton provider="google" />
        </GoogleButton>
        <FacebookButton>
          <FontAwesomeIconContainer>
            <FontAwesome name="facebook" />
          </FontAwesomeIconContainer>
          <OauthSignInButton provider="facebook" />
        </FacebookButton>
        <LinkedInButton>
          <FontAwesomeIconContainer>
            <FontAwesome name="linkedin" />
          </FontAwesomeIconContainer>
          <OauthSignInButton provider="linkedin" />
        </LinkedInButton>
        <OrcidButton>
          <FontAwesomeIconContainer>&nbsp;</FontAwesomeIconContainer>
          <OauthSignInButton provider="orcid" />
        </OrcidButton>
        <OauthSignHandler />
      </Box>
    </Flex>
  )
}

export default Login
