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

