import React from "react"
import { render, screen } from "@testing-library/react"
import LinkList from "./LinkList"
import { downloadLinks } from "common/constants/linkLists"

describe("features/Home/LinkList", () => {
  describe("initial download links render", () => {
    it("displays Download header", () => {
      render(<LinkList list={downloadLinks} bgColor="gray" />)
      expect(screen.getByRole("heading")).toHaveTextContent("Download / View")
    })
    it("displays correct number of list items", () => {
      render(<LinkList list={downloadLinks} bgColor="gray" />)
      expect(screen.getAllByRole("listitem")).toHaveLength(4)
    })
  })
})
