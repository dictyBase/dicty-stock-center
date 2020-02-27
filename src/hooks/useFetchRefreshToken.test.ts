import useFetchRefreshToken from "./useFetchRefreshToken"
import React from "react"
import { renderHook } from "@testing-library/react-hooks"

let callback, ref

beforeEach(() => {
  callback = jest.fn()
  ref = jest.spyOn(React, "useRef").mockReturnValueOnce({ current: null })
})

beforeAll(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.restoreAllMocks()
  jest.clearAllTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

describe("hooks/useFetchRefreshToken", () => {
  it("should call provided callback on mount", () => {
    renderHook(() => useFetchRefreshToken(callback, ref, 100, true))
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it("should return nothing if unauthenticated", () => {
    renderHook(() => useFetchRefreshToken(callback, ref, 0, false))
    // callback only called once, second useEffect returns early
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it("should call provided callback with given time delay between each call", () => {
    renderHook(() => useFetchRefreshToken(callback, ref, 200, true))
    expect(callback).toHaveBeenCalledTimes(1)

    // fast-forward until 1s before it should be executed again
    jest.advanceTimersByTime(199)
    expect(callback).toHaveBeenCalledTimes(1)

    // fast-forward until 1st call should be executed
    jest.advanceTimersByTime(1)
    expect(callback).toHaveBeenCalledTimes(2)

    // fast-forward until next timer should be executed
    jest.advanceTimersToNextTimer()
    expect(callback).toHaveBeenCalledTimes(3)

    // fast-forward until 3 more timers should be executed
    jest.advanceTimersToNextTimer(3)
    expect(callback).toHaveBeenCalledTimes(6)
  })

  // it("should clear interval on unmount", () => {
  //   const { unmount } = renderHook(() =>
  //     useFetchRefreshToken(callback, ref, 200, true),
  //   )
  //   const initialTimerCount = jest.getTimerCount()
  //   expect(clearInterval).not.toHaveBeenCalled()

  //   unmount()

  //   expect(clearInterval).toHaveBeenCalledTimes(1)
  //   expect(jest.getTimerCount()).toBe(initialTimerCount - 1)
  // })
})
