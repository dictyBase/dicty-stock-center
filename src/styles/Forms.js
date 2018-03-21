import styled from "styled-components"

export const HorizontalForm = styled.form`
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
`

export const ControlLabel = styled.label`
  display: inline-block;
  padding-top: 7px;
  margin-bottom: 0;
  text-align: right;
  font-weight: 600;
`

export const FormGroup = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`

export const FormControl = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`

export const FormControlTextArea = FormControl.withComponent("textarea")

export const FormControlSelect = FormControl.withComponent("select")

export const FormTextArea = FormControlTextArea.extend`
  height: auto;
`

export const RadioInline = styled.label`
  position: relative;
  display: inline-block;
  padding-right: 20px;
  margin-bottom: 0;
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
`

export const RequiredText = styled.span`
  color: #dc3545;
`

export const HelpBlock = styled.div`
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #a94442;
`
