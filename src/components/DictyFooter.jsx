import React, { Component, PropTypes } from 'react'
import Footer from 'dicty-react-components/src/Footer'
import { FooterItem, ListItem } from 'dicty-react-components/src/FooterItem'
import { Grid, Cell } from 'radium-grid'

export default class DictyFooter extends Component {
    displayName = 'footer';
    static propTypes = {
        items: PropTypes.array
    }
    render() {
        const { items } = this.props
        return (
            <Footer>
                <Grid cellWidth="1/7" smallCellWidth="1" mediumCellWidth="1" align="center">
                    {
                        items.map((item, index) => {
                            return (
                                <Cell key={ index }>
                                  <FooterItem title={ item.name } link="#">
                                     {
                                        item.links.map((link) => {
                                            return (<ListItem
                                                      key={ link.name }
                                                      name={ link.name }
                                                      link={ link.href }
                                                    />)
                                        })
                                     }
                                  </FooterItem>
                                </Cell>
                            )
                        })
                    }
                    <Cell>
                        <Grid cellWidth="1" align="center">
                            <Cell>
                                <FooterItem title="Please Cite" link="#">
                                    <ListItem name="dictyBase"
                                      link="http://www.ncbi.nlm.nih.gov/pubmed/23172289" />
                                    <ListItem name="Dicty Stock Center"
                                      link="http://www.ncbi.nlm.nih.gov/pubmed/23494302" />
                                </FooterItem>
                            </Cell>
                            <Cell>
                                <FooterItem title="Supported By" link="#">
                                    <ListItem name="NIH"
                                      link="https://www.nih.gov" />
                                    <ListItem name="GMOD"
                                      link="http://gmod.org/wiki/Main_Page" />
                                    <ListItem name="Gene Ontology"
                                      link="http://geneontology.org/" />
                                </FooterItem>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </Footer>
        )
    }
}

