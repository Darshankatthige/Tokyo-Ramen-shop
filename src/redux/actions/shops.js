import * as type from "../types"; // Imported all the Types.

// Export method of getShops action
export function getShops(payload) {
  return {
    type: type.GET_SHOPS_REQUESTED, // Action Type.
    payload: payload, // payload [Which is Sent while Dispatch].
  };
}
// Export method of getShopsByID action
export function getShopsByID(payload) {
  return {
    type: type.GET_SHOP_BY_ID_REQUESTED, // Action Type.
    payload: payload, // payload [Which is Sent while Dispatch].
  };
}
