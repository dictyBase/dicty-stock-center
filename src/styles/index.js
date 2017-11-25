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
    border: 1px solid #ddd;
    padding: 10px;
`

export const DictyHeader = styled.div`
    h1 {
      font-size: 62px;
      margin-top: 25px;
      margin-bottom: 25px;
      border-bottom: 1px solid #eee;
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
