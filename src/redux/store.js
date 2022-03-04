import { createStore, applyMiddleware } from "redux";
import rootreducer from "./reducers/index.js";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/index.js";

const sagaMiddleware = createSagaMiddleware(); // Declaring the SagaMiddleWare
const store = createStore(rootreducer, applyMiddleware(sagaMiddleware)); // CreateStore : Passing the Combined Reducers (Root Reducer / Redux store) and SagaMiddleWare
sagaMiddleware.run(rootSaga); // Running Saga

export default store;
