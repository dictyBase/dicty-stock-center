// import React from 'react';

// import StyleButton from './StyleButton';

// export default function EntityControls(props) {
//   let { entityControls } = props;
//   var currentStyle = props.editorState.getCurrentInlineStyle();
//   return (
//     <div className="RichEditor-controls">
//       {entityControls.map(type =>
//         <StyleButton
//           key={type.label}
//           active={currentStyle.has(type.style)}
//           label={type.label}
//           onToggle={type. action}
//         />
//       )}
//     </div>
//   );
// }


import React, { Component, PropTypes } from 'react'
import ToolItem from 'components/ToolItem'

export default class EntityToolbar extends Component {
    displayName = 'toolbar with entity controls'
    static propTypes = {
        editorState: PropTypes.object.isRequired,
        toolSpec: PropTypes.array.isRequired
    }
    onMouseDown = (e) => {
        e.preventDefault()
    }
    render() {
        const { toolSpec, editorState } = this.props
        const currentStyle = editorState.getCurrentInlineStyle()
        return (
          <div
            className="btn-group"
            role="group"
            onMouseDown={ this.onMouseDown } >
                { toolSpec.map((type, index) =>
                  <ToolItem
                    key={ index }
                    type={ type }
                    clickFn={ type.action }
                    active={ currentStyle.has(type.style) }
                  />
                ) }
          </div>
        )
    }
}
