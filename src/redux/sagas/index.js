import { all } from "redux-saga/effects";
import shopSaga from "./shopSaga"; //Importing ShopSaga

export default function* rootSaga() {
  //Making sure all the Saga are will get executed in Parallel by Putting those in Yield all
  yield all([shopSaga()]);
}
