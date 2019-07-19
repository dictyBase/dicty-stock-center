// @flow
import React from "react"
import gql from "graphql-tag"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader"
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer"
import Column from "react-virtualized/dist/commonjs/Table/Column"
import Table from "react-virtualized/dist/commonjs/Table"
import CellMeasurerCache from "react-virtualized/dist/commonjs/CellMeasurer/CellMeasurerCache"
import HeaderTableCell from "components/Stocks/Plasmids/CatalogItems/HeaderTableCell"
import GeneralTableCell from "components/Stocks/Plasmids/CatalogItems/GeneralTableCell"
import NameTableCell from "components/Stocks/Plasmids/CatalogItems/NameTableCell"
import AddToCartButton from "components/Stocks/Plasmids/CatalogItems/AddToCartButton"
import UnavailableButton from "components/Stocks/Plasmids/CatalogItems/UnavailableButton"
import styles from "./plasmidStyles"

const GET_MORE_PLASMIDS_LIST = gql`
  query MorePlasmidsList($cursor: Int!) {
    listPlasmids(input: { cursor: $cursor, limit: 10 }) {
      totalCount
      nextCursor
      plasmids {
        id
        name
        summary
        in_stock
      }
    }
  }
`

type Props = {
  /** Plasmid catalog data */
  data: Array<{
    id: string,
    label: string,
    summary: string,
    in_stock: Boolean,
  }>,
  /** Material-UI styling */
  classes: Object,
  /** Default height of header */
  headerHeight: Number,
  /** Total number of plasmids fetched */
  totalCount: Number,
  /** GraphQL function to make another query */
  fetchMore: Function,
  /** Next cursor from fetched GraphQL data */
  cursor: Number,
}

/**
 * PlasmidCatalogTable is the table used to display plasmid catalog data.
 */

export class PlasmidCatalogTable extends React.PureComponent<Props> {
  static defaultProps = {
    headerHeight: 64,
    data: [],
  }

  cache = new CellMeasurerCache({
    fixedWidth: true, // don't need to calculate width of rows
    defaultHeight: 64,
    minHeight: 64,
  })

  getRowClassName = ({ index }: { index: Number }) => {
    const { classes } = this.props
    // don't return hover effect on header
    if (index !== -1) {
      return classNames(classes.flexContainer, classes.tableRowHover)
    }
    return classes.flexContainer
  }

  headerRenderer = (label: string) => (
    <HeaderTableCell headerHeight={this.props.headerHeight} label={label} />
  )

  cellRenderer = ({
    cellData,
    dataKey,
    parent,
    rowIndex,
  }: {
    cellData: String,
    dataKey: any,
    parent: any,
    rowIndex: Number,
  }) => (
    <GeneralTableCell
      cellData={cellData}
      cache={this.cache}
      key={dataKey}
      parent={parent}
      rowIndex={rowIndex}
      rowHeight={this.cache.rowHeight}
    />
  )

  nameRenderer = ({
    rowData,
    cellData,
  }: {
    rowData: Object,
    cellData: string,
  }) => (
    <NameTableCell
      id={rowData.id}
      rowHeight={this.cache.rowHeight}
      name={cellData}
    />
  )

  inStockRenderer = ({
    rowData,
    cellData,
  }: {
    rowData: Object,
    cellData: string,
  }) =>
    cellData ? (
      <AddToCartButton
        id={rowData.id}
        label={rowData.label}
        rowHeight={this.cache.rowHeight}
      />
    ) : (
      <UnavailableButton rowHeight={this.cache.rowHeight} />
    )

  loadMoreRows = () => {
    const { fetchMore, cursor } = this.props
    return fetchMore({
      query: GET_MORE_PLASMIDS_LIST,
      variables: {
        cursor: cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const previousEntry = previousResult.listPlasmids
        const newPlasmids = fetchMoreResult.listPlasmids.plasmids
        const newCursor = fetchMoreResult.listPlasmids.nextCursor
        const newTotalCount = fetchMoreResult.listPlasmids.totalCount

        if (!fetchMoreResult) return previousResult
        return {
          listPlasmids: {
            totalCount: newTotalCount,
            nextCursor: newCursor,
            plasmids: [...previousEntry.plasmids, ...newPlasmids],
            __typename: previousEntry.__typename,
          },
        }
      },
    })
  }

  render() {
    const { classes, data, totalCount } = this.props

    return (
      <Paper className={classes.catalogPaper}>
        <InfiniteLoader
          isRowLoaded={({ index }) => !!data[index]}
          loadMoreRows={this.loadMoreRows}
          rowCount={totalCount}>
          {({ onRowsRendered, registerChild }) => (
            <AutoSizer>
              {({ height, width }) => (
                <Table
                  ref={registerChild}
                  height={height}
                  width={width}
                  headerHeight={64}
                  rowStyle={{
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  }}
                  headerStyle={{ backgroundColor: "#0059b3", color: "#fff" }}
                  rowCount={data.length}
                  overscanRowCount={5}
                  rowGetter={({ index }) => data[index]}
                  deferredMeasurementCache={this.cache}
                  rowHeight={this.cache.rowHeight}
                  rowClassName={this.getRowClassName}
                  onRowsRendered={onRowsRendered}>
                  <Column
                    headerRenderer={() => this.headerRenderer("PLASMID NAME")}
                    className={classes.flexContainer}
                    cellRenderer={this.nameRenderer}
                    dataKey="name"
                    width={300}
                  />
                  <Column
                    headerRenderer={() => this.headerRenderer("DESCRIPTION")}
                    className={classes.flexContainer}
                    cellRenderer={this.cellRenderer}
                    dataKey="summary"
                    width={300}
                    flexGrow={1}
                  />
                  <Column
                    headerRenderer={() => this.headerRenderer("PLASMID ID")}
                    className={classes.flexContainer}
                    cellRenderer={this.cellRenderer}
                    dataKey="id"
                    width={200}
                  />
                  <Column
                    headerRenderer={() => this.headerRenderer("")}
                    className={classes.flexContainer}
                    cellRenderer={this.inStockRenderer}
                    dataKey="in_stock"
                    width={200}
                  />
                </Table>
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </Paper>
    )
  }
}

export default withStyles(styles)(PlasmidCatalogTable)
