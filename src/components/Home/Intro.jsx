import React, { Component } from 'react'

export default class Intro extends Component {
    displayName = 'downloads links'
    render() {
        const intro = 'The DSC is a rapidly growing central repository for Dictyostelium ' +
        'discoideum strains and those of related species, plasmids, commonly used food ' +
        'bacteria, and other materials such as antibodies. The DSC is located at ' +
        'Northwestern University in Chicago, IL, USA.'

        return (
            <div>
                <p>
                    { intro }
                </p>
            </div>
        )
    }
}

