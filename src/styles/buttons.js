import styled from 'styled-components'

export const Button = styled.button`
    display: ${props => props.block ? 'block' : 'inline-block'};
    padding: ${props => props.large ? '10px 16px' : '6px 12px'};
    margin-bottom: 0;
    font-size: ${props => props.large ? '18px' : '14px'};
    font-weight: normal;
    line-height: ${props => props.large ? '1.3333333' : '1.42857143'};
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
        touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: ${props => props.large ? '6px' : '4px'};
    width: ${props => props.block ? '100% ' : 'inherit'};
`

export const PrimaryButton = Button.extend`
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;

    a {
        color: #fff;
    }

    a:hover {
        color: #fff;
        text-decoration: none;
    }

    &:focus {
        color: #fff;
        background-color: #286090;
        border-color: #122b40;
    }

    &:hover {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
    }

    &:active {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
    }
`

export const DefaultButton = Button.extend`
    color: #333;
    background-color: #fff;
    border-color: #ccc;

    &:focus {
        color: #333;
        background-color: #e6e6e6;
        border-color: #8c8c8c;
    }

    &:hover {
        color: #333;
        background-color: #e6e6e6;
        border-color: #adadad;
    }

    &:active {
        color: #333;
        background-color: #e6e6e6;
        border-color: #adadad;
    }
`

export const SuccessButton = Button.extend`

`

//  navbar-btn, btn-success, btn-disabled, btn-danger, btn-xs
