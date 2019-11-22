// @flow
import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import Loader from "components/common/Loader"
import InfoPageView from "./InfoPageView"
import ErrorPage from "components/Errors/ErrorPage"
import { fetchInfoPage } from "actions/page"
import { NAMESPACE } from "constants/dsctypes"

type Props = {
  /** Checks if data is currently being fetched */
  isFetching: boolean,
  /** the Page object taken from the current state  */
  page: Object,
  /** React Router's match object */
  match: Object,
  /** Action creator that fetches data from API */
  fetchInfoPage: Function,
}

/**
 * Fetches the data for the desired info page
 */

class InfoPage extends Component<Props> {
  // set defaultProps to prevent console warnings
  static defaultProps = {
    page: {
      data: {
        attributes: {},
      },
    },
  }
  componentDidMount() {
    const { match, fetchInfoPage } = this.props
    const slugName = `${NAMESPACE}-${match.params.name}`
    fetchInfoPage(slugName)
  }
  render() {
    const { isFetching, page } = this.props
    const name = page.data.attributes.name

    if (!isFetching && page.error) {
      return <ErrorPage error={page.error} />
    }

    if (!isFetching && page.data.attributes.content) {
      return (
        <Fragment>
          <Helmet>
            <title>
              {name.charAt(0).toUpperCase() + name.slice(1)} Information - Dicty
              Stock Center
            </title>
            <meta
              name="description"
              content="The Dicty Stock Center is a rapidly growing central repository for Dictyostelium discoideum strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies."
            />
          </Helmet>
          <InfoPageView page={page} match={this.props.match} />
        </Fragment>
      )
    }
    return <Loader />
  }
}

const mapStateToProps = (state, ownProps) => {
  const slugName = `${NAMESPACE}-${ownProps.match.params.name}`
  return {
    isFetching: state.page.isFetching,
    page: state.page[slugName],
  }
}

export { InfoPage }
export default connect<*, *, *, *, *, *>(mapStateToProps, { fetchInfoPage })(
  InfoPage,
)
