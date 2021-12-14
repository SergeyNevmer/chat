import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { reducer } from "./reducers/reducer";

export const store = createStore(reducer, devToolsEnhancer());
