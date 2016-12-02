import React, { Component, PropTypes } from 'react'
import 'react-virtualized/styles.css'
import { Table, Column, InfiniteLoader } from 'react-virtualized'
import Loader from 'components/Loader'
import 'styles/custom.scss'

export default class StrainTable extends Component {
  displayName = 'strain table'
  constructor(props) {
      super(props)
  }
  loadNextPage({ startIndex, stopIndex }) {
      const { stockCenterActions } = this.props
      stockCenterActions.fetchNextPage()
      this.forceUpdate()
  }
  render() {
      let i
      const { cartActions } = this.props
      const { data, pages, search, isFetching } = this.props.strainCatalog



      let rows = data.slice(0, pages * 10)
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
      const columnNames = this.props.columnNames
      let rowHeaders = columnNames.map((columnName) => {
          return (
            <div className="rowHeader" style={ {flexBasis: 0, flexGrow: 1, textAlign: 'center'} }><h4>{columnName}</h4></div>
          )
      })
      rowHeaders.push(
        <div className="rowHeader" style={ {flexBasis: 0, flexGrow: 1, textAlign: 'center'} }></div>
      )
      const header = (<div className="header" style={ {display: 'flex', paddingTop: '2.5%', paddingBottom: '1%'} }>{ rowHeaders }</div>)
      const rowJsx = data.slice(0, pages * 10).map(() => {
          return (
            <div className="row" style={ {margin: '0 auto'} }>
              { rows.map((row, a) => {
                  let rowData = []
                  for (let property in row) {
                    console.log(property)
                      if (property === 'available') {
                          rowData.push(
                            <div style={ {flexBasis: 0, flexGrow: 1, textAlign: 'center'} }>
                              <div className={ row[property] ? 'item-available' : 'item-unavailable' }>
                                <i className="fa fa-shopping-cart fa-2x"></i>
                              </div>
                            </div>
                          )
                      } else if (property === 'type') {

                      } else {
                          rowData.push(
                            <div className="cell" style={ {flexBasis: 0, flexGrow: 1, textAlign: 'center'} }>
                              {row[property]}
                            </div>
                          )
                      }
                  }
                  rowData.push(
                    <div style={ {flexBasis: 0, flexGrow: 1} }>
                      {
                        row['available'] &&
                        <button
                          className="btn btn-primary"
                          onClick={ () => cartActions.addToCart(rows[a]) }
                        >
                          <i className="fa fa-cart-arrow-down"></i> Add to cart
                        </button>
                    }
                    </div>
                  )
                  return (
                    <div style={ {display: 'flex', paddingTop: '.7%', paddingBottom: '.7%', borderTop: '1px solid grey'} }>
                      { rowData }
                    </div>
                  )
              }) }
            </div>
          )
      })
      return (
        <div className="table-responsive">
          { header }
          <div className="table" style={ {overflowY: 'scroll', height: this.props.rowHeight * 6} }>
            { rowJsx }
            {isFetching && <Loader message="Loading rows..." />}
          </div>
        </div>
      )
  }
}
