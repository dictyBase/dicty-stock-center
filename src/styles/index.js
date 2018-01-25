import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import { Box } from 'rebass'

injectGlobal([`
*, :after, :before {
    box-sizing: border-box;
}

body {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857;
    color: #333;
    background-color: #fff;
    margin: auto;

    h1, h2, h3, h4, h5, h6 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
    }

    h4, h5, h6 {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    h4 {
        font-size: 18px;
    }

    h5 {
        font-size: 14px;
    }
}

a {
    color: #337ab7;
    text-decoration: none;
}
`
])

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

export const ContainerFluid = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export const AlertBox = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  text-align: center;
`

export const AlertSuccess = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
  text-align: center;
`

export const AlertInfo = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
`

export const Jumbotron = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
  text-align: center;

  h1 {
    color: inherit;
  }

  p {
    margin-bottom: 15px;
    font-size: 21px;
    font-weight: 200;
  }
`

export const ResponsiveImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`

export const Figure = styled.figure`
  margin: 0;
`

export const TextInfo = styled.span`
  color: #31708f;
  &:hover {
    color: #245269;
  }
  &:focus {
    color: #245269;
  }
`

export const Label = styled.span`
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
  background-color: #337ab7;
  &:hover {
    background-color: #337ab7;
  }
  &:focus {
    background-color: #337ab7;
  }
`

export const Breadcrumb = styled.ol`
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;

  li {
    display: inline-block;
  }

  li + li:before {
    padding: 0 5px;
    color: #ccc;
    content: '/\00a0';
  }

  &:active {
    color: #777;
  }
`

export const ToolbarNav = styled.div`
  background-color: #fafafa;
  border-radius: 2px;
  border: 1px solid #ddd;
  padding: 5px;
  width: 100%;
  display: inline-block;
`
export const EditorStyle = styled.div`
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 2em;
  background: #fefefe;
  margin: 10px auto;
`
export const EditPanel = styled.div`
  /* border: 1px solid #ddd; */
  /* padding: 10px; */
  [contenteditable='true']:focus {
    outline: none;
  }
`

export const DictyHeader = styled.div`
  h1 {
    font-size: 62px;
    margin-top: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
  h2 {
    font-size: 32px;
    margin-top: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
`

export const BorderBox = styled(Box)`
  border: 1px solid grey;
`

export const CenteredBox = styled(Box)`
    text-align: center;
`

export const HomepageHeader = styled.div`
  h1 {
    font-size: 48px;
    margin-top: 0px;
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
  }
`

export const PanelGray = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  margin: 15px auto;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
`

export const PanelGreen = styled.div`
  background-color: #dff0d8;
  border: 1px solid #dff0d8;
  margin: 15px auto;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
`

export const PanelBlue = styled.div`
  background-color: #eff8fb;
  border: 1px solid #eff8fb;
  margin: 15px auto;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
`

export const LinkedList = styled.div`
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    font-size: 18px;
  }
`

export const ItemAvailable = styled.div`
  color: #04b404;
`

export const ItemUnavailable = styled.div`
  color: #d8d8d8;
`

export const InlineLink = styled.a`
  cursor: pointer
`

export const DetailContainer = styled.div`
  max-width: 100%;
  min-width: 304px;
  margin: 0 auto;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`

export const PhenotypeData = styled.div`
  padding: 10px;
  background: #15317e;
  color: white;
  margin: 0 auto;
  text-align: center;
  display: flex;
`

export const StrainDetailsHeader = styled.div`
  padding: 10px;
  background: #15317e;
  color: white;
  margin: 0 auto;
  text-align: center;
`

export const RequiredText = styled.span`
  color: #dc3545;
`

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

export const FormControlTextArea = FormControl.withComponent('textarea')

export const FormControlSelect = FormControl.withComponent('select')

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

export const HelpBlock = styled.div`
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #a94442;
`

// Table Styling

export const TableResponsive = styled.div`
  min-height: 0.01%;
  overflow-x: auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 15px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
  }

  & > table {
    margin-bottom: 0;
  }

  & > thead > tr > th,
  & > tbody > tr > th,
  & > tfoot > tr > th,
  & > thead > tr > td,
  & > tbody > tr > td,
  & > tfoot > tr > td {
    white-space: nowrap;
  }
`

export const Table = styled.table`
  background-color: transparent;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-spacing: 0;

  & > thead > tr > th,
  & > tbody > tr > th,
  & > tfoot > tr > th,
  & > thead > tr > td,
  & > tbody > tr > td,
  & > tfoot > tr > td {
    padding: ${props => (props.condensed ? '5px' : '8px')};
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }

  & > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }

  & > tbody + tbody {
    border-top: 2px solid #ddd;
  }

  & > caption + thead > tr:first-child > th,
  & > colgroup + thead > tr:first-child > th,
  & > thead:first-child > tr:first-child > th,
  & > caption + thead > tr:first-child > td,
  & > colgroup + thead > tr:first-child > td,
  & > thead:first-child > tr:first-child > td {
    border-top: 0;
  }
`

// Button Styling

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

export const LinkButton = Button.withComponent('a')

export const SocialButton = LinkButton.extend`
  position: relative;
  padding-left: 21px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  color: #fff;
  border-color: rgba(0, 0, 0, 0.2);

  &:hover {
    text-decoration: none;
  }

  &.google {
    background-color: #dd4b39;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #c23321;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }

  &.facebook {
    background-color: #3b5998;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #2d4373;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }

  &.linkedin {
    background-color: #007bb6;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #005983;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }

  &.orcid {
    background-color: #a6ce39;

    &:focus,
    &:hover,
    &:active {
      color: #fff;
      background-color: #88aa2a;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }
`

// mostly taken from 'draft-js-static-toolbar-plugin/lib/plugin.css'
export const StaticToolbar = styled.div`
  .draftJsToolbar__buttonWrapper__1Dmqh {
    display: inline-block;
  }

  .draftJsToolbar__button__qi1gf {
    background: #fbfbfb;
    color: #888;
    font-size: 18px;
    border: 0;
    padding-top: 5px;
    vertical-align: bottom;
    height: 34px;
    width: 36px;
  }

  .draftJsToolbar__button__qi1gf svg {
    fill: #888;
  }

  .draftJsToolbar__button__qi1gf:hover,
  .draftJsToolbar__button__qi1gf:focus {
    background: #f3f3f3;
    outline: 0; /* reset for :focus */
  }

  .draftJsToolbar__active__3qcpF {
    background: #efefef;
    color: #444;
  }

  .draftJsToolbar__active__3qcpF svg {
    fill: #444;
  }
  .draftJsToolbar__separator__3U7qt {
    display: inline-block;
    border-right: 1px solid #ddd;
    height: 24px;
    margin: 0 0.5em;
  }
  .draftJsToolbar__toolbar__dNtBH {
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(220, 220, 220, 1);
    z-index: 2;
    box-sizing: border-box;
  }

  .draftJsToolbar__toolbar__dNtBH:after {
    border-color: rgba(255, 255, 255, 0);
    border-top-color: #fff;
    border-width: 4px;
    margin-left: -4px;
  }
  .draftJsToolbar__toolbar__dNtBH:before {
    border-color: rgba(221, 221, 221, 0);
    border-top-color: #ddd;
    border-width: 6px;
    margin-left: -6px;
  }
  button {
    margin-bottom: 0px;
    margin-right: 0px;
    background: #fbfbfb;
    color: #888;
    font-size: 18px;
    border: 0;
    padding-top: 5px;
    vertical-align: bottom;
    height: 34px;
    width: 36px;
  }
`
