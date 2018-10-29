import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducers from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
const store = createStore(rootReducers);

ReactDOM.render((
  <Provider store={store}><App/>
  </Provider>
), document.getElementById('root')as HTMLElement);
registerServiceWorker();