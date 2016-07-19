import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
import { Link } from 'react-router'
import 'styles/custom.scss'

export default class Home extends Component {
    displayName = 'homepage component';
    renderGreeting = () => {
        const { user } = this.props.auth
        return (
            <span>Hello, { user.name }</span>
        )
    }
    render() {
        const { user } = this.props.auth
        const intro = `
        The DSC is a rapidly growing central repository for Dictyostelium discoideum strains,
        isolates of other cellular slime mold species, plasmids, commonly used food bacteria
        and other materials, such as antibodies. The DSC is located at Northwestern University
        in Chicago, IL, USA.
        `
        const subIntro = `
        The collection is being built by requesting published strains and plasmids.
        We encourage and also periodically remind investigators to send new mutants, natural
        isolates, and plasmids, once they have been published. Validation of the materials is
        mostly done by observable phenotypes, while mutants are also tested for drug-resistance
        markers. Plasmids will be checked by performing one or two diagnostic restriction enzyme
        digests, and are stored both as DNA and as transformed bacteria at -80°C. However, a large
        component of the quality control program will consist of feedback from the recipients of
        materials. Strains are stored at two different locations in liquid nitrogen, either as
        spores or as vegetative amoebae.
        `
        const links = [
            {name: 'Contact the DSC', to: ''},
            {name: 'DSC FAQ', to: ''},
            {name: 'Nomenclature Guide', to: ''},
            {name: 'DSC History', to: ''},
            {name: 'Other Stock Centers', to: ''}
        ]
        const info = [
            {name: 'Order Information', to: '/page/orderInformation'},
            {name: 'Payment Information', to: '/page/paymentInformation'},
            {name: 'Deposit Information', to: '/page/depositInformation'}
        ]
        const availability = [
            {name: 'Strains', amount: 709},
            {name: 'Plasmids', amount: 1917},
            {name: 'Antibodies', amount: 12},
            {name: 'cDNA library', amount: 1}
        ]
        const downloads = [
            {name: 'Phenotype Ontology', to: ''},
            {name: 'Strain Characteristics', to: ''},
            {name: 'Mutagenesis Methods', to: ''},
            {name: 'Plasmid Keywords', to: ''}
        ]
        const materials = [
            {name: 'Strain Catalog', to: ''},
            {name: 'Plasmid Catalog', to: ''},
            {name: 'Bacterial Strains', to: ''},
            {name: 'Other Materials', to: ''}
        ]
        return (
            <div className="container">
                <Grid cellWidth="1">
                    <Cell>{ user && this.renderGreeting() }</Cell>
                    <Cell>
                        <h1 className="page-header">
                            Welcome to Dicty Stock Center (DSC)
                        </h1>
                    </Cell>
                    <Cell>
                        <p>{ intro }</p>
                    </Cell>
                </Grid>
                <Grid smallCellWidth="1">
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell>{ subIntro }</Cell>
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    { links.map((link, index) => {
                                        return (
                                            <h4 key={ index }>
                                                <Link to={ link.to }>{ link.name }</Link>
                                            </h4>
                                        )
                                    }) }
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    { info.map((link, index) => {
                                        return (
                                            <h4 key={ index }>
                                                <Link to={ link.to }>{ link.name }</Link>
                                            </h4>
                                        )
                                    }) }
                                </div>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-gray">
                                    <h4>Availability</h4>
                                    { availability.map((item, index) => {
                                        return (
                                            <h5 key={ index }>
                                                <strong>{ item.amount }</strong> { item.name }
                                            </h5>
                                        )
                                    }) }
                                </div>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    <h4>Download / View</h4>
                                    { downloads.map((link, index) => {
                                        return (
                                            <h5 key={ index }>
                                                <Link to={ link.to }>{ link.name }</Link>
                                            </h5>
                                        )
                                    }) }
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell align="center">
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
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-gray">
                                { materials.map((link, index) => {
                                    return (
                                        <h4 key={ index }>
                                            <Link to={ link.to }>{ link.name }</Link>
                                        </h4>
                                    )
                                }) }
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
