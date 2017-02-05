import React, { Component } from 'react'
import 'react-virtualized/styles.css'
import { Table, Column, InfiniteLoader } from 'react-virtualized'
import TableLoader from 'components/TableLoader'
import 'styles/custom.scss'

export default class PlasmidTable extends Component {
  displayName = 'plasmid table'
  loadNextPage() {
      const { stockCenterActions } = this.props
      const { isFetching } = this.props.stockCenter.plasmidCatalog
      const { number } = this.props.stockCenter.plasmidCatalog.meta.pagination
      const { links } = this.props.stockCenter.plasmidCatalog
      if (!isFetching && links.next) {
          stockCenterActions.fetchPlasmids(number + 1, 10)
      }
  }
  render() {
      let i
      const { cartActions } = this.props
      const { data, links, isFetching } = this.props.stockCenter.plasmidCatalog
      let rows = data
      const loadMoreRows = isFetching
        ? () => {}
        : this.loadNextPage.bind(this)
      const isRowLoaded = ({ index }) => { return !!rows[index] }
      const rowCount = rows.length + (links.next ? 1 : 0)
      const { cellWidth, cellHeight } = this.props
      return (
        <div className="table-responsive">
          <InfiniteLoader
            isRowLoaded={ isRowLoaded }
            rowCount={ rowCount }
            loadMoreRows={ loadMoreRows }
            threshold={ 2 }
          >
          {
            ({ onRowsRendered, registerChild }) => {
                return (
                  <Table
                    ref={ registerChild }
                    onRowsRendered={ onRowsRendered }
                    width={ cellWidth * 5 }
                    height={ cellHeight * 7 }
                    headerHeight={ cellHeight }
                    headerStyle={ {textAlign: 'center', verticalAlign: 'middle'} }
                    rowHeight={ cellHeight }
                    rowGetter={ ({ index }) => {
                        if (rows[index]) {
                            return rows[index]
                        }
                    } }
                    style={ {paddingTop: '2%'} }
                    rowCount={ rowCount }
                    rowStyle={ ({index}) => {
                        if (index === -1) {
                            return {
                                margin: '0 auto',
                                borderTop: '1px solid #efefef',
                                borderBottom: '1px solid #efefef'
                            }
                        } else if ((index === rows.length)) {
                            return {
                            }
                        } else if (index % 2 > 0) {
                            return {
                                borderBottom: '1px solid #efefef'
                            }
                        } else if (index % 2 === 0) {
                            return {
                                borderBottom: '1px solid #efefef'
                            }
                        }
                    } }
                    gridStyle={
                        {
                            margin: '0 auto',
                            textAlign: 'center',
                            verticalAlign: 'middle'
                        }
                    }
                    rowRenderer={ ({index, columns, key, style, className}) => {
                        let content
                        if (!isRowLoaded({index})) {
                            content = <TableLoader />
                        } else {
                            content = columns
                        }
                        return (
                          <div className={ className } key={ key } style={ style }>
                            { content }
                          </div>
                        )
                    } }
                  >
                    <Column
                      label="Availability"
                      width={ cellWidth }
                      dataKey="in_stock"
                      cellRenderer={ (cellData) => {
                          return (
                            <div
                              className={ cellData.cellData ? 'item-available' : 'item-unavailable' }
                            >
                              <i className="fa fa-shopping-cart fa-2x"></i>
                            </div>
                          )
                      } }
                      cellDataGetter={ ({rowData, dataKey}) => {
                          if (rowData) {
                              return rowData.attributes[dataKey]
                          }
                      } }
                    />
                    <Column
                      label="Description"
                      width={ cellWidth }
                      dataKey="description"
                      cellDataGetter={ ({rowData, dataKey}) => {
                          if (rowData) {
                              return rowData.attributes[dataKey]
                          }
                      } }
                    />
                    <Column
                      label="Plasmid ID"
                      width={ cellWidth }
                      dataKey="id"
                      cellDataGetter={ ({rowData, dataKey}) => {
                          if (rowData) {
                              return rowData[dataKey]
                          }
                      } }
                    />
                    <Column
                      label="Plasmid Name"
                      width={ cellWidth }
                      dataKey="name"
                      cellDataGetter={ ({rowData, dataKey}) => {
                          if (rowData) {
                              return rowData.attributes[dataKey]
                          }
                      } }
                    />
                    <Column
                      width={ cellWidth }
                      dataKey="in_stock"
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
                      cellDataGetter={ ({rowData, dataKey}) => {
                          if (rowData) {
                              return rowData.attributes[dataKey]
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

PlasmidTable.defaultProps = {
    cellWidth: 180,
    cellHeight: 50
}
