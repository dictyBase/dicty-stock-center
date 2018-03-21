import styled from "styled-components"

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
    padding: ${props => (props.condensed ? "5px" : "8px")};
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
