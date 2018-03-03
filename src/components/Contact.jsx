// @flow
import React, { Component } from "react"
import {
  PanelGroup,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelBody
} from "dicty-components-panel"
import FormGroupInput from "./form/FormGroupInput"
import Comments from "./form/Comments"
import SubmitButton from "./form/SubmitButton"
import { submitEmail } from "actions/contact"
import { reduxForm } from "redux-form"
import { syncValidate } from "forms/validate/contact-form"
import { Flex, Box } from "rebass"
import FontAwesome from "react-fontawesome"
import {
  DictyHeader,
  RequiredText,
  Container,
  HorizontalForm,
  ResetButton
} from "styles"

export const fields = ["name", "email", "subject", "message"]

const theme = {
  headerBackgroundColor: "#f9f9f9",
  headerTextColor: "#000000"
}

type Props = {
  /** the fields of the contact form */
  fields: Object,
  /** function to handle submit */
  handleSubmit: Function,
  /** checks if form is submitting */
  submitting: boolean,
  /** erases the current form content */
  resetForm: Function
}

/**
 * DSC contact form
 */

class Contact extends Component<Props> {
  render() {
    const {
      fields: { name, email, subject, message },
      handleSubmit,
      resetForm,
      submitting
    } = this.props
    return (
      <Container>
        <Flex wrap justify="center">
          <Box>
            <DictyHeader>
              <h1>Contact Us</h1>
            </DictyHeader>
          </Box>
          <Box w={["90%", 3 / 4]}>
            <p>
              For questions, comments, or suggestions, please fill out the form
              below to send us an email&nbsp;
              <a
                href="mailto:dictybase@northwestern.edu?Subject=Question"
                target="_top">
                (dictybase@northwestern.edu)
              </a>
            </p>
          </Box>
          <Box w={["90%", 3 / 4]}>
            <PanelGroup theme={theme}>
              <Panel collapse>
                <PanelHeader style={{ padding: "20px" }}>
                  <PanelTitle>
                    <FontAwesome name="envelope-o" /> Email dictyBase
                  </PanelTitle>
                </PanelHeader>
                <PanelBody style={{ height: "auto" }}>
                  <HorizontalForm onSubmit={handleSubmit}>
                    <FormGroupInput field={name}>
                      <RequiredText title="required field">* </RequiredText>
                      Name:
                    </FormGroupInput>
                    <FormGroupInput field={email}>
                      <RequiredText title="required field">* </RequiredText>
                      Email:
                    </FormGroupInput>
                    <FormGroupInput field={subject}>Subject:</FormGroupInput>
                    <Comments
                      comments={message}
                      rows={"5"}
                      placeholder={"Please enter your message here"}>
                      Message:
                    </Comments>
                    <Flex>
                      <Box w={1 / 2} mr={2} mt={1}>
                        <ResetButton
                          type="button"
                          disabled={submitting}
                          onClick={resetForm}>
                          Reset
                        </ResetButton>
                      </Box>
                      <Box w={1 / 2} mt={1}>
                        <SubmitButton
                          name={"Submit "}
                          submitting={submitting}
                          icon={"paper-plane-o"}
                        />
                      </Box>
                    </Flex>
                  </HorizontalForm>
                </PanelBody>
              </Panel>
            </PanelGroup>
          </Box>
        </Flex>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { user } = state.auth
  return {
    initialValues: {
      email: user ? user.email : ""
    }
  }
}

export default reduxForm(
  {
    form: "contact",
    fields,
    onSubmit: submitEmail,
    validate: syncValidate
  },
  mapStateToProps
)(Contact)
