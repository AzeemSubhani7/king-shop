import { applyMiddleware, createStore } from "redux";
import { persistStore } from 'redux-persist'
import logger from 'redux-logger';
import rootReducer from "./rootReducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

const exporting = { store, persistor };

export default exporting;