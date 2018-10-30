import * as React from "react";
import * as ReactDOM from "react-dom";
import * as rootSaga from "./saga";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import registerServiceWorker from "./registerServiceWorker";
import rootReducers from "./reducers/index";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render((
  <Provider store={store}><App/>
  </Provider>
), document.getElementById('root')as HTMLElement);
registerServiceWorker();