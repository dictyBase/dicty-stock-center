import React, { Component, PropTypes } from 'react'
import Footer from 'dicty-react-components/src/Footer'
import { FooterItem, ListItem } from 'dicty-react-components/src/FooterItem'
import { Grid, Cell } from 'radium-grid'

export default class DictyFooter extends Component {
    displayName = 'footer';
    static propTypes = {
        logo: PropTypes.object,
        links: PropTypes.array
    }
    render() {
        return (
            <Footer>
                <Grid cellWidth="1/7" smallCellWidth="1" mediumCellWidth="1" align="center">
                    <Cell>
                      <FooterItem title="Genomes" link="#">
                          <ListItem name="List Item" link="#" />
                          <ListItem name="Dicty Stock Center" link="#" />
                          <ListItem name="List Item" link="#" />
                      </FooterItem>
                    </Cell>
                    <Cell>
                       <FooterItem title="Tools" link="#">
                           <ListItem name="List Item" link="#" />
                           <ListItem name="Home" link="#" />
                           <ListItem name="List Item" link="#" />
                       </FooterItem>
                    </Cell>
                    <Cell>
                       <FooterItem title="Explore" link="#">
                           <ListItem name="Community" link="#" />
                           <ListItem name="Contact" link="#" />
                           <ListItem name="List Item" link="#" />
                       </FooterItem>
                    </Cell>
                    <Cell>
                       <FooterItem title="Research" link="#">
                           <ListItem name="Upcoming Meetings" link="#" />
                           <ListItem name="List Item" link="#" />
                           <ListItem name="Gallery" link="#" />
                       </FooterItem>
                    </Cell>
                    <Cell>
                       <FooterItem title="Dicty Stock Center" link="#">
                           <ListItem name="List Item" link="#" />
                           <ListItem name="List Item" link="#" />
                           <ListItem name="List Item" link="#" />
                       </FooterItem>
                    </Cell>
                    <Cell>
                       <FooterItem title="Community" link="#">
                           <ListItem name="List Item" link="#" />
                           <ListItem name="List Item" link="#" />
                           <ListItem name="List Item" link="#" />
                       </FooterItem>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1" align="center">
                            <Cell>
                                <FooterItem title="Please Cite" link="#">
                                    <ListItem name="dictyBase" link="#" />
                                    <ListItem name="Dicty Stock Center" link="#" />
                                </FooterItem>
                            </Cell>
                            <Cell>
                                <FooterItem title="Supported By" link="#">
                                    <ListItem name="NIH" link="#" />
                                    <ListItem name="GMOD" link="#" />
                                    <ListItem name="Gene Ontology" link="#" />
                                </FooterItem>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </Footer>
        )
    }
}

