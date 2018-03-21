import styled from "styled-components"

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
    content: "/";
  }

  &:active {
    color: #777;
  }
`
