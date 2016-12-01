import React, { Component } from 'react'
// import { Table } from 'reactabular'
import 'react-virtualized/styles.css'
import { Table, Column } from 'react-virtualized'
import { Grid, Cell } from 'radium-grid'
import styled from 'styled-components'
import Loader from 'components/Loader'
import 'styles/custom.scss'

export default class Strains extends Component {
    displayName = 'strains list'
    constructor(props) {
        super(props)
        this.state = {
            rows: 10
        }
    }
    componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll.bind(this))
        const { stockCenterActions } = this.props
        stockCenterActions.fetchStrainList()
        document.addEventListener('scroll', (event) => {
            if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
                this.handleScroll()
            }
        })
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
    }
    handleSearch(e) {
        const { stockCenterActions } = this.props
        stockCenterActions.getSearchInput(e.target.value)
        // let input = e.target.value.toLowerCase()
        // let { data } = this.props.stockCenter.strainCatalog
        // let search = data.filter((row) => {
        //     if (row.descriptor.toLowerCase().includes(input) || row.names.toLowerCase().includes(input) || row.systematicName.toLowerCase().includes(input) || row.id.toLowerCase().includes(input)) {
        //         return 1
        //     }
        //     return 0
        // })
        // this.setState({
        //     data: search
        // })
    }
    handleScroll() {
        const { stockCenterActions } = this.props
        // if (scrollHeight === scrollTop + clientHeight) {
        stockCenterActions.fetchNextPage()
        // }
      // dispatch action to get 5/10 more strains
        // const { data } = this.props.stockCenter.strainCatalog
        // const length = data.length
        // const chunks = data.length / 5
        // if (this.state.rows < length) {
        //     if ((this.state.rows / 5) < chunks) {
        //         if (this.state.rows % 5 > 0) {
        //             this.setState({
        //                 rows: this.state.rows + (this.state.rows % 5)
        //             })6
        //         } else {
        //             this.setState({
        //                 rows: this.state.rows + 5
        //             })
        //         }
        //     } else if (data.length % 5 > 0) {
        //         this.setState({
        //             rows: this.state.rows + (data.length % 5)
        //         })
        //     }
        // }
    }
    getColumns = () => {
        const { cartActions } = this.props
        return [
            {
                property: 'available',
                header: {
                    label: 'Availability'
                },
                cell: {
                    format: (value, { rowData }) => (
                        <div
                          className={ rowData.available ? 'item-available' : 'item-unavailable' }>
                            <i className="fa fa-shopping-cart fa-2x"></i>
                        </div>
                    )
                }
            },
            {
                property: 'descriptor',
                header: {
                    label: 'Strain Descriptor'
                }
            },
            {
                property: 'names',
                header: {
                    label: 'Strain Names'
                }
            },
            {
                property: 'systematicName',
                header: {
                    label: 'Systematic Name'
                }
            },
            {
                property: 'id',
                header: {
                    label: 'Strain ID'
                }
            },
            {
                cell: {
                    format: (value, { rowData }) => {
                        if (rowData.available) {
                            return (
                               <button
                                 className="btn btn-primary"
                                 onClick={ () => cartActions.addToCart(rowData) }>
                                   <i className="fa fa-cart-arrow-down"></i> Add to cart
                               </button>
                            )
                        }
                    }
                },
                width: 200,
                visible: true
            }
        ]
    }

    getRows() {
        const { cartActions } = this.props
        const { data, pages, search } = this.props.stockCenter.strainCatalog
        let rows = data.slice(0, pages * 10)
        if (search !== '') {
            rows = rows.filter((row) => {
                if (search === '') {
                    return 1
                } else if (row.descriptor.toLowerCase().includes(search) || row.names.toLowerCase().includes(search) || row.systematicName.toLowerCase().includes(search) || row.id.toLowerCase().includes(search)) {
                    return 1
                }
                return 0
            })
        }
        // .map((row, i) => {
        //     return (
        //       <Grid key={ i } style={ { borderTop: '1px solid #c9c9c9' } } cellWidth="1/6">
        //         <Cell align="center" style={ { padding: '.7%' } }>
        //           <div
        //             className={ row.available ? 'item-available' : 'item-unavailable' }>
        //             <i className="fa fa-shopping-cart fa-2x"></i>
        //           </div>
        //         </Cell>
        //         <Cell className={ 'descriptor' } align="center" style={ { padding: '.7%' } }>
        //           { row.descriptor }
        //         </Cell>
        //         <Cell align="center" style={ { padding: '.7%' } }>
        //           { row.names }
        //         </Cell>
        //         <Cell align="center" style={ { padding: '.7%' } }>
        //           { row.systematicName }
        //         </Cell>
        //         <Cell align="center" style={ { padding: '.7%' } }>
        //           { row.id }
        //         </Cell>
        //         <Cell align="center" style={ { padding: '.7%' } }>
        //           {
        //             row.available &&
        //              <button
        //                className="btn btn-primary"
        //                onClick={ () => cartActions.addToCart(row) }>
        //                  <i className="fa fa-cart-arrow-down"></i> Add to cart
        //              </button>
        //            }
        //         </Cell>
        //       </Grid>
        //     )
        // })
        // return rows
        const cellWidth = 200
        const cellHeight = 50
        return (
            <Table
              width={ cellWidth * 6 }
              height={ 400 }
              headerHeight={ cellHeight }
              headerStyle={ {textAlign: 'center'} }
              rowHeight={ cellHeight }
              rowCount={ rows.length }
              rowGetter={ ({ index }) => rows[index] }
              style={ {paddingTop: '2.5%'} }
              rowStyle={ {borderTop: '1px solid grey'} }
              gridStyle={ {margin: 0, textAlign: 'center', height: '100%'} }
              onScroll={ this.handleScroll.bind(this) }
            >
              <Column
                label="Availability"
                width={ cellWidth }
                dataKey="available"
                cellRenderer={ (cellData) => {
                    return (
                      <div
                        className={ cellData.cellData ? 'item-available' : 'item-unavailable' }
                      >
                        <i className="fa fa-shopping-cart fa-2x"></i>
                      </div>
                    )
                }
              }
              />
              <Column
                label="Strain Descriptor"
                width={ cellWidth }
                dataKey="descriptor"
              />
              <Column
                label="Strain Names"
                width={ cellWidth }
                dataKey="names"
              />
              <Column
                label="Systematic Name"
                width={ cellWidth }
                dataKey="systematicName"
              />
              <Column
                label="Strain ID"
                width={ cellWidth }
                dataKey="id"
              />
            <Column
              width={ cellWidth }
              dataKey="available"
              cellRenderer={ (cellData, rowIndex) => {
                  if (cellData.cellData) {
                      return (
                        <button
                        className="btn btn-primary"
                        onClick={ () => cartActions.addToCart(rows[rowIndex]) }
                        >
                          <i className="fa fa-cart-arrow-down"></i> Add to cart
                      </button>
                      )
                  }
              } }
            />
            </Table>
        )
    }
    render() {
        const { data } = this.props.stockCenter.strainCatalog
        const SearchBar = styled.input`
          border: none;
          border-bottom: 1px solid grey;
          text-align: center;
        `
        return (
          <div className="container">
            <Grid cellWidth="1">
                <Cell align="center">
                      <h1 className="dicty-header">Strain Catalog</h1>
                </Cell>
            </Grid>
            <Grid cellWidth="1">
              <Cell align="center">
                <SearchBar
                  type="text"
                  placeholder="Search Strains"
                  onChange={ this.handleSearch.bind(this) }
                />
              </Cell>
            </Grid>
              { data
                ? this.getRows()
                : <Loader message="We're testing your patience" />
              }
          </div>
        )
    }
}
