import { injectGlobal } from "styled-components"

// these are the styles injected into every page of the app
injectGlobal([
  `
*, :after, :before {
    box-sizing: border-box;
}

body {
    font-family: Roboto, Helvetica, Arial, sans-serif;;
    font-size: 16px;
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
    color: #004080;
    text-decoration: none;
}
`,
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
} from "styles/Buttons"
export {
  DictyHeader,
  HomepageHeader,
  StrainDetailsHeader,
} from "styles/Headers"
export {
  Container,
  ContainerFluid,
  DetailContainer,
  MainBodyContainer,
} from "styles/Containers"
export { AlertBox, AlertSuccess, AlertInfo } from "styles/Alerts"
export { StaticToolbar } from "styles/DraftjsToolbar"
export { PanelGreen, EditPanel } from "styles/Panels"
export { Table, TableResponsive } from "styles/Tables"
export { BorderBox, CenteredBox } from "styles/Boxes"
export { EditorStyle } from "styles/Editors"
export { ItemAvailable, ItemUnavailable } from "styles/ItemAvailability"
export { Breadcrumb } from "styles/Breadcrumbs"
export { TextInfo } from "styles/TextInfo"
export { ToolbarNav } from "styles/ToolbarNav"
