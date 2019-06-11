// @flow
import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"

type Props = {}

type State = {
  /** Tells if the dialog box is open or not */
  open: boolean,
}

const Transition = props => <Slide direction="up" {...props} />

/**
 * BrowserWarning tells the user to upgrade if they are using an outdated version (i.e. IE10 or below).
 * It uses Material-UI's Dialog component and Slide animation.
 */

export default class BrowserWarning extends Component<Props, State> {
  state = {
    open: true,
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          transition={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description">
          <DialogTitle id="alert-dialog-slide-title">
            {"You are using an outdated browser!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <p>
                Dicty Stock Center may not work as expected on your browser.
              </p>
              <p>
                Please consider upgrading to a more modern browser such as{" "}
                <a
                  href="https://www.mozilla.org/en-US/firefox/new/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Mozilla Firefox
                </a>{" "}
                or{" "}
                <a
                  href="https://www.google.com/chrome/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Google Chrome
                </a>
                .
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
