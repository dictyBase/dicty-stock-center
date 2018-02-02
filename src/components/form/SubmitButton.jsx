// @flow
import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { PrimaryButton } from 'styles'

type Props = {
    submitting: boolean,
    name: string,
    icon: string
}

export default class SubmitButton extends Component<Props> {
    displayName = 'form submit button'

    render() {
        const { submitting, name, icon } = this.props
        return (
            <PrimaryButton type="submit"
            className={ `large block` }
                disabled={ submitting }> { name }
                { submitting ? <FontAwesome name="spinner" pulse fixedWidth />
                    : <FontAwesome name={ icon && icon } aria-hidden="true" />
                }
            </PrimaryButton>
        )
    }
}
