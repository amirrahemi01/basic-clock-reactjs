import { createStore } from "redux";
import rootReducers from "./reducers/rootReducers";

const store = createStore(rootReducers);

export default store;