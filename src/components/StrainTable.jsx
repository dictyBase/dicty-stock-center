import React, { Component } from 'react'
import 'react-virtualized/styles.css'
import { Table, Column, InfiniteLoader } from 'react-virtualized'
import { Grid, Cell } from 'radium-grid'
import TableLoader from 'components/TableLoader'
import 'styles/custom.scss'

export default class StrainTable extends Component {
  displayName = 'strain table'
  componentDidMount() {
  }
  loadNextPage({clientHeight, scrollHeight, scrollTop}) {
      const { stockCenterActions } = this.props
      const { isFetching } = this.props.stockCenter.strainCatalog
      const { number } = this.props.stockCenter.strainCatalog.meta.pagination
      const { links } = this.props.stockCenter.strainCatalog
      if (scrollHeight === scrollTop + clientHeight) {
          if (!isFetching && links.next) {
              stockCenterActions.fetchNextPage(number + 1, 10)
          }
      }
      // this.forceUpdate()
  }
  // handleChange(e) {
  //     const { stockCenterActions } = this.props
  //     stockCenterActions.getSearchInput(e.target.value)
  // }
  handleKeyDown(e) {
      if (e.keyCode === 13) {
          this.search(e.target.value)
      }
  }
  search(text) {
      const { stockCenterActions } = this.props
      const { data } = this.props.stockCenter.strainCatalog
      const { meta } = this.props.stockCenter.strainCatalog
      stockCenterActions.searchAllStrains(data.length, meta.pagination.records, text)
      this.forceUpdate()
  }
  handleSearch() {
      this.search(this.searchInput.value)
  }
  handleClear() {
      this.clearSearch()
  }
  clearSearch() {
      this.searchInput.value = ''
      this.search('')
  }
  render() {
      let i
      const { cartActions } = this.props
      const { data, search, links } = this.props.stockCenter.strainCatalog
      let rows = data
      if (search !== '') {
          let filteredRows = []
          for (i = 0; i < rows.length; i += 1) {
              if (rows[i]['id'].toLowerCase().includes(search.toLowerCase())) {
                  filteredRows.push(rows[i])
              }
              for (let attribute in rows[i]['attributes']) {
                  if (rows[i]['attributes'][attribute].toLowerCase().includes(search.toLowerCase())) {
                      filteredRows.push(rows[i])
                      break
                  }
              }
          }
          rows = filteredRows
      }


      // const isRowLoaded = ({ index }) => !links.next || index < rows.length
      const { isFetching } = this.props.stockCenter.strainCatalog
      const rowCount = links.next
      ? rows.length
      : rows.length
      // const rowCount = rows.lenth
      const { cellWidth, cellHeight } = this.props
      return (
        <div className="table-responsive">
          <Grid cellWidth="1">
            <Cell align="center">
              <input
                style={ {textAlign: 'center', height: '100%'} }
                type="text"
                placeholder="Search Strains"
                ref={ el => { this.searchInput = el } }
                onKeyDown={ this.handleKeyDown.bind(this) }
              />
            <button className="btn btn-primary" style={ {marginLeft: 7} } onClick={ this.handleSearch.bind(this) }>SEARCH</button>
            <button className="btn btn-primary" style={ {marginLeft: 7} } onClick={ this.handleClear.bind(this) }>CLEAR</button>

            </Cell>
          </Grid>
          <InfiniteLoader
            isRowLoaded={ !isFetching }
            rowCount={ rowCount }
            loadMoreRows={ this.loadNextPage.bind(this) }
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
                    headerStyle={ {textAlign: 'center'} }
                    rowHeight={ cellHeight }
                    rowGetter={ ({ index }) => rows[index] }
                    style={ {paddingTop: '2%'} }
                    rowCount={ rowCount }
                    rowStyle={ ({index}) => {
                        if (index === -1) {
                            return {
                                margin: '0 auto',
                                borderTop: '1px solid #efefef',
                                borderBottom: '1px solid #efefef',
                                border: '1px solid #efefef'
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
                    gridStyle={
                        {
                            margin: '0 auto',
                            textAlign: 'center'
                            // border: '1px solid #efefef'
                        }
                    }
                    rowRenderer={ ({index, columns, key, style, className}) => {
                        if ((index === rows.length - 1) && links.next) {
                            return (
                              <div key={ key } style={ style } className={ className }>
                                <TableLoader />
                              </div>

                            )
                        }
                        return (
                          <div className={ className } key={ key } style={ style }>
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
                      dataKey="description"
                      cellDataGetter= { ({rowData, dataKey}) => {
                          return rowData.attributes[dataKey]
                      } }
                    />
                    <Column
                      label="Strain Name"
                      width={ cellWidth }
                      dataKey="name"
                      cellDataGetter={ ({rowData, dataKey}) => {
                          return rowData.attributes[dataKey]
                      } }
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
