import React from "react"
import { render, screen } from "@testing-library/react"
import PanelWrapper from "./PanelWrapper"

describe("common/components/PanelWrapper", () => {
  it("displays the correct text", () => {
    render(
      <PanelWrapper title="Shipping Address Information">
        Example panel
      </PanelWrapper>,
    )
    const title = screen.getByTestId("panel-title")
    const content = screen.getByTestId("panel-details")

    expect(title).toHaveTextContent("Shipping Address Information")
    expect(content).toHaveTextContent("Example panel")
  })
})
