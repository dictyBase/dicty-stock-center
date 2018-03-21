import styled from "styled-components"

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

export const DetailContainer = styled.div`
  max-width: 100%;
  min-width: 304px;
  margin: 0 auto;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`
