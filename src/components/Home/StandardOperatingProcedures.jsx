import React, { Component } from 'react'
import { PanelGray, SopLink } from 'styles'

export default class Materials extends Component {
  displayName = 'link to SOPs'
  render() {
      return (
      <PanelGray>
        <SopLink href="https://northwestern.box.com/s/p0f8m70whgiuib2u0wt8gtn497ncmq8i" rel="noopener noreferrer" target="_blank">
          Standard Operating Procedures
        </SopLink>
      </PanelGray>
    )
  }
}
