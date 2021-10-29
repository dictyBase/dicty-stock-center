import React from "react"
import { render, screen } from "@testing-library/react"
import DictyImage from "../components/DictyImage"

describe("src/components/DictyImage.tsx", () => {
  it("should render component", () => {
    const alt = "my-image"
    const img = "img.jpg"

    render(
      <DictyImage>
        <img src={img} alt={alt} />
      </DictyImage>,
    )
    expect(screen.getByAltText(alt)).toBeInTheDocument()
  })

  it("img tag should have class", () => {
    const alt = "my-image"
    const img = "img.jpg"

    render(
      <DictyImage>
        <img src={img} alt={alt} className={alt} />
      </DictyImage>,
    )
    const imgTag = screen.getByAltText(alt)
    expect(imgTag).toBeDefined()
    expect(imgTag).toHaveClass(alt)
  })

  it("should have 1 source and 1 img", () => {
    const alt = "my-image"
    const img = "img.jpg"

    const { container } = render(
      <DictyImage nextGenSources={[{ srcSet: "img.avif", type: "image/avif" }]}>
        <img src={img} alt={alt} className={alt} />
      </DictyImage>,
    )

    expect(container.children[0].children.length).toBe(2)
  })

  it("should have 2 source and 1 img", () => {
    const alt = "my-image"
    const img = "img.jpg"

    const { container } = render(
      <DictyImage
        nextGenSources={[
          { srcSet: "img.avif", type: "image/avif" },
          { srcSet: "img.webp", type: "image/webp" },
        ]}>
        <img src={img} alt={alt} className={alt} />
      </DictyImage>,
    )

    expect(container.children[0].children.length).toBe(3)
  })
})
