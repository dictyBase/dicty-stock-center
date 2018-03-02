// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchAvailability } from "actions/stockCenter"
import { PanelGray } from "styles"

type Props = {
  /** the Object that contains availability data */
  availability: Object,
  /** Action creator that fetches the current availability */
  fetchAvailability: Function
}

/**
 * Fetches and displays the current availability of strains and plasmids
 */

export class Availability extends Component<Props> {
  componentDidMount() {
    this.props.fetchAvailability()
  }
  render() {
    const { data } = this.props.availability
    return (
      <PanelGray>
        <h4>Strain & Plasmid Availability</h4>
        {data &&
          data.map((item, index) => {
            return (
              <h5 key={index}>
                <strong>{item.amount}</strong> {item.name}
              </h5>
            )
          })}
      </PanelGray>
    )
  }
}

const mapStateToProps = state => {
  return {
    availability: state.stockCenter.availability
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAvailability: () => {
      dispatch(fetchAvailability())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Availability)
