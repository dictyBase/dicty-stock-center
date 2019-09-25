import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"

global.console = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
}

configure({ adapter: new Adapter() })
