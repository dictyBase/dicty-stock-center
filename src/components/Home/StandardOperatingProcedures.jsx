import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { PanelGray } from 'styles'

export default class Materials extends Component {
  displayName = 'link to SOPs'
  render() {
      return (
      <PanelGray>
        <a href="https://northwestern.box.com/s/p0f8m70whgiuib2u0wt8gtn497ncmq8i" rel="noopener noreferrer" target="_blank">
          Standard Operating Procedures
        </a>&nbsp;
        <FontAwesome name="file-pdf-o" />
      </PanelGray>
    )
  }
}
