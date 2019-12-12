import useHover from "./useHover"
import { renderHook, act } from "react-hooks-testing-library"

describe("hooks/useHover", () => {
  it("should react on mouseEnter and mouseLeave", () => {
    const { result } = renderHook(() => useHover())
    expect(result.current.hover).toBe(false)
    act(() => result.current.bind.onMouseEnter())
    expect(result.current.hover).toBe(true)
    act(() => result.current.bind.onMouseLeave())
    expect(result.current.hover).toBe(false)
  })
})
