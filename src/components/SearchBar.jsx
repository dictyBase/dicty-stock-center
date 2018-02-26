import React, { Component } from "react"
import { Flex, Box } from "rebass"
import { PrimaryButton } from "styles"

export default class SearchBar extends Component {
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
    this.searchInput.value = ""
  }
  render() {
    return (
      <Flex justify="center">
        <Box>
          <input
            style={{
              textAlign: "center",
              height: "100%",
              WebkitAppearance: "textfield"
            }}
            type="search"
            placeholder={this.props.placeholder}
            ref={el => {
              this.searchInput = el
            }}
            onKeyDown={this.handleKeyDown.bind(this)}
          />
          <PrimaryButton
            style={{ marginLeft: 7 }}
            onClick={this.handleSearch.bind(this)}>
            SEARCH
          </PrimaryButton>
          <PrimaryButton
            style={{ marginLeft: 7 }}
            onClick={this.handleClear.bind(this)}>
            CLEAR
          </PrimaryButton>
        </Box>
      </Flex>
    )
  }
}
