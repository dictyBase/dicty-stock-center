import React from 'react'

const blockTypes = [
    { label: 'H3',
        style: 'header-three',
        icon: <i className="fa fa-font" style={ {fontSize: '0.8em'} }></i>
    },
    { label: 'H2',
        style: 'header-two',
        icon: <i className="fa fa-font" ></i>
    },
    { label: 'H1',
        style: 'header-one',
        icon: <i className="fa fa-lg fa-font" ></i>
    },
    { label: 'UL',
        style: 'unordered-list-item',
        icon: <i className="fa fa-list-ul"></i>
    },
    { label: 'OL',
        style: 'ordered-list-item',
        icon: <i className="fa fa-list-ol"></i>
    },
    { label: 'Blockquote',
        style: 'blockquote',
        icon: <i className="fa fa-quote-left"></i>
    },
    { label: 'Code Block',
        style: 'code-block',
        icon: <i className="fa fa-code"></i>
    }
]

const inlineTypes = [
    { label: 'Bold',
        style: 'BOLD',
        icon: <i className="fa fa-bold"></i>
    },
    { label: 'Italic',
        style: 'ITALIC',
        icon: <i className="fa fa-italic"></i>
    },
    { label: 'Underline',
        style: 'UNDERLINE',
        icon: <i className="fa fa-underline"></i>
    },
    { label: 'Strikethrough',
        style: 'STRIKETHROUGH',
        icon: <i className="fa fa-strikethrough"></i>
    },
    { label: 'Monospace',
        style: 'CODE',
        icon: <i className="fa fa-terminal"></i>
    }
]

export { blockTypes, inlineTypes }
