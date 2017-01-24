import React from 'react'

export const StrainDetailRow = (props) => {
    return (
      <div
        className="strain-detail-row"
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
            <b>{ Object.keys(props.left)[0] }</b>
          </div>
          <div
            style={ {
                padding: '5px 0px 5px 10px',
                width: '66.66666%',
                minWidth: 187,
                height: '100%',
                borderRight: props.right && '1px solid grey'
            } }
          >
            { Object.values(props.left)[0] }
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
                borderRight: props.right && '1px solid grey'
            } }
          >
            <b>{ props.right ? Object.keys(props.right)[0] : '\u00A0' }</b>
          </div>
          <div
            style={ {
                padding: '5px 0px 5px 10px',
                width: '66.66666%',
                minWidth: 187
            } }
          >
            { props.right && Object.values(props.right)[0] }
          </div>
        </div>
      </div>
    )
}
