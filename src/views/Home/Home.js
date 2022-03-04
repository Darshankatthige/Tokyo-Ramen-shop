import React, { useEffect, useState } from "react";
import { ShopCard } from "../../components/StoreCard/storeCard";
import _ from "loadsh"; // importing Loadsh Library
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "../../redux/actions/shops";
import { ListFooter } from "../../components/ListFooter/ListFooter";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  const dispatch = useDispatch(); //Declare a dispatch variable to dispatch the action
  const [Searchkeyword, setSearchKeyword] = useState(""); // Declare a new state variable, which we'll call "Searchkeyword"
  const loading = useSelector((state) => state.shops.loading); // UseSelector of loading state [Getting the Loading state]
  const error = useSelector((state) => state.shops.error); // UseSelector of Error state [Getting the Error state]
  const shops = useSelector((state) => state.shops.shops); // UseSelector of Shops List state [Getting the Shops state]
  const shopCount = useSelector((state) => state.shops.total); // UseSelector of Total state [Getting the toal  state]

  // Similar to componentDidMount:
  useEffect(() => {
    getRamenShopsList(); // Calling GetRamenShopsList method on component did mount
  }, []);

  // Similar to componentDidUpdate:
  useEffect(() => {
      getRamenShopsList(Searchkeyword); // Calling GetRamenShopsList method on component did update.
  }, [Searchkeyword]); // UseEffect will get Triggers once the SearchKeyWord gets updated. at the end need to declare the dependcy array.

  //Method to dispatch the api call Action
  const getRamenShopsList = (keyword = "") => {
    dispatch(getShops(keyword)); // getShop is an action declare in action/index.js
  };

  // Updating the SearchKeyWord variable onChange event in Input Box.
  const applyFilter = (event) => {
    event.stopPropagation();
    setSearchKeyword(event.target.value); // Updating the SearchKeyword state.
  };
  return (
    <div>
      <div className="container mt-2">
        <h2 className="app-title justify-content-center">
          <span className="mt-4">TOKYO RAMEN FINDER</span>
          <img src="/oyo-japan/ramenBowl.png" className="ramen-bowl-logo" />
        </h2>

        <div className="row justify-content-center mt-3">
          <div className="col-lg-7 col-lg-offset-4">
            <input
              type="text"
              className="form-control   col-md-4"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="Filter by speciality, location or keyword..."
              value={Searchkeyword}
              onChange={(event) => {
                applyFilter(event);
              }}
            />
          </div>
        </div>

        <div id="offsetOfList" className="mt-4 mb-4 text-center">
          {shops && shops.length
            ? " Displaying the top " +
              shops.length +
              " of " +
              shopCount +
              " results."
            : ""}
        </div>
      </div>
      <div className="row m-2">
        {/* Dynamic Bindig of the ShopList array. */}
        {shops &&
          _.map(shops, (shop, index) => (
            <div class="col-md-4" key={index}>
              {/* ShopCard Componet [Passing Shop Object] */}
              <ShopCard shop={shop} index={index} />
            </div>
          ))}
      </div>
      {/* Message when the No Shops array is Empty. */}
      {shops && shops.length == 0 && !loading && !error && (
        <p className="text-center no-shops-available">
          Opps! No Shops Available!
        </p>
      )}
      {/* Loader when api being called. */}
      {shops && shops.length == 0 && loading && <Loader />}
      {/* Error message. */}
      {error && !loading && (
        <p className="error-message text-center mb-5"> {error}</p>
      )}

      {/* Footer Component */}
      <ListFooter />
    </div>
  );
};
