// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Table from "react-virtualized/dist/commonjs/Table"
import Column from "react-virtualized/dist/commonjs/Table/Column"
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader"
import { Flex, Box } from "rebass"
import FontAwesome from "react-fontawesome"
import TableLoader from "components/TableLoader"
import {
  fetchStrains,
  searchStrains,
  clearStrainSearch,
} from "actions/stockCenter"
import { addToCart } from "actions/cart"
import {
  ItemAvailable,
  ItemUnavailable,
  TableResponsive,
  PrimaryButton,
  DisabledButton,
} from "styles"
import "react-virtualized/styles.css"

type Props = {
  isFetching: boolean,
  paginationNumber: number,
  links: Object,
  strainCatalogData: Array<Object>,
  fetchStrains: Function,
  searchStrains: Function,
  clearStrainSearch: Function,
  addToCart: Function,
  cellHeight: number,
  cellWidth: number,
}

class StrainTable extends Component<Props> {
  static defaultProps = {
    cellWidth: 130,
    cellHeight: 60,
  }

  searchInput: ?HTMLInputElement

  loadNextPage = () => {
    const isFetching = this.props.isFetching
    const number = this.props.paginationNumber
    const links = this.props.links
    if (
      !isFetching &&
      links.next &&
      this.searchInput &&
      this.searchInput.value === ""
    ) {
      this.props.fetchStrains(number + 1, 10)
    }
  }
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.search(e.target.value)
    }
  }
  search = text => {
    this.props.searchStrains(1, 1, text)
    this.forceUpdate()
  }
  handleSearch = () => {
    if (!this.searchInput) {
      return
    }

    this.search(this.searchInput.value)
  }
  handleClear = () => {
    this.clearSearch()
  }
  clearSearch = () => {
    const number = this.props.paginationNumber
    if (this.searchInput && this.searchInput.value !== "") {
      this.searchInput.value = ""
      this.props.clearStrainSearch()
      this.props.fetchStrains(number + 1, 10)
    }
  }
  getRowHeight = ({ index }) => {
    const data = this.props.strainCatalogData
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
  rowGetter = ({ index }) => {
    const data = this.props.strainCatalogData
    if (data[index]) {
      return data[index]
    }
  }
  getRowStyle = ({ index }) => {
    const data = this.props.strainCatalogData
    if (index === -1) {
      return {
        margin: "0 auto",
        borderTop: "1px solid #efefef",
        borderBottom: "1px solid #efefef",
      }
    } else if (index === data.length) {
      return {}
    } else if (index % 2 > 0) {
      return {
        borderBottom: "1px solid #efefef",
      }
    } else if (index % 2 === 0) {
      return {
        borderBottom: "1px solid #efefef",
      }
    }
  }
  isRowLoaded = ({ index }) => {
    const data = this.props.strainCatalogData
    return !!data[index]
  }
  rowRenderer = ({ index, columns, key, style, className }) => {
    let content
    if (!this.isRowLoaded({ index })) {
      content = <TableLoader />
    } else {
      content = columns
    }
    return (
      <div className={className} key={key} style={style}>
        {content}
      </div>
    )
  }
  availabilityRenderer = cellData => {
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
  attributeGetter = ({ rowData, dataKey }) => {
    if (rowData) {
      return rowData.attributes[dataKey]
    }
  }
  inStockRenderer = ({ cellData, rowIndex, rowData }) => {
    const data = this.props.strainCatalogData
    if (cellData) {
      return (
        <PrimaryButton onClick={() => this.props.addToCart(data[rowIndex])}>
          <FontAwesome name="cart-arrow-down" /> Add to cart
        </PrimaryButton>
      )
    }
    return (
      <DisabledButton style={{ cursor: "not-allowed", color: "#777" }}>
        <FontAwesome name="cart-arrow-down" /> Add to cart
      </DisabledButton>
    )
  }
  cellDataGetter = ({ rowData, dataKey }) => {
    if (rowData) {
      return rowData[dataKey]
    }
  }
  descriptorRenderer = ({ rowData, cellData }) => {
    if (rowData) {
      const { id } = rowData
      return (
        <div style={{ whiteSpace: "normal" }}>
          <Link to={`/strains/${id}`}>{cellData}</Link>
        </div>
      )
    }
  }
  render() {
    const data = this.props.strainCatalogData
    const isFetching = this.props.isFetching
    const links = this.props.links
    const loadMoreRows = isFetching ? () => {} : this.loadNextPage
    const rowCount = data.length + (links.next ? 1 : 0)
    const { cellWidth, cellHeight } = this.props
    return (
      <TableResponsive style={{ border: "none" }}>
        <Flex justify="center">
          <Box>
            <input
              style={{
                textAlign: "center",
                height: "100%",
                WebkitAppearance: "textfield",
                width: "400px",
              }}
              type="search"
              placeholder="Search Strains"
              ref={input => (this.searchInput = input)}
              onKeyDown={this.handleKeyDown}
            />
            <PrimaryButton
              style={{ marginLeft: 7 }}
              onClick={this.handleSearch}>
              SEARCH
            </PrimaryButton>
            <PrimaryButton style={{ marginLeft: 7 }} onClick={this.handleClear}>
              CLEAR
            </PrimaryButton>
          </Box>
        </Flex>
        <InfiniteLoader
          isRowLoaded={this.isRowLoaded}
          rowCount={rowCount}
          loadMoreRows={loadMoreRows}
          threshold={0}>
          {({ onRowsRendered, registerChild }) => {
            return (
              <Table
                ref={registerChild}
                onRowsRendered={onRowsRendered}
                width={cellWidth * 3 + 350 + 260}
                height={cellHeight * 7}
                headerHeight={50}
                headerStyle={{
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
                rowHeight={this.getRowHeight}
                rowGetter={this.rowGetter}
                style={{ paddingTop: "2%" }}
                rowCount={rowCount}
                rowStyle={this.getRowStyle}
                gridStyle={{
                  margin: "0 auto",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
                rowRenderer={this.rowRenderer}>
                <Column
                  label="Strain Descriptor"
                  width={350}
                  dataKey="description"
                  cellDataGetter={this.attributeGetter}
                  cellRenderer={this.descriptorRenderer}
                />
                <Column
                  label="Strain Name"
                  width={260}
                  dataKey="name"
                  cellDataGetter={this.attributeGetter}
                />
                <Column
                  label="Strain ID"
                  width={cellWidth}
                  dataKey="id"
                  cellDataGetter={this.cellDataGetter}
                />
                <Column
                  width={cellWidth}
                  dataKey="in_stock"
                  cellRenderer={this.inStockRenderer}
                  cellDataGetter={this.attributeGetter}
                />
              </Table>
            )
          }}
        </InfiniteLoader>
      </TableResponsive>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.stockCenter.strainCatalog.isFetching,
    links: state.stockCenter.strainCatalog.links,
    paginationNumber: state.stockCenter.strainCatalog.meta.pagination.number,
    strainCatalogData: state.stockCenter.strainCatalog.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStrains: (page, size) => {
      dispatch(fetchStrains(page, size))
    },
    searchStrains: (page, size, search) => {
      dispatch(searchStrains(page, size, search))
    },
    clearStrainSearch: () => {
      dispatch(clearStrainSearch())
    },
    addToCart: id => {
      dispatch(addToCart(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StrainTable)
