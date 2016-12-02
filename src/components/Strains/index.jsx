import React, { Component } from 'react'
import 'react-virtualized/styles.css'
import { Table, Column } from 'react-virtualized'
import { Grid, Cell } from 'radium-grid'
import styled from 'styled-components'
import Loader from 'components/Loader'
import StrainTable from 'components/StrainTable'
import 'styles/custom.scss'
export default class Strains extends Component {
    displayName = 'strains list'
    constructor(props) {
        super(props)
    }
    componentDidMount() {
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
    }
    handleScroll({clientHeight, scrollHeight, scrollTop}) {
        const { stockCenterActions } = this.props
        if (scrollHeight === scrollTop + clientHeight) {
            stockCenterActions.fetchNextPage()
        }
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
        let i
        const { cartActions } = this.props
        const { data, pages, search } = this.props.stockCenter.strainCatalog
        let rows = data.slice(0, pages * 10)
        if (search !== '') {
            let filteredRows = []
            // rows = rows.filter((row) => {
            //     if (row.descriptor.toLowerCase().includes(search) || row.names.toLowerCase().includes(search) || row.systematicName.toLowerCase().includes(search) || row.id.toLowerCase().includes(search)) {
            //         return 1
            //     }
            //     return 0
            // })
            for (i = 0; i < rows.length; i += 1) {
                for (let property in rows[i]) {
                    if ((property !== 'available') && rows[i][property].toLowerCase().includes(search.toLowerCase())) {
                        console.log(rows[i])
                        filteredRows.push(rows[i])
                        break
                    }
                }
            }
            rows = filteredRows
        }
        const cellWidth = 180
        const cellHeight = 50
        return (
          <div className="table-responsive">
            <Table
              width={ cellWidth * 6 }
              height={ cellHeight * 7 }
              headerHeight={ cellHeight }
              headerStyle={ {textAlign: 'center'} }
              rowHeight={ cellHeight }
              rowCount={ rows.length }
              rowGetter={ ({ index }) => rows[index] }
              style={ {paddingTop: '2.5%'} }
              rowStyle={ ({index}) => {
                  if (index === -1) {
                      return {
                          margin: '0 auto'
                      }
                  }
                  return {
                      borderTop: '1px solid grey'
                  }
              }
              }
              gridStyle={ {margin: '0 auto', textAlign: 'center'} }
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
          </div>
        )
    }
    render() {
        const { data, isFetching } = this.props.stockCenter.strainCatalog
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
                <input
                  type="text"
                  placeholder="Search Strains"
                  onChange={ this.handleSearch.bind(this) }
                />
              </Cell>
            </Grid>
            {
              data
              ? <StrainTable
                  strainCatalog={ this.props.stockCenter.strainCatalog }
                  stockCenterActions={ this.props.stockCenterActions }
                  columnNames={ ['Availability', 'Strain Descriptor', 'Strain Names', 'Systematic Name', 'Strain ID'] }
                  rowHeight={50}
                />
              : <Loader message="We're testing your patience." />
            }
          </div>
        )
    }
}
