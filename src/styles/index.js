import styled from 'styled-components'

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
    [contenteditable="true"]:focus {
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

export const HomepageHeader = styled.div`
    h1 {
      font-size: 48px;
      margin-top: 0px;
      margin-bottom: 25px;
      border-bottom: 1px solid #eee;
    }
`

export const PanelGray = styled.div`
    background-color: #F2F2F2;
    border: 1px solid #F2F2F2;
    margin: 15px auto;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
`

export const PanelGreen = styled.div`
    background-color: #DFF0d8;
    border: 1px solid #DFF0d8;
    margin: 15px auto;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
`

export const PanelBlue = styled.div`
    background-color: #EFF8FB;
    border: 1px solid #EFF8FB;
    margin: 15px auto;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
`

export const LinkedList = styled.div`
    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    a {
        font-size: 18px;
    }
`

export const ItemAvailable = styled.div`
    color: #04B404;
`

export const ItemUnavailable = styled.div`
    color: #D8D8D8;
`

export const DetailContainer = styled.div`
    max-width: 60%;
    min-width: 304;
    margin: 0 auto;
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
`

export const PhenotypeData = styled.div`
    padding: 10;
    max-width: 100%;
    min-width: 304;
    background: #15317e;
    color: white;
    margin: 0 auto;
    text-align: center;
    display: flex;
`

export const StrainDetailsHeader = styled.div`
    padding: 10;
    max-width: 60%;
    min-width: 304;
    background: #15317e;
    color: white;
    margin: 0 auto;
    text-align: center;
`

// export const StockDetailItem = styled.div`
//     display: flex;
//     flex-grow: 1;
//     flex-basis: 0;
//     width: 100%;
//     border-bottom: 1px solid grey;
//     /* height: 100%; */
// `

// export const StockTableLeftKey = styled.div`
//     display: flex;
//     padding: 5px 10px 5px 10px;
//     width: 33.3333%;
//     min-width: 117;
//     height: 100%;
//     border-right: 1px solid grey;
// `

// export const StockTableLeftValue = styled.div`
//     display: flex;
//     padding: 5px 10px 5px 10px;
//     width: 66.66666%;
//     min-width: 187;
//     height: 100%;
//     border-right: this.props.right && 1px solid grey;
// `

// export const StockTableRightKey = styled.div`
//     display: flex;
//     padding: 5px 10px 5px 10px;
//     width: 33.3333%;
//     min-width: 117;
//     height: 100%;
//     border-right: this.props.right && 1px solid grey;
// `

// export const StockTableRightValue = styled.div`
//     display: flex;
//     padding: 5px 10px 5px 10px;
//     width: 66.66666%;
//     min-width: 187;
// `

// export const StockDetailRows = styled.div`
//     flex-direction: row;

//     .stock-detail-row.single > .stock-detail-item:nth-child(1) > div:nth-child(1) {
//         width: calc(33.333% / 2) !important;
//         }

//     @media screen and (max-width: 1290px) {
//         flex-direction: column !important;
//         min-height: 90px;

//         .stock-detail-item div + div {
//             border-right: none !important;
//         }
//         .stock-detail-row.single {
//             height: 45px;
//             display: inline !important;
//         }
//         .stock-detail-row.single > .stock-detail-item:nth-child(2) {
//             display: none !important;
//         }
//         .stock-detail-row.single > .stock-detail-item:nth-child(1) > div:nth-child(1) {
//             width: 33.333% !important;
//         }
//         .stock-detail-row > .stock-detail-item > div {
//             height: initial !important;
//         }
//     }
// `

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
