import React, { Component } from 'react'

export default class StrainDetailRow extends Component {
    displayName = 'strain detail row'
    render() {
        return (
          <div
            className={ this.props.right ? 'strain-detail-row' : 'strain-detail-row single' }
            style={ {
                flexGrow: 1,
                flexBasis: 0,
                display: 'flex',
                width: '100%',
                minWidth: 304,
                justifyContent: 'center',
                alignItems: 'center'
            } }
          >
            <div
              className="strain-detail-item"
              style={ {
                  display: 'flex',
                  flexGrow: 1,
                  flexBasis: 0,
                  width: '100%',
                  borderBottom: '1px solid grey',
                  height: '100%'
              } }
            >
              <div
                style={ {
                    padding: '5px 0px 5px 10px',
                    width: '33.3333%',
                    minWidth: 117,
                    height: '100%',
                    borderRight: '1px solid grey'
                } }
              >
                <b>{ Object.keys(this.props.left)[0] }</b>
              </div>
              <div
                style={ {
                    padding: '5px 0px 5px 10px',
                    width: '66.66666%',
                    minWidth: 187,
                    height: '100%',
                    borderRight: this.props.right && '1px solid grey'
                } }
              >
                { Object.values(this.props.left)[0] }
              </div>
            </div>
            <div
              className="strain-detail-item"
              style={ {
                  display: 'flex',
                  flexGrow: 1,
                  flexBasis: 0,
                  width: '100%',
                  borderBottom: '1px solid grey',
                  height: '100%'
              } }
            >
              <div
                style={ {
                    padding: '5px 0px 5px 10px',
                    width: '33.3333%',
                    minWidth: 117,
                    height: '100%',
                    borderRight: this.props.right && '1px solid grey'
                } }
              >
                <b>{ this.props.right ? Object.keys(this.props.right)[0] : '\u00A0' }</b>
              </div>
              <div
                style={ {
                    padding: '5px 0px 5px 10px',
                    width: '66.66666%',
                    minWidth: 187
                } }
              >
                { this.props.right && Object.values(this.props.right)[0] }
              </div>
            </div>
          </div>
        )
    }
}
