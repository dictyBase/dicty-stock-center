import React, { Component } from 'react'
import { Link } from 'react-router'
import 'styles/core.scss'

export default class Home extends Component {
    displayName = 'homepage component';
    renderUserInfo = () => {
        const { user } = this.props.auth
        return (
            <div className="row">
                <div className="col-sm-4">
                    Hello, { user.name }
                </div>
                <div className="col-sm-offset-4 col-sm-4 text-right">
                    <Link to="home/profile">My Profile</Link>
                </div>
            </div>
        )
    }
    render() {
        const { user } = this.props.auth
        const header = 'Welcome to Dicty Stock Center (DSC)'
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
        const plasmids = 1917
        const strains = 709
        const antibodies = 12
        const cdna = 1
        return (
            <div className="container">
                { user && this.renderUserInfo() }
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="page-header">{ header }</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>{ intro }</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-xs-12">
                                { subIntro }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="panel-dsc panel-blue">
                                    <a href="#"><h4>Contact the DSC</h4></a>
                                    <a href="#"><h4>DSC FAQ</h4></a>
                                    <a href="#"><h4>Nomenclature Guide</h4></a>
                                    <a href="#"><h4>DSC History</h4></a>
                                    <a href="#"><h4>Other Stock Centers</h4></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="panel-dsc panel-blue">
                                    <a href="#"><h4>Order Info</h4></a>
                                    <a href="#"><h4>Payment Info</h4></a>
                                    <a href="#"><h4>Deposit Info</h4></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel-dsc panel-gray">
                                    <h4>Availability</h4>
                                    <h5><strong>{ strains }</strong> Strains</h5>
                                    <h5><strong>{ plasmids }</strong> Plasmids</h5>
                                    <h5><strong>{ antibodies }</strong> Antibodies</h5>
                                    <h5><strong>{ cdna }</strong> cDNA library</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel-dsc panel-blue">
                                    <h4>Download / View</h4>
                                    <a href="#"><h5>Phenotype Ontology</h5></a>
                                    <a href="#"><h5>Strain Characteristics</h5></a>
                                    <a href="#"><h5>Mutagenesis Methods</h5></a>
                                    <a href="#"><h5>Plasmid Keywords</h5></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-xs-12">
                                <img src="http://placehold.it/260x150" className="img-responsive" />
                            </div>
                            <div className="col-xs-12">
                                <p>The mutant pictures shown here here
                                    have been provided by Bill Loomis.
                                    Many mutants are available at the DSC
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="panel-dsc panel-gray">
                                    <a href="#"><h4>Strain Catalog</h4></a>
                                    <a href="#"><h4>Plasmid Catalog</h4></a>
                                    <a href="#"><h4>Bacterial Strains</h4></a>
                                    <a href="#"><h4>Other Materials</h4></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
