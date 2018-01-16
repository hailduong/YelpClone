import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./misc/reducers";
import ReduxThunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(<Provider store={store}><Home/></Provider>, document.querySelector('#yelpClone'));