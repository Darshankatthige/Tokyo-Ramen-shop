import { put, takeEvery } from "redux-saga/effects";
import { apiServices } from "../../services/apiServices"; // importing the apiServices
import _ from "loadsh";
import * as type from "../types";
//Method to Get the getShopList
function getShopsList(keyword = "") {
  //calling apiServices get function
  return apiServices
    .get(
      `${process.env.REACT_APP_API_END_POINT}?key=${process.env.REACT_APP_API_KEY}&lat=35.6762&lng=139.6503&format=json&count=12&keyword=${keyword}`
    )
    .then((response) => {
      // then Block :: Success Block
      return _.get(response, "results", {});
    })
    .catch((e) => {
      //Catch Block :: Error Block
      return {
        message: {
          info: "failed",
        },
        success: false,
      };
    });
}

//Method to call the Details API  By passing ID
function getShopsByIDcall(id = "") {
  //calling apiServices get function
  return apiServices
    .get(
      `${process.env.REACT_APP_API_END_POINT}?key=${process.env.REACT_APP_API_KEY}&format=json&count=12&id=${id}`
    )
    .then((response) => {
      // then Block :: Success Block
      return _.get(response, "results", {});
    })
    .catch((e) => {
      //Catch Block :: Error Block
      return {
        message: {
          info: "failed",
        },
        success: false,
      };
    });
}

const fetchShops = function* (payload) {
  var keyword = payload.payload;
  try {
    let remoteData = yield getShopsList(keyword);
    if (remoteData.shop) {
      yield put({ type: type.GET_SHOPS_SUCCESS, shops: remoteData.shop }); // Dispatching the GET_SHOPS_SUCCESS action to the store
      yield put({
        type: type.GET_SHOPS_COUNT,
        total: remoteData.results_available,
      }); // Dispatching the GET_SHOPS_COUNT action to the store
    } else {
      yield put({
        type: type.GET_SHOPS_FAILED, // Dispatching the GET_SHOPS_FAILED action to the store
        message: remoteData.error[0], // Payload as Error
      });
    }
  } catch (error) {
    yield put({
      type: type.GET_SHOPS_FAILED,
      payload: false,
    });
  } finally {
    yield put({
      type: type.GET_SHOPS_FAILED,
      payload: false,
    });
  }
};

const fetchShopByID = function* (payload) {
  var id = payload.payload;
  try {
    let remoteData = yield getShopsByIDcall(id); // Calling the getShopsByIDcall to call the api and passing ID
    if (remoteData.shop) {
      yield put({ type: type.PUT_SHOP_BY_ID, shops: remoteData.shop }); // Dispatching the PUT_SHOP_BY_ID action to the store
    } else {
      yield put({
        type: type.GET_SHOPS_FAILED, // Dispatching the GET_SHOPS_FAILED action to the store
        message: remoteData.error[0], // Payload as Error
      });
    }
  } catch (error) {
    yield put({
      type: type.GET_SHOPS_FAILED, // Dispatching the GET_SHOPS_FAILED action to the store
      payload: false,
    });
  } finally {
    yield put({
      type: type.GET_SHOPS_FAILED, // Dispatching the GET_SHOPS_FAILED action to the store
      payload: false,
    });
  }
};

function* shopSaga() {
  yield takeEvery("GET_SHOPS_REQUESTED", fetchShops); //calling the fetchShops Instance
  yield takeEvery("GET_SHOP_BY_ID_REQUESTED", fetchShopByID); //calling the fetchShops Instance
}

export default shopSaga;
