import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"

const steps = ["Shipping address", "Payment details", "Review your order"]

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  icon: {
    color: theme.palette.primary.light,
  },
}))

type Props = {
  // Page number the user is on (0, 1, 2)
  step: number
}

const OrderFormStepper = ({ step }: Props) => {
  const classes = useStyles()

  return (
    <Stepper activeStep={step} className={classes.stepper}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconProps={{ classes: { active: classes.icon } }}>
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default OrderFormStepper
