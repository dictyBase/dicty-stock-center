import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"
import { sprintf } from "sprintf-js"

let globalAny = global as any

globalAny.console = {
  log: (msg: string, args: any) => {
    if (typeof msg !== "string") {
      return
    }
    const str = sprintf(msg, args)
    process.stderr.write(str + "\n")
  },
  error: jest.fn(),
  warn: jest.fn(),
}

configure({ adapter: new Adapter() })
