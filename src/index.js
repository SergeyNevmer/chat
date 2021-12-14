import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css";
import "./styles/style.css";
import { Provider } from "react-redux";

import { Chat } from "./components/chat/Chat";
import { store } from "./redux/store";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Chat />
  </Provider>,
  root
);
