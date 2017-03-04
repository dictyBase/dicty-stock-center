import React, { Component } from 'react'
import 'react-virtualized/styles.css'
import { Grid, Cell } from 'radium-grid'
import { Link } from 'react-router'
import { Table, Column, InfiniteLoader } from 'react-virtualized'
import TableLoader from 'components/TableLoader'
import 'styles/custom.scss'

// type Props = {
//   cellWidth: number,
//   cellHeight: number,
//   height: number
// }
export default class PlasmidTable extends Component {
  displayName = 'plasmid table'
  loadNextPage = () => {
      const { stockCenterActions } = this.props
      const { isFetching, links } = this.props.stockCenter.plasmidCatalog
      const { number } = this.props.stockCenter.plasmidCatalog.meta.pagination
      if ((!isFetching && links.next) && (this.searchInput.value === '')) {
          stockCenterActions.fetchPlasmids(number + 1, 10)
      }
  }
  handleKeyDown = (e) => {
      if (e.keyCode === 13) {
          this.search(e.target.value)
      }
  }
  search = (text) => {
      const { stockCenterActions } = this.props
      stockCenterActions.searchPlasmids(1, 1, text)
      this.forceUpdate()
  }
  handleSearch = () => {
      this.search(this.searchInput.value)
  }
  handleClear = () => {
      this.clearSearch()
  }
  clearSearch = () => {
      const { stockCenterActions } = this.props
      const { number } = this.props.stockCenter.plasmidCatalog.meta.pagination
      if (this.searchInput.value !== '') {
          this.searchInput.value = ''
          stockCenterActions.clearPlasmidSearch()
          stockCenterActions.fetchPlasmids(number + 1, 10)
      }
  }
  getRowHeight = ({ index }) => {
      const { data } = this.props.stockCenter.plasmidCatalog
      const { cellHeight } = this.props
      if (data[index]) {
          const remainder: number = data[index].attributes.description.length % 54
          let lines: number = data[index].attributes.description.length / 54
          if (remainder > 0) {
              lines += 1
          }
          const height: number = lines * 30
          return height >= cellHeight ? height : cellHeight
      }
      return cellHeight
  }
  getRowStyle = ({ index }) => {
      const { data } = this.props.stockCenter.plasmidCatalog
      if (index === -1) {
          return {
              margin: '0 auto',
              borderTop: '1px solid #efefef',
              borderBottom: '1px solid #efefef'
          }
      } else if ((index === data.length)) {
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
  }
  isRowLoaded = ({ index }) => {
      const { data } = this.props.stockCenter.plasmidCatalog
      return !!data[index]
  }
  rowRenderer = ({index, columns, key, style, className}) => {
      let content
      if (!this.isRowLoaded({index})) {
          content = <TableLoader />
      } else {
          content = columns
      }
      return (
        <div className={ className } key={ key } style={ style }>
          { content }
        </div>
      )
  }
  availabilityRenderer = (cellData) => {
      return (
        <div
          className={ cellData.cellData ? 'item-available' : 'item-unavailable' }
        >
          <i className="fa fa-shopping-cart fa-2x"></i>
        </div>
      )
  }
  rowGetter = ({ index }) => {
      const { data } = this.props.stockCenter.plasmidCatalog
      if (data[index]) {
          return data[index]
      }
  }
  cellDataGetter = ({rowData, dataKey}) => {
      if (rowData) {
          return rowData.attributes[dataKey]
      }
  }
  idGetter = ({rowData, dataKey}) => {
      if (rowData) {
          return rowData[dataKey]
      }
  }
  inStockRenderer = ({ cellData, rowIndex, rowData }) => {
      const { cartActions } = this.props
      const { data } = this.props.stockCenter.plasmidCatalog
      if (cellData) {
          return (
            <button
            className="btn btn-primary"
            onClick={ () => cartActions.addToCart(data[rowIndex]) }
            >
              <i className="fa fa-cart-arrow-down"></i> Add to cart
            </button>
          )
      }
  }
  render() {
      const { cellWidth, height } = this.props
      const { data, links, isFetching } = this.props.stockCenter.plasmidCatalog
      const loadMoreRows = isFetching
        ? () => {}
        : this.loadNextPage
      const rowCount: number = data.length + (links.next ? 1 : 0)
      return (
        <div className="table-responsive" style={ {border: 'none'} }>
          <Grid cellWidth="1">
            <Cell align="center">
              <input
                className="search-box"
                style={ {textAlign: 'center', height: '100%', WebkitAppearance: 'textfield'} }
                type="search"
                placeholder="Search Plasmids"
                ref={ el => { this.searchInput = el } }
                onKeyDown={ this.handleKeyDown }
              />
            <button
              className="btn btn-primary"
              style={ {marginLeft: 7} }
              onClick={ this.handleSearch }
            >
              SEARCH
            </button>
            <button
              className="btn btn-primary"
              style={ {marginLeft: 7} }
              onClick={ this.handleClear }
            >
              CLEAR
            </button>

            </Cell>
          </Grid>
          <InfiniteLoader
            isRowLoaded={ this.isRowLoaded }
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
                    width={ (cellWidth * 3) + 350 + 260 }
                    height={ height }
                    headerHeight={ 50 }
                    headerStyle={ {textAlign: 'center', verticalAlign: 'middle'} }
                    rowHeight={ this.getRowHeight }
                    rowGetter={ this.rowGetter }
                    style={ {paddingTop: '2%'} }
                    rowCount={ rowCount }
                    rowStyle={ this.getRowStyle }
                    gridStyle={
                        {
                            margin: '0 auto',
                            textAlign: 'center',
                            verticalAlign: 'middle'
                        }
                    }
                    rowRenderer={ this.rowRenderer }
                  >
                    <Column
                      label="Availability"
                      width={ cellWidth }
                      dataKey="in_stock"
                      cellRenderer={ this.availabilityRenderer }
                      cellDataGetter={ this.cellDataGetter }
                    />
                    <Column
                      label="Plasmid Name"
                      width={ 260 }
                      dataKey="name"
                      cellDataGetter={ this.cellDataGetter }
                    />
                    <Column
                      label="Description"
                      width={ 350 }
                      dataKey="description"
                      cellDataGetter={ this.cellDataGetter }
                      cellRenderer= { ({rowData, cellData}) => {
                          if (rowData) {
                              const { id } = rowData
                              return (
                                <div style={ {whiteSpace: 'normal'} }>
                                  <Link to={ `/plasmids/${id}` }>{ cellData }</Link>
                                </div>
                              )
                          }
                      } }
                    />
                    <Column
                      label="Plasmid ID"
                      width={ cellWidth }
                      dataKey="id"
                      cellDataGetter={ this.idGetter }
                    />
                    <Column
                      width={ cellWidth }
                      dataKey="in_stock"
                      cellRenderer={ this.inStockRenderer }
                      cellDataGetter={ this.cellDataGetter }
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
    cellWidth: 130,
    cellHeight: 90,
    height: 630
}
