import * as type from "../types";

//Intial State
const initialState = {
  shops: [],
  loading: false,
  error: null,
  total: 0,
  shopByID: [],
};

export default function shops(state = initialState, action) {
  // Reducer Switch act accrodingly on its Types
  switch (action.type) {
    case type.GET_SHOPS_REQUESTED:
      return {
        ...state,
        loading: true, // making loading is true when  GET_SHOPS_REQUESTED action is called
      };
    case type.GET_SHOPS_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.shops, // Assigning the action.shops to shops(intial state)
      };
    case type.GET_SHOPS_FAILED:
      return {
        ...state,
        loading: false,
        error:
          action.message && action.message.message //Assigning errors
            ? action.message.message
            : "",
      };
    case type.GET_SHOPS_COUNT:
      return {
        ...state,
        total: action.total, // total
      };

    case type.GET_SHOP_BY_ID_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.PUT_SHOP_BY_ID:
      return {
        ...state,
        loading: false,
        shopByID: action.shops[0], //Assigning the shop which is fetch by its ID
      };
    default:
      return state;
  }
}
