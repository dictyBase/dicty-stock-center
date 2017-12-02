import React from 'react'
import FontAwesome from 'react-fontawesome'

const blockTypes = [
    { label: 'H3',
        style: 'header-three',
        icon: <FontAwesome name="font" style={ {fontSize: '0.8em'} } />
    },
    { label: 'H2',
        style: 'header-two',
        icon: <FontAwesome name="font" />
    },
    { label: 'H1',
        style: 'header-one',
        icon: <FontAwesome name="font" size="lg" />
    },
    { label: 'UL',
        style: 'unordered-list-item',
        icon: <FontAwesome name="list-ul" />
    },
    { label: 'OL',
        style: 'ordered-list-item',
        icon: <FontAwesome name="list-ol" />
    },
    { label: 'Blockquote',
        style: 'blockquote',
        icon: <FontAwesome name="quote-left" />
    },
    { label: 'Code Block',
        style: 'code-block',
        icon: <FontAwesome name="code" />
    }
]

const inlineTypes = [
    { label: 'Bold',
        style: 'BOLD',
        icon: <FontAwesome name="bold" />
    },
    { label: 'Italic',
        style: 'ITALIC',
        icon: <FontAwesome name="italic" />
    },
    { label: 'Underline',
        style: 'UNDERLINE',
        icon: <FontAwesome name="underline" />
    },
    { label: 'Strikethrough',
        style: 'STRIKETHROUGH',
        icon: <FontAwesome name="strikethrough" />
    },
    { label: 'Monospace',
        style: 'CODE',
        icon: <FontAwesome name="terminal" />
    }
]

export { blockTypes, inlineTypes }
