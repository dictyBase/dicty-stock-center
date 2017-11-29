import React, { Component } from 'react'

export default class Carousel extends Component {
    displayName = 'front page carousel'
    render() {
        return (
            <figure>
              <img className="img-responsive"
                src="http://wiki.dictybase.org/dictywiki/images/c/cd/DG1100.jpg"
              />
              <figcaption>
                  The mutant pictures shown here here
                  have been provided by Bill Loomis.
                  Many mutants are available at the DSC
              </figcaption>
            </figure>
        )
    }
}

