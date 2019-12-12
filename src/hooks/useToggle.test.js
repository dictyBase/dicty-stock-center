import useToggle from "./useToggle"
import { renderHook, act, cleanup } from "react-hooks-testing-library"

const setUp = initialValue => renderHook(() => useToggle(initialValue))

describe("hooks/useToggle", () => {
  afterEach(() => cleanup)

  it("should init state to true", () => {
    const { result } = setUp(true)
    expect(result.current.value).toBe(true)
  })

  it("should init state to false", () => {
    const { result } = setUp(false)
    expect(result.current.value).toBe(false)
  })

  it("should toggle state from false", () => {
    const { result } = setUp(false)
    act(() => result.current.toggle())
    expect(result.current.value).toBe(true)
  })

  it("should toggle state from true", () => {
    const { result } = setUp(true)
    act(() => result.current.toggle())
    expect(result.current.value).toBe(false)
  })

  it("should set state to true", () => {
    const { result } = setUp(false)
    act(() => result.current.setTrue())
    expect(result.current.value).toBe(true)
  })

  it("should set state to false", () => {
    const { result } = setUp(true)
    act(() => result.current.setFalse())
    expect(result.current.value).toBe(false)
  })
})
