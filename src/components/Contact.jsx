import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    PanelGroup,
    Panel,
    PanelHeader,
    PanelTitle,
    PanelBody
} from 'dicty-components-panel'
import FormGroupInput from './form/FormGroupInput'
import Comments from './form/Comments'
import SubmitButton from './form/SubmitButton'
import { submitEmail } from 'actions/contact'
import { reduxForm } from 'redux-form'
import { syncValidate } from 'forms/validate/contact-form'
import { Flex, Box } from 'rebass'
import { DictyHeader } from 'styles'
import 'styles/custom.scss'

export const fields = ['name', 'email', 'subject', 'message']

const theme = {
    headerBackgroundColor: '#f9f9f9',
    headerTextColor: '#000000'
}

class Contact extends Component {
    displayName = 'contact page'
    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        submitting: PropTypes.bool
    }
    render() {
        const {
            fields: { name, email, subject, message },
            handleSubmit,
            resetForm,
            submitting
        } = this.props
        return (
            <div>
                <Flex wrap justify="center">
                    <Box>
                        <DictyHeader>
                            <h1>Contact Us</h1>
                        </DictyHeader>
                    </Box>
                    <Box w={ ["90%", 3 / 4] }>
                        <p>
                            For questions, comments, or suggestions, please fill
                            out the form below to send us an email&nbsp;
                            <a
                                href="mailto:dictybase@northwestern.edu?Subject=Question"
                                target="_top">
                                (dictybase@northwestern.edu)
                            </a>
                        </p>
                    </Box>
                    <Box w={ ["90%", 3 / 4] }>
                        <PanelGroup theme={ theme }>
                            <Panel collapse>
                                <PanelHeader style={ { padding: '20px' } }>
                                    <PanelTitle>
                                        <i className="fa fa-envelope-o" /> Email
                                        dictyBase
                                    </PanelTitle>
                                </PanelHeader>
                                <PanelBody style={ { height: '100%' } }>
                                    <form
                                        onSubmit={ handleSubmit }
                                        className="form-horizontal">
                                        <FormGroupInput field={ name }>
                                            <span
                                                className="text-danger"
                                                title="required field">
                                                *{ ' ' }
                                            </span>
                                            Name:
                                        </FormGroupInput>
                                        <FormGroupInput field={ email }>
                                            <span
                                                className="text-danger"
                                                title="required field">
                                                *{ ' ' }
                                            </span>
                                            Email:
                                        </FormGroupInput>
                                        <FormGroupInput field={ subject }>
                                            Subject:
                                        </FormGroupInput>
                                        <Comments
                                            comments={ message }
                                            rows={ '5' }
                                            placeholder={
                                                'Please enter your message here'
                                            }>
                                            Message:
                                        </Comments>
                                        <Flex>
                                            <Box w={ 1 / 2 } mr={ 2 }>
                                                <button
                                                    type="button"
                                                    className="btn btn-default btn-lg btn-block"
                                                    disabled={ submitting }
                                                    onClick={ resetForm }>
                                                    Reset
                                                </button>
                                            </Box>
                                            <Box w={ 1 / 2 }>
                                                <SubmitButton
                                                    name={ 'Submit ' }
                                                    submitting={ submitting }
                                                    icon={ 'fa fa-paper-plane-o' }
                                                />
                                            </Box>
                                        </Flex>
                                    </form>
                                </PanelBody>
                            </Panel>
                        </PanelGroup>
                    </Box>
                </Flex>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { user } = state.auth
    return {
        initialValues: {
            email: user ? user.email : ''
        }
    }
}

export default reduxForm(
    {
        form: 'contact',
        fields,
        onSubmit: submitEmail,
        validate: syncValidate
    },
    mapStateToProps
)(Contact)
