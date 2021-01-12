import "@testing-library/jest-dom/extend-expect"
import "core-js"

let globalAny = global as any

globalAny.console.warn = jest.fn()
globalAny.console.error = jest.fn()
