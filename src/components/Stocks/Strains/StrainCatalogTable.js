// @flow
import React from "react"
import { Link } from "react-router-dom"
import gql from "graphql-tag"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper"
import {
  AutoSizer,
  Column,
  Table,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader,
} from "react-virtualized"
import AddToCartButton from "components/Stocks/Strains/Catalog/AddToCartButton"
import UnavailableButton from "components/Stocks/Strains/Catalog/UnavailableButton"
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
  /** Total number of strains fetched */
  totalCount: Number,
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
    cellData: String,
    dataKey: any,
    parent: any,
    rowIndex: Number,
  }) => {
    const { classes } = this.props
    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={0}
        key={dataKey}
        parent={parent}
        rowIndex={rowIndex}
        style={{ height: this.cache.rowHeight }}>
        <TableCell
          component="div"
          className={classNames(classes.flexContainer, classes.tableCell)}
          variant="body">
          {cellData}
        </TableCell>
      </CellMeasurer>
    )
  }

  headerRenderer = (label: string) => {
    const { headerHeight, classes } = this.props
    return (
      <TableCell
        component="div"
        className={classes.flexContainer}
        variant="head"
        style={{ height: headerHeight, color: "#fff" }}>
        <strong>{label}</strong>
      </TableCell>
    )
  }

  descriptorRenderer = ({
    rowData,
    cellData,
  }: {
    rowData: Object,
    cellData: string,
  }) => {
    const { classes } = this.props
    const { id } = rowData
    return (
      <TableCell
        component="div"
        className={classNames(classes.flexContainer, classes.tableCell)}
        variant="body"
        style={{ height: this.cache.rowHeight }}>
        <Link to={`/strains/${id}`}>{cellData}</Link>
      </TableCell>
    )
  }

  inStockRenderer = ({
    rowData,
    cellData,
  }: {
    rowData: Object,
    cellData: string,
  }) => {
    const { id, label } = rowData

    return cellData ? (
      <AddToCartButton id={id} label={label} rowHeight={this.cache.rowHeight} />
    ) : (
      <UnavailableButton rowHeight={this.cache.rowHeight} />
    )
  }

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

        if (!fetchMoreResult) return previousResult
        return {
          listStrains: {
            totalCount: newTotalCount,
            nextCursor: newCursor,
            strains: [...previousEntry.strains, ...newStrains],
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
