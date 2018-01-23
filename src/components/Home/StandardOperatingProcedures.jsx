import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { PanelGray } from 'styles'

export default class Materials extends Component {
  displayName = 'link to SOPs'
  render() {
      return (
      <PanelGray>
        <a href="http://wiki.dictybase.org/dictywiki/index.php/Standard_Operating_Procedures" rel="noopener noreferrer" target="_blank">
          Standard Operating Procedures
        </a>&nbsp;
        <FontAwesome name="file-pdf-o" />
      </PanelGray>
    )
  }
}
