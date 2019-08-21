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
import HeaderTableCell from "components/Stocks/CatalogTableItems/HeaderTableCell"
import StrainDescriptorTableCell from "components/Stocks/CatalogTableItems/StrainDescriptorTableCell"
import GeneralTableCell from "components/Stocks/CatalogTableItems/GeneralTableCell"
import AddToCartButton from "components/Stocks/CatalogTableItems/AddToCartButton"
import UnavailableButton from "components/Stocks/CatalogTableItems/UnavailableButton"
import styles from "./strainStyles"

const GET_MORE_STRAINS_LIST = gql`
  query MoreStrainsList($cursor: Int!) {
    listStrains(input: { cursor: $cursor, limit: 10 }) {
      totalCount
      nextCursor
      strains {
        id
        label
        summary
        in_stock
      }
    }
  }
`

type Props = {
  /** Strain catalog data */
  data: Array<{
    id: string,
    label: string,
    summary: string,
  }>,
  /** Material-UI styling */
  classes: Object,
  /** Default height of header */
  headerHeight: Number,
  /** GraphQL function to make another query */
  fetchMore: Function,
  /** Next cursor from fetched GraphQL data */
  cursor: Number,
}

/**
 * StrainCatalogTable is the table used to display strain catalog data.
 */

export class StrainCatalogTable extends React.PureComponent<Props> {
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

  cellRenderer = ({
    cellData,
    dataKey,
    parent,
    rowIndex,
  }: {
    cellData: string,
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

  headerRenderer = (label: string) => (
    <HeaderTableCell headerHeight={this.props.headerHeight} label={label} />
  )

  descriptorRenderer = ({
    rowData,
    cellData,
  }: {
    rowData: Object,
    cellData: string,
  }) => (
    <StrainDescriptorTableCell
      id={rowData.id}
      rowHeight={this.cache.rowHeight}
      descriptor={cellData}
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
      query: GET_MORE_STRAINS_LIST,
      variables: {
        cursor: cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const previousEntry = previousResult.listStrains
        const newStrains = fetchMoreResult.listStrains.strains
        const newCursor = fetchMoreResult.listStrains.nextCursor
        const newTotalCount = fetchMoreResult.listStrains.totalCount
        const allStrains = [...previousEntry.strains, ...newStrains]

        if (!fetchMoreResult) return previousResult
        return {
          listStrains: {
            totalCount: newTotalCount,
            nextCursor: newCursor,
            strains: [...new Set(allStrains)], // remove any duplicate entries
            __typename: previousEntry.__typename,
          },
        }
      },
    })
  }

  render() {
    const { classes, data } = this.props

    return (
      <Paper className={classes.catalogPaper}>
        <InfiniteLoader
          isRowLoaded={({ index }) => !!data[index]}
          loadMoreRows={this.loadMoreRows}
          rowCount={7000}>
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
                    headerRenderer={() =>
                      this.headerRenderer("STRAIN DESCRIPTOR")
                    }
                    className={classes.flexContainer}
                    cellRenderer={this.descriptorRenderer}
                    dataKey="label"
                    width={300}
                  />
                  <Column
                    headerRenderer={() => this.headerRenderer("STRAIN SUMMARY")}
                    className={classes.flexContainer}
                    cellRenderer={this.cellRenderer}
                    dataKey="summary"
                    width={250}
                    flexGrow={1}
                  />
                  <Column
                    headerRenderer={() => this.headerRenderer("STRAIN ID")}
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

export default withStyles(styles)(StrainCatalogTable)
