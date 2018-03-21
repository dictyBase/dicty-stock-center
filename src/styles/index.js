import { injectGlobal } from "styled-components"

// these are the styles injected into every page of the app
injectGlobal([
  `
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

// get all of the styled components from individual files
export {
  Button,
  PrimaryButton,
  PrimaryBlockButton,
  PrimaryLargeButton,
  DefaultButton,
  DefaultBlockButton,
  ResetButton,
  CancelButton,
  SuccessBlockButton,
  SuccessButton,
  SuccessSmallButton,
  SuccessLargeButton,
  DangerButton,
  DisabledButton,
  LinkButton,
  SocialButton,
  GoogleButton,
  FacebookButton,
  LinkedInButton,
  OrcidButton,
  FontAwesomeIconContainer
} from "styles/Buttons"
export {
  HorizontalForm,
  ControlLabel,
  FormGroup,
  FormControl,
  FormControlSelect,
  FormControlTextArea,
  FormTextArea,
  RadioInline,
  RequiredText,
  HelpBlock
} from "styles/Forms"
export {
  DictyHeader,
  HomepageHeader,
  StrainDetailsHeader
} from "styles/Headers"
export { Container, ContainerFluid, DetailContainer } from "styles/Containers"
export { AlertBox, AlertSuccess, AlertInfo } from "styles/Alerts"
export { StaticToolbar } from "styles/DraftjsToolbar"
export { PanelGray, PanelGreen, PanelBlue, EditPanel } from "styles/Panels"
export { Table, TableResponsive } from "styles/Tables"
export { BorderBox, CenteredBox } from "styles/Boxes"
export { Jumbotron } from "styles/Jumbotron"
export { EditorStyle } from "styles/Editors"
export { ItemAvailable, ItemUnavailable } from "styles/ItemAvailability"
export { LinkedList, InlineLink, SopLink } from "styles/Links"
export { ResponsiveImage } from "styles/Images"
export { Breadcrumb } from "styles/Breadcrumbs"
export { PhenotypeData } from "styles/PhenotypeData"
export { Label } from "styles/Labels"
export { TextInfo } from "styles/TextInfo"
export { ToolbarNav } from "styles/ToolbarNav"
