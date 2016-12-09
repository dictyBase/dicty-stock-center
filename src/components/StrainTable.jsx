import React, { Component } from 'react'
import 'react-virtualized/styles.css'
import { Table, Column, InfiniteLoader } from 'react-virtualized'
import TableLoader from 'components/TableLoader'
import 'styles/custom.scss'

export default class StrainTable extends Component {
  displayName = 'strain table'
  componentDidMount() {
      const { stockCenterActions } = this.props
      const { pages } = this.props.stockCenter.strainCatalog
      stockCenterActions.fetchNextPage(pages)
  }
  loadNextPage({clientHeight, scrollHeight, scrollTop}) {
      const { stockCenterActions } = this.props
      const { pages, hasNextPage } = this.props.stockCenter.strainCatalog
      if ((scrollHeight === scrollTop + clientHeight) && hasNextPage) {
          stockCenterActions.fetchNextPage(pages)
      }
      this.forceUpdate()
  }
  render() {
      let i
      const { cartActions } = this.props
      const { data, search, hasNextPage } = this.props.stockCenter.strainCatalog
      let rows = data
      if (search !== '') {
          let filteredRows = []
          for (i = 0; i < rows.length; i += 1) {
              for (let property in rows[i]) {
                  if ((property !== 'available') && rows[i][property].toLowerCase().includes(search.toLowerCase())) {
                      filteredRows.push(rows[i])
                      break
                  }
              }
          }
          rows = filteredRows
      }


      const isRowLoaded = ({ index }) => !this.props.hasNextPage || index < rows.length
      const rowCount = this.props.hasNextPage
      ? rows.length + 1
      : rows.length

      const { cellWidth, cellHeight } = this.props
      return (
        <div className="table-responsive">
          <InfiniteLoader
            isRowLoaded={ isRowLoaded }
            rowCount={ rowCount }
          >
          {
            ({ onRowsRendered, registerChild }) => {
                return (
                  <Table
                    ref={ registerChild }
                    onRowsRendered={ onRowsRendered }
                    width={ cellWidth * 6 }
                    height={ cellHeight * 7 }
                    headerHeight={ cellHeight }
                    headerStyle={ {textAlign: 'center'} }
                    rowHeight={ cellHeight }
                    rowGetter={ ({ index }) => rows[index] }
                    style={ {paddingTop: '2%'} }
                    rowCount={ rowCount }
                    rowStyle={ ({index}) => {
                        if (index === -1) {
                            return {
                                margin: '0 auto'
                            }
                        } else if ((index > rows.length - 2)) {
                            return {
                                background: 'white'
                            }
                        } else if (index % 2 > 0) {
                            return {
                                background: '#efefef'
                            }
                        }
                    } }
                    gridStyle={ {margin: '0 auto', textAlign: 'center'} }
                    rowRenderer={ ({index, columns, key, style, className}) => {
                        if ((index === rows.length - 1) && hasNextPage) {
                            return (
                              <div key={ key } style={ style } className={ className }>
                                <TableLoader />
                              </div>

                            )
                        }
                        return (
                          <div
                            className={ className }
                            key={ key }
                            style={ style }
                          >
                            { columns }
                          </div>
                        )
                    } }
                    onScroll={ this.loadNextPage.bind(this) }
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
                      cellRenderer={ ({ cellData, rowIndex, rowData }) => {
                          if (cellData) {
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
          }
          </InfiniteLoader>
        </div>
      )
  }
}

StrainTable.defaultProps = {
    cellWidth: 180,
    cellHeight: 50
}
