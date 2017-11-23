import styled from 'styled-components'

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
        .container {
          width: 750px;
        }
      }
      @media (min-width: 992px) {
        .container {
          width: 970px;
        }
      }
      @media (min-width: 1200px) {
        .container {
          width: 1170px;
        }
      }
`
export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    min-width: 100%;
`

// export const Row = styled.div`
//     &::after {
//       content: '';
//       clear: both;
//       display: table;
//     }
// `

// function getWidthString(span) {
//     if (!span) return

//     let width = span / 12 * 100
//     return `width: ${width}%`
// }

// export const Column = styled.div`
//     float: left;
//     ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')}

//   @media only screen and (min-width: 768px) {
//     ${({ sm }) => sm && getWidthString(sm)}
//   }

//   @media only screen and (min-width: 992px) {
//     ${({ md }) => md && getWidthString(md)}
//   }

//   @media only screen and (min-width: 1200px) {
//     ${({ lg }) => lg && getWidthString(lg)}
//   }
// `

// export const Row = styled.div`
//     display: inline-block;
//     width: 100%;

//     /* @media (min-width: ${style.breakpoint.small}) {
//       display: flex;
//     } */
// `

// export const Column = styled.div`
//     display: inline-block;
//     /* margin-bottom: ${style.margin} */
//     margin-right: 0;
//     width: 100%;

//     /* @media (min-width: ${style.breakpoint.small}) {
//       margin-right: ${(props) => props.last ? '0' : style.margin};
//       flex: ${(props) => props.colspan}
//     } */
// `
