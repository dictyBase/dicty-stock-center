import React, { Component } from 'react'
import { Table } from 'reactabular'
import { Grid, Cell } from 'radium-grid'
import Loader from 'components/Loader'
import 'styles/custom.scss'

export default class Strains extends Component {
    displayName = 'strains list'
    componentDidMount() {
        const { stockCenterActions } = this.props
        stockCenterActions.fetchStrainList()
    }
    getColumns = () => {
        const { cartActions } = this.props
        return [
            {
                property: 'available',
                header: {
                    label: 'Availability'
                },
                cell: {
                    format: (value, { rowData }) => (
                        <div
                          className={ rowData.available ? 'item-available' : 'item-unavailable' }>
                            <i className="fa fa-shopping-cart fa-2x"></i>
                        </div>
                    )
                }
            },
            {
                property: 'descriptor',
                header: {
                    label: 'Strain Descriptor'
                }
            },
            {
                property: 'names',
                header: {
                    label: 'Strain Names'
                }
            },
            {
                property: 'systematicName',
                header: {
                    label: 'Systematic Name'
                }
            },
            {
                property: 'id',
                header: {
                    label: 'Strain ID'
                }
            },
            {
                cell: {
                    format: (value, { rowData }) => {
                        if (rowData.available) {
                            return (
                               <button
                                 className="btn btn-primary"
                                 onClick={ () => cartActions.addToCart(rowData) }>
                                   <i className="fa fa-cart-arrow-down"></i> Add to cart
                               </button>
                            )
                        }
                    }
                },
                width: 200,
                visible: true
            }
        ]
    }
    render() {
        const { data } = this.props.stockCenter.strainCatalog
        return (
          <div className="container">
              <Grid cellWidth="1">
                  <Cell align="center">
                        <h1 className="dicty-header">Strain Catalog</h1>
                  </Cell>
              </Grid>
                  { data ? (
                      <div className="table-responsive">
                          <Table.Provider
                            className="table table-hover"
                            columns={ this.getColumns() }>
                              <Table.Header />
                              <Table.Body rows={ data } rowKey="id" />
                          </Table.Provider>
                      </div>
                    ) : <Loader message="We're testing your patience" />
                  }
          </div>
        )
    }
}
