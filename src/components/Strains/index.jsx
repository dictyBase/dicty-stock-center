import React, { Component } from 'react'
// import { Grid, Cell } from 'radium-grid'
import { Table } from 'reactabular'

import 'styles/custom.scss'

export default class Strains extends Component {
    displayName = 'strains list'
    render() {
        const rows = [
            {
                id: 100,
                name: 'John',
                tools: {
                    hammer: true
                },
                country: 'fi'
            },
            {
                id: 101,
                name: 'Jack',
                tools: {
                    hammer: false
                },
                country: 'dk'
            }
        ]
        const countries = {
            fi: 'Finland',
            dk: 'Denmark'
        }
        const columns = [
            {
                property: 'name',
                header: {
                    label: 'Name',
                    transforms: [
                        label => ({
                            onClick: () => alert(`clicked ${label}`)
                        })
                    ]
                }
            },
            {
                property: 'tools',
                header: {
                    label: 'Active',
                    transforms: [
                        label => ({
                            onClick: () => alert(`clicked ${label}`)
                        })
                    ]
                },
                cell: {
                    format: tools => tools.hammer ? 'Hammertime' : 'nope'
                }
            },
            {
                property: 'country',
                header: {
                    label: 'Country',
                    transforms: [
                        label => ({
                            onClick: () => alert(`clicked ${label}`)
                        })
                    ]
                },
                cell: {
                    format: country => countries[country]
                }
            }
        ]
        return (
          <div className="container">
            <Table.Provider
              className="pure-table pure-table-striped"
              columns={ columns } >
                <Table.Header />
                <Table.Body rows={ rows } rowKey="id" />
            </Table.Provider>
          </div>
        )
    }
}
