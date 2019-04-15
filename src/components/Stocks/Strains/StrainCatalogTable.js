/* eslint-disable react/jsx-no-bind */
// @flow
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import { AutoSizer, Column, Table } from "react-virtualized"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addToCart } from "actions/cart"

const styles = theme => ({
  table: {
    fontFamily: theme.typography.fontFamily,
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    flex: 1,
    fontSize: 16,
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
})

type Props = {
  data: Array<{
    id: string,
    label: string,
    summary: string,
  }>,
  addToCart: Function,
  /** Material-UI styling */
  classes: Object,
  rowHeight: Number,
  headerHeight: Number,
}

type State = {
  snackbarOpen: boolean,
}

/**
 * StrainCatalogTable is the table used to display strain catalog data.
 */

class StrainCatalogTable extends React.PureComponent<Props, State> {
  static defaultProps = {
    headerHeight: 64,
    rowHeight: 64,
    data: [],
  }

  state = {
    snackbarOpen: false,
  }

  getRowClassName = ({ index }) => {
    const { classes } = this.props
    return classNames(classes.flexContainer, {
      [classes.tableRowHover]: index !== -1,
    })
  }

  cellRenderer = ({ cellData }) => {
    const { classes, rowHeight } = this.props
    return (
      <TableCell
        component="div"
        className={classes.flexContainer}
        variant="body"
        style={{ height: rowHeight }}>
        {cellData}
      </TableCell>
    )
  }

  headerRenderer = ({ label }) => {
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

  descriptorRenderer = ({ rowData, cellData }) => {
    const { classes, rowHeight } = this.props
    const { id } = rowData
    return (
      <TableCell
        component="div"
        className={classes.flexContainer}
        variant="body"
        style={{ height: rowHeight }}>
        <Link to={`/strains/${id}`}>{cellData}</Link>
      </TableCell>
    )
  }

  inStockRenderer = ({ rowData, cellData }) => {
    const { headerHeight, classes } = this.props
    const { id, label } = rowData
    // if (cellData === true) {
    return (
      <TableCell
        component="div"
        className={classes.flexContainer}
        variant="head"
        style={{ height: headerHeight }}>
        <strong>
          <Button
            onClick={() => {
              this.handleClick(id, label)
            }}>
            <FontAwesomeIcon icon="shopping-cart" />
            &nbsp;Add to cart
          </Button>
        </strong>
        <Snackbar
          autoHideDuration={2500}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.state.snackbarOpen}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "cart-id",
          }}
          message={
            <span id="cart-id">
              <FontAwesomeIcon icon="check-circle" /> &nbsp; Item {id} added to
              cart
            </span>
          }
        />
      </TableCell>
    )
    // }
    // return (
    //   <TableCell
    //     component="div"
    //     className={classes.flexContainer}
    //     variant="head"
    //     style={{ height: headerHeight }}>
    //     <strong>
    //       <Button disabled>Out of stock</Button>
    //     </strong>
    //   </TableCell>
    // )
  }

  handleClick = (id, label) => {
    this.props.addToCart({
      type: "strain",
      id: id,
      name: label,
    })
    this.setState({ snackbarOpen: true })
  }

  handleClose = () => {
    this.setState({ snackbarOpen: false })
  }

  render() {
    const { classes, data, ...tableProps } = this.props
    return (
      <Paper style={{ height: 500, width: "100%" }}>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              className={classes.table}
              height={height}
              width={width}
              {...tableProps}
              headerStyle={{ backgroundColor: "#0059b3", color: "#fff" }}
              rowCount={data.length}
              overscanRowCount={3}
              rowGetter={({ index }) => data[index]}
              rowClassName={this.getRowClassName}>
              <Column
                headerRenderer={headerProps =>
                  this.headerRenderer({
                    ...headerProps,
                    columnIndex: 0,
                  })
                }
                className={classNames(classes.flexContainer)}
                cellRenderer={this.descriptorRenderer}
                dataKey="label"
                label="STRAIN DESCRIPTOR"
                width={250}
              />
              <Column
                headerRenderer={headerProps =>
                  this.headerRenderer({
                    ...headerProps,
                    columnIndex: 1,
                  })
                }
                className={classNames(classes.flexContainer)}
                cellRenderer={this.cellRenderer}
                dataKey="summary"
                label="STRAIN SUMMARY"
                width={250}
                flexGrow={1.0}
              />
              <Column
                headerRenderer={headerProps =>
                  this.headerRenderer({
                    ...headerProps,
                    columnIndex: 2,
                  })
                }
                className={classNames(classes.flexContainer)}
                cellRenderer={this.cellRenderer}
                dataKey="id"
                label="STRAIN ID"
                width={200}
              />
              <Column
                headerRenderer={headerProps =>
                  this.headerRenderer({
                    ...headerProps,
                    columnIndex: 3,
                  })
                }
                className={classNames(classes.flexContainer)}
                cellRenderer={this.inStockRenderer}
                dataKey="in_stock"
                width={200}
              />
            </Table>
          )}
        </AutoSizer>
      </Paper>
    )
  }
}

export default connect(
  null,
  { addToCart },
)(withStyles(styles)(StrainCatalogTable))
