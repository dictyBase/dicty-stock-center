import React, { Component } from 'react'
import { Grid, Cell } from 'radium-grid'
// import Panel from 'dicty-react-components/src/Panel'
// import PanelBody from 'dicty-react-components/src/PanelBody'
// import PanelHeader from 'dicty-react-components/src/PanelHeader'
// import PanelTitle from 'dicty-react-components/src/PanelTitle'
import 'styles/core.scss'

export default class Cart extends Component {
    displayName = 'Shopping cart items';

    render() {
        return (
                    <div>
                    <hr />
                    <Grid verticalAlign="middle" >
                        <Cell width="5/8" smallWidth="1">
                            <h2>DBS982374</h2>
                            <h5>strainid</h5>
                        </Cell>
                        <Cell width="1/8" smallWidth="1/3" align="right">
                            <input type="number"
                              className="form-control"
                              placeholder="Quantity" />
                        </Cell>
                        <Cell width="1/8" smallWidth="1" align="right">
                            <h3 className="text-success">$30.00</h3>
                        </Cell>
                        <Cell width="1/8" smallWidth="1" align="right">
                            <button type="button" className="btn btn-default">
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </Cell>
                    </Grid>
                    <hr/>
                    </div>
        )
    }
}
