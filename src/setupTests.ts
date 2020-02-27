import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"
import "core-js"

configure({ adapter: new Adapter() })
