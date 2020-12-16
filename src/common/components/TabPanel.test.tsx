import React from "react"
import { render, screen } from "@testing-library/react"
import TabPanel from "./TabPanel"

describe("TabPanel", () => {
  test("renders correct text", () => {
    render(
      <TabPanel value={0} index={0}>
        Example tab panel
      </TabPanel>,
    )
    expect(screen.getByText(/Example tab panel/)).toBeInTheDocument()
  })
})
