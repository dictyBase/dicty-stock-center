import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"
import "core-js"

let globalAny = global as any

globalAny.console.warn = jest.fn()
globalAny.console.error = jest.fn()

configure({ adapter: new Adapter() })
