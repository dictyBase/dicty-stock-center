```js
import { Provider } from "react-redux"
import { createStore } from "redux"
import { BrowserRouter } from "react-router-dom"
import rootReducer from "../../reducers"

let store = createStore(rootReducer)
;<BrowserRouter>
  <Provider store={store}>
    <ShoppingButtons type="strain" id="DBS0264513" name="test1" />
  </Provider>
</BrowserRouter>
```
