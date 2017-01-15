import React from 'react'

export const PhenotypeRow = (props) => {
    return (
      <div
        className="phenotype-row"
        style={ {
            display: 'flex',
            maxWidth: '100%', borderBottom: '1px solid black'} }>
        <div
          style={ {
              flexGrow: 1,
              flexBasis: '30%',
              borderRight: '1px solid black',
              padding: '5px 0px 5px 10px'
          } }
        >
          { props.phenotype }
        </div>
        <div
          style={ {
              flexGrow: 1,
              flexBasis: '30%',
              borderRight: '1px solid black',
              padding: '5px 0px 5px 10px'
          } }
        >
          { props.notes }
        </div>
        <div
          style={ {
              flexGrow: 1,
              flexBasis: '30%',
              borderRight: '1px solid black',
              padding: '5px 10px 5px 10px'
          } }
        >
          { props.reference }
        </div>
        <div style={ {flexGrow: 1, flexBasis: '10%', padding: '5px 0px 5px 10px', textAlign: 'center'} }>
          <i className="fa fa-file fa-2x" style={ {padding: 5} }/>
          <i className="fa fa-file fa-2x" style={ {padding: 5} }/>
        </div>
      </div>
    )
}
