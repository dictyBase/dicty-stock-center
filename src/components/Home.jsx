import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Cell } from 'radium-grid'
import 'styles/custom.scss'

export default class Home extends Component {
    displayName = 'homepage component';
    renderUserInfo = () => {
        const { user } = this.props.auth
        return (
            <Grid>
                <Cell>
                    Hello, { user.name }
                </Cell>
                <Cell>
                    <Link to="home/profile">My Profile</Link>
                </Cell>
            </Grid>
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
        const availability = {
            plasmids: 1917,
            strains: 709,
            antibodies: 12,
            cdna: 1
        }
        const {plasmids, strains, antibodies, cdna} = availability
        return (
            <div className="container">
                <Grid cellWidth="1">
                    <Cell>{ user && this.renderUserInfo() }</Cell>
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
                                    <a href="#"><h4>Contact the DSC</h4></a>
                                    <a href="#"><h4>DSC FAQ</h4></a>
                                    <a href="#"><h4>Nomenclature Guide</h4></a>
                                    <a href="#"><h4>DSC History</h4></a>
                                    <a href="#"><h4>Other Stock Centers</h4></a>
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    <a href="#"><h4>Order Info</h4></a>
                                    <a href="#"><h4>Payment Info</h4></a>
                                    <a href="#"><h4>Deposit Info</h4></a>
                                </div>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-gray">
                                    <h4>Availability</h4>
                                    <h5><strong>{ strains }</strong> Strains</h5>
                                    <h5><strong>{ plasmids }</strong> Plasmids</h5>
                                    <h5><strong>{ antibodies }</strong> Antibodies</h5>
                                    <h5><strong>{ cdna }</strong> cDNA library</h5>
                                </div>
                            </Cell>
                            <Cell>
                                <div className="panel-dsc panel-blue">
                                    <h4>Download / View</h4>
                                    <a href="#"><h5>Phenotype Ontology</h5></a>
                                    <a href="#"><h5>Strain Characteristics</h5></a>
                                    <a href="#"><h5>Mutagenesis Methods</h5></a>
                                    <a href="#"><h5>Plasmid Keywords</h5></a>
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
                                    <a href="#"><h4>Strain Catalog</h4></a>
                                    <a href="#"><h4>Plasmid Catalog</h4></a>
                                    <a href="#"><h4>Bacterial Strains</h4></a>
                                    <a href="#"><h4>Other Materials</h4></a>
                                </div>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
