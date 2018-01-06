import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import "./assets/css/message.css";

import registerServiceWorker from "./registerServiceWorker";
import { AppCrossword } from "./App";
import appReducer from "./reducers";

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <AppCrossword />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
