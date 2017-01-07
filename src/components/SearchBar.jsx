import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import 'styles/custom.scss'


export default class SearchBar extends Component {
    displayName = 'search bar'
    handleKeyDown(e) {
        if (e.keyCode === 13) {
            this.props.search(e.target.value)
        }
    }
    handleSearch() {
        this.props.search(this.searchInput.value)
    }
    handleClear() {
        this.props.clearSearch()
    }
    render() {
        return (
            <Grid cellWidth="1">
              <Cell align="center">
                <input
                  className="search-box"
                  style={ {textAlign: 'center', height: '100%', WebkitAppearance: 'textfield'} }
                  type="search"
                  placeholder={ this.props.placeholder }
                  ref={ el => { this.searchInput = el } }
                  onKeyDown={ this.handleKeyDown.bind(this) }
                />
                <button
                  className="btn btn-primary"
                  style={ {marginLeft: 7} }
                  onClick={ this.handleSearch.bind(this) }
                >
                  SEARCH
                </button>
                <button
                  className="btn btn-primary"
                  style={ {marginLeft: 7} }
                  onClick={ this.handleClear.bind(this) }
                >
                  CLEAR
                </button>
              </Cell>
            </Grid>
        )
    }
}
