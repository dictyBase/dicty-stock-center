import React from "react"
import { mount } from "enzyme"
import HelpDialog from "./HelpDialog"
import Dialog from "@material-ui/core/Dialog"
import DialogTitleDisplay from "components/common/DialogTitleDisplay"
import { AppBarProvider } from "./AppBar/AppBarContext"

describe("Stocks/Catalogs/common/HelpDialog", () => {
  const wrapper = mount(
    <AppBarProvider>
      <HelpDialog />
    </AppBarProvider>,
  )
  describe("initial render", () => {
    it("only renders Dialog component when help dialog is not open", () => {
      expect(wrapper.find(Dialog)).toHaveLength(1)
      expect(wrapper.find(DialogTitleDisplay)).toHaveLength(0)
    })
  })
})
