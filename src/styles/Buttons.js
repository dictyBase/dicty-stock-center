import styled from "styled-components"

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
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
  border-radius: 4px;

  &.block {
    display: block;
    width: 100%;
  }

  &.large {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
  }

  &.xs {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    width: 20%;
  }
`

export const PrimaryButton = Button.extend`
  color: #fff;
  background-color: #0059b3;
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
    background-color: #0073e6;
    border-color: #204d74;
  }

  &:active {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
  }
`

export const PrimaryBlockButton = PrimaryButton.extend`
  display: block;
  width: 100%;
`

export const PrimaryLargeButton = PrimaryBlockButton.extend`
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
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

export const DefaultBlockButton = DefaultButton.extend`
  display: block;
  width: 100%;
`

export const ResetButton = Button.extend`
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
  display: block;
  width: 100%;

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

export const CancelButton = Button.extend`
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  display: block;
  width: 100%;

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
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;

  a {
    color: #fff;
  }

  a:hover {
    color: #fff;
    text-decoration: none;
  }

  &:focus {
    color: #fff;
    background-color: #449d44;
    border-color: #255625;
  }

  &:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
  }

  &:active {
    color: #333;
    background-color: #449d44;
    border-color: #398439;
  }
`

export const SuccessSmallButton = SuccessButton.extend`
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  width: 20%;
`

export const SuccessLargeButton = SuccessButton.extend`
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
  display: block;
  width: 100%;
`

export const SuccessBlockButton = SuccessButton.extend`
  display: block;
  width: 100%;
`

export const DangerButton = Button.extend`
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;

  &:focus {
    color: #fff;
    background-color: #c9302c;
    border-color: #761c19;
  }

  &:hover {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
  }

  &:active {
    color: #333;
    background-color: #c9302c;
    border-color: #ac2925;
  }
`

export const DisabledButton = Button.extend`
  background-color: #fff;
  border-color: #fff;
`
