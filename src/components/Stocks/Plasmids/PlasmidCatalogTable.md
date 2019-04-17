```js
import { Provider } from "react-redux"
import { createStore } from "redux"
import { BrowserRouter } from "react-router-dom"
import rootReducer from "reducers"
import { data } from "./mockPlasmidCatalogData"

let store = createStore(rootReducer)
;<BrowserRouter>
  <Provider store={store}>
    <PlasmidCatalogTable data={data} />
  </Provider>
</BrowserRouter>
```
