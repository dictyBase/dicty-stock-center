import React from "react"
import { render, screen } from "@testing-library/react"
import DictyImage from "../components/DictyImage"

describe("src/components/DictyImage.tsx", () => {
  it("should render component", () => {
    const alt = "my-image"
    const img = "img.jpg"

    render(<DictyImage src={img} alt={alt} />)
    expect(screen.getByAltText(alt)).toBeInTheDocument()
  })

  it("img tag should have class", () => {
    const alt = "my-image"
    const img = "img.jpg"

    render(<DictyImage src={img} alt={alt} className={alt} />)
    const imgTag = screen.getByAltText(alt)
    expect(imgTag).toBeInTheDocument()
    expect(imgTag).toHaveClass(alt)
  })

  it("should have 1 source and 1 img", () => {
    const alt = "my-image"
    const img = "img.jpg"

    const { container } = render(
      <DictyImage
        src={img}
        alt={alt}
        className={alt}
        nextGenSources={[{ srcSet: "img.avif", type: "image/avif" }]}
      />,
    )

    expect(container.children[0].children.length).toBe(2)
  })

  it("should have 2 source and 1 img", () => {
    const alt = "my-image"
    const img = "img.jpg"

    const { container } = render(
      <DictyImage
        src={img}
        alt={alt}
        className={alt}
        nextGenSources={[
          { srcSet: "img.avif", type: "image/avif" },
          { srcSet: "img.webp", type: "image/webp" },
        ]}
      />,
    )

    expect(container.children[0].children.length).toBe(3)
  })
})
