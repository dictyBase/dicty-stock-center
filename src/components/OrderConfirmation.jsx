import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'
import { AlertSuccess } from 'styles'
import { PrimaryButton } from 'styles/buttons'

const CenteredBox = styled(Box)`
    text-align: center;
`

export default class OrderConfirmation extends Component {
    displayName = 'order confirmation'

    static propTypes = {
        order: PropTypes.object
    }

    render() {
        const { id } = this.props.order
        return (
            <Flex wrap justify="center">
                <Box w={ '75%' }>
                    <Flex wrap justify="center">
                        <CenteredBox w={ 1 }>
                            <AlertSuccess>
                                <FontAwesome name="check-circle-o" size="5x" />
                                <h3>
                                    Thank you, your order has been submitted
                                    successfully!
                                </h3>
                                <p>
                                    Order Number: <strong>{ id }</strong>
                                </p>
                                <p>We have sent you a confirmation email.</p>
                                <p>
                                    The <strong>Payer</strong> will soon receive
                                    emails through the <strong>NU Core</strong>{ ' ' }
                                    system to complete payment.
                                </p>
                            </AlertSuccess>
                        </CenteredBox>
                        <Box w={ 1 }>
                        <PrimaryButton large block>
                            <Link to="/">
                                <FontAwesome name="home" /> Stock Center Home
                            </Link>
                            </PrimaryButton>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        )
    }
}
