import React, { Component } from "react"
import Button from "material-ui/Button"
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog"
import Slide from "material-ui/transitions/Slide"

const Transition = props => {
  return <Slide direction="up" {...props} />
}

export default class BrowserWarning extends Component {
  state = {
    open: true
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
                </a>.
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
