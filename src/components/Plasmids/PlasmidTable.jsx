// @flow
import React, { Component } from 'react'
import 'react-virtualized/styles.css'
import { Link } from 'react-router-dom'
import { Table, Column, InfiniteLoader } from 'react-virtualized'
import TableLoader from 'components/TableLoader'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'
import { ItemAvailable, ItemUnavailable } from 'styles'
import { PrimaryButton, DisabledButton } from 'styles/buttons'

// type Props = {
//   cellWidth: number,
//   cellHeight: number,
//   height: number
// }
export default class PlasmidTable extends Component {
  displayName = 'plasmid table'
  loadNextPage = () => {
      const fetchPlasmids: Function = this.props.stockCenterActions.fetchPlasmids
      const isFetching: boolean = this.props.stockCenter.plasmidCatalog.isFetching
      const links: Object = this.props.stockCenter.plasmidCatalog.links
      const number: number = this.props.stockCenter.plasmidCatalog.meta.pagination
      .number
      if (!isFetching && links.next && this.searchInput.value === '') {
          fetchPlasmids(number + 1, 10)
      }
  }
  handleKeyDown = (e: Event) => {
      if (e.keyCode === 13) {
          this.search(e.target.value)
      }
  }
  search = (text: string) => {
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
      const fetchPlasmids: Function = this.props.stockCenterActions.fetchPlasmids
      const clearPlasmidSearch: Function = this.props.stockCenterActions
      .clearPlasmidSearch
      const number: number = this.props.stockCenter.plasmidCatalog.meta.pagination
      .number
      if (this.searchInput.value !== '') {
          this.searchInput.value = ''
          clearPlasmidSearch()
          fetchPlasmids(number + 1, 10)
      }
  }
  getRowHeight = ({ index }: { index: number }) => {
      const data: Array<Object> = this.props.stockCenter.plasmidCatalog.data
      const cellHeight: number = this.props.cellHeight
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
  getRowStyle = ({ index }: { index: number }) => {
      const data: Array<Object> = this.props.stockCenter.plasmidCatalog.data
      if (index === -1) {
          return {
              margin: '0 auto',
              borderTop: '1px solid #efefef',
              borderBottom: '1px solid #efefef'
          }
      } else if (index === data.length) {
          return {}
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
  isRowLoaded = ({ index }: { index: number }) => {
      const data: Array<Object> = this.props.stockCenter.plasmidCatalog.data
      return !!data[index]
  }
  rowRenderer = ({
    index,
    columns,
    key,
    style,
    className
  }: {
    index: number,
    columns: any,
    key: string,
    style: Object,
    className: string
  }) => {
      let content
      if (!this.isRowLoaded({ index })) {
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
  availabilityRenderer = (cellData: boolean) => {
      if (cellData.cellData) {
          return (
        <ItemAvailable>
          <FontAwesome name="shopping-cart" size="2x" />
        </ItemAvailable>
      )
      }
      return (
      <ItemUnavailable>
        <FontAwesome name="shopping-cart" size="2x" />
      </ItemUnavailable>
    )
  }
  rowGetter = ({ index }: { index: number }) => {
      const data: Array<Object> = this.props.stockCenter.plasmidCatalog.data
      if (data[index]) {
          return data[index]
      }
  }
  cellDataGetter = ({
    rowData,
    dataKey
  }: {
    rowData: Object,
    dataKey: string
  }) => {
      if (rowData) {
          return rowData.attributes[dataKey]
      }
  }
  idGetter = ({ rowData, dataKey }: { rowData: Object, dataKey: string }) => {
      if (rowData) {
          return rowData[dataKey]
      }
  }
  inStockRenderer = ({
    cellData,
    rowIndex,
    rowData
  }: {
    cellData: any,
    rowIndex: number,
    rowData: Object
  }) => {
      const addToCart: Function = this.props.cartActions.addToCart
      const data: Array<Object> = this.props.stockCenter.plasmidCatalog.data
      if (cellData) {
          return (
        <PrimaryButton onClick={ () => addToCart(data[rowIndex]) }>
          <FontAwesome name="cart-arrow-down" /> Add to cart
        </PrimaryButton>
      )
      }
      return (
      <DisabledButton style={ { cursor: 'not-allowed', color: '#777' } }>
        <FontAwesome name="cart-arrow-down" /> Add to cart
      </DisabledButton>
    )
  }
  render() {
      const { cellWidth, height } = this.props
      const { data, links, isFetching } = this.props.stockCenter.plasmidCatalog
      const loadMoreRows: Function = isFetching ? () => {} : this.loadNextPage
      const rowCount: number = data.length + (links.next ? 1 : 0)
      return (
      <div className="table-responsive" style={ { border: 'none' } }>
        <Flex justify="center">
          <Box>
            <input
              className="search-box"
              style={ {
                  textAlign: 'center',
                  height: '100%',
                  WebkitAppearance: 'textfield'
              } }
              type="search"
              placeholder="Search Plasmids"
              ref={ el => {
                  this.searchInput = el
              } }
              onKeyDown={ this.handleKeyDown }
            />
            <PrimaryButton
              style={ { marginLeft: 7 } }
              onClick={ this.handleSearch }>
              SEARCH
            </PrimaryButton>
            <PrimaryButton style={ { marginLeft: 7 } } onClick={ this.handleClear }>
              CLEAR
            </PrimaryButton>
          </Box>
        </Flex>
        <InfiniteLoader
          isRowLoaded={ this.isRowLoaded }
          rowCount={ rowCount }
          loadMoreRows={ loadMoreRows }
          threshold={ 2 }>
          { ({ onRowsRendered, registerChild }) => {
              return (
              <Table
                ref={ registerChild }
                onRowsRendered={ onRowsRendered }
                width={ cellWidth * 3 + 350 + 260 }
                height={ height }
                headerHeight={ 50 }
                headerStyle={ { textAlign: 'center', verticalAlign: 'middle' } }
                rowHeight={ this.getRowHeight }
                rowGetter={ this.rowGetter }
                style={ { paddingTop: '2%' } }
                rowCount={ rowCount }
                rowStyle={ this.getRowStyle }
                gridStyle={ {
                    margin: '0 auto',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                } }
                rowRenderer={ this.rowRenderer }>
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
                  cellRenderer={ ({ rowData, cellData }) => {
                      if (rowData) {
                          const { id } = rowData
                          return (
                        <div style={ { whiteSpace: 'normal' } }>
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
          } }
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
