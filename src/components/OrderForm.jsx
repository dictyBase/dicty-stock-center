import React, { Component } from 'react'
import Panel from 'components/dicty-react-components/src/Panel'
import PanelHeader from 'components/dicty-react-components/src/PanelHeader'
import PanelTitle from 'components/dicty-react-components/src/PanelTitle'
import PanelBody from 'components/dicty-react-components/src/PanelBody'
import 'styles/core.scss'

export default class OrderForm extends Component {
    displayName = 'dsc order form';
    render() {
        return (
            <div className="container">
              <h2 className="page-header text-center">
                Please fill out the following information to complete your order
              </h2>
              <div className="row">
                <div className="col-md-offset-3 col-md-6">
                  <Panel>
                    <PanelHeader>
                      <PanelTitle>Shipping</PanelTitle>
                    </PanelHeader>
                    <PanelBody>
                      <form role="form">
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>First Name:</label>
                          <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>Last Name:</label>
                          <input type="text" className="form-control" id="lastName" />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>Organization:</label>
                          <input type="text" className="form-control" id="org" />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>Lab/Group:</label>
                          <input type="text" className="form-control" id="group" />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>Address:</label>
                          <input type="text" className="form-control" id="addr" />
                        </div>
                        <div className="form-group">
                          <label>Address:</label>
                          <input type="text" className="form-control" id="addr2"
                            placeholder="Optional" />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>City:</label>
                          <input type="text" className="form-control" id="city" />
                        </div>
                        <div className="form-group">
                          <label>State/Province:</label>
                          <input type="text" className="form-control" id="state" />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>ZIP:</label>
                          <input type="number" className="form-control" id="zip" />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>Country:</label>
                          <input type="text" className="form-control" id="country" />
                        </div>
                        <div className="form-group">
                          <label>Phone:</label>
                          <input type="text" className="form-control" id="phone" />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>Email:</label>
                          <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                          <span style={ {color: '#FF0000'} }>* </span>
                          <label>Shipping Account:</label><br />
                          <div className="radio">
                            <label><input type="radio" name="shipAcc" value="fedex" />FedEx</label>
                          </div>
                          <div className="radio">
                            <label><input type="radio" name="shipAcc" value="ups" />UPS</label>
                          </div>
                          <div className="radio">
                            <label><input type="radio" name="shipAcc" value="dhl"/>DHL</label>
                          </div>
                          <div className="radio">
                            <label><input type="radio" name="shipAcc" value="callin" />
                              Call in Credit card # for FedEx waybill 1-312-503-4169
                            </label>
                          </div>
                          <input type="text" className="form-control" id="shipAccNum"
                            placeholder="Shipping Account Number" />
                        </div>
                        <div className="form-group">
                          <label>Comments:</label>
                          <textarea className="form-control" rows="5" id="comment"
                            placeholder="Please enter any comments or special instructions here">
                          </textarea>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                      </form>
                    </PanelBody>
                  </Panel>
                </div>
              </div>
            </div>
        )
    }
}
