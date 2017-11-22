import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Cell } from 'radium-grid'
import Panel from 'dicty-react-components/src/Panel'
import PanelHeader from 'dicty-react-components/src/PanelHeader'
import PanelTitle from 'dicty-react-components/src/PanelTitle'
import PanelBody from 'dicty-react-components/src/PanelBody'
import FormGroupInput from './form/FormGroupInput'
import Comments from './form/Comments'
import SubmitButton from './form/SubmitButton'
import { submitEmail } from 'actions/contact'
import { reduxForm } from 'redux-form'
import { syncValidate } from 'forms/validate/contact-form'
import 'styles/custom.scss'

export const fields = ['name', 'email', 'subject', 'message']

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
          <div className="container">
            <Grid cellWidth="1" align="center">
              <Cell>
                  <h1 className="dicty-header">Contact Us</h1>
              </Cell>
              <Cell>
                  <p>For questions, comments, or suggestions, please fill out the form below
                    to send us an email&nbsp;
                    <a href="mailto:dictybase@northwestern.edu?Subject=Question" target="_top">
                      (dictybase@northwestern.edu)
                    </a>
                  </p>
              </Cell>
              <Cell cellWidth="1/6" smallCellWidth="1"/>
              <Cell cellWidth="4/6" smallCellWidth="1">
                <Panel style={ {width: '100%'} }>
                  <PanelHeader style={ {backgroundColor: '#f9f9f9', padding: '20px'} }>
                      <PanelTitle>
                        <i className="fa fa-envelope-o"></i> Email dictyBase
                      </PanelTitle>
                  </PanelHeader>
                  <PanelBody>
                    <form onSubmit={ handleSubmit } className="form-horizontal">
                      <FormGroupInput field={ name } >
                          <span className="text-danger" title="required field">* </span>
                          Name:
                      </FormGroupInput>
                      <FormGroupInput field={ email } >
                          <span className="text-danger" title="required field">* </span>
                          Email:
                      </FormGroupInput>
                      <FormGroupInput field={ subject } >
                          Subject:
                      </FormGroupInput>
                      <Comments comments= { message } rows = { '5' }
                        placeholder = { 'Please enter your message here' }>
                          Message:
                      </Comments>
                      <Grid cellWidth="1/2">
                        <Cell>
                          <button type="button" className="btn btn-default btn-lg btn-block"
                            disabled={ submitting }
                            onClick={ resetForm }>
                              Reset
                          </button>
                        </Cell>
                        <Cell>
                          <SubmitButton name={ 'Submit ' }
                            submitting={ submitting }
                            icon = { 'fa fa-paper-plane-o' }
                          />
                        </Cell>
                      </Grid>
                    </form>
                  </PanelBody>
                </Panel>
              </Cell>
              <Cell cellWidth="1/6" smallCellWidth="1"/>
            </Grid>
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

export default reduxForm({
    form: 'contact',
    fields,
    onSubmit: submitEmail,
    validate: syncValidate
},
mapStateToProps
)(Contact)
