import React from "react";
import { useNavigate } from "react-router-dom";

export const ShopCard = (props) => {
  const history = useNavigate(); //Declare a Navigate variable to get the Routing, Routing info and its params
  const shopDetail = props.shop; // Declare the shopDetails which is propsed form the parent componet
  const moreDetails = (id) => {
    history("/shop", { state: id }); // Pushing the route to new route '/shop' and Passing the id in state
  };

  //Method to generate the JSX of the Rating of the Shop
  const getResturantRate = (index) => {
    switch (index) {
      case 1:
        return (
          <img
            src="/oyo-japan/topShop.png"
            className="ratingAvatar pull-right "
          />
        );
      case 2:
        return (
          <img
            src="/oyo-japan/topShop2.png"
            className="ratingAvatar pull-right "
          />
        );
      case 3:
        return (
          <img
            src="/oyo-japan/topShop3.png"
            className="ratingAvatar pull-right "
          />
        );
      default:
        return (
          <div class="circle pull-right mr-2 mt-2">
            <strong>{props.index + 1}</strong>
          </div>
        );
    }
  };
  return (
    <div className="">
      <div className="card rounded p-2 mb-4">
        <div className="row mb-2">
          <div className="col-md-10 col-sm-10">
            <div
              className="card-title  resturant-name mb-0"
              title={shopDetail.name}
            >
              {shopDetail.name}
            </div>
            <div className="resturant-address" title={shopDetail.address}>
              {shopDetail.address}
            </div>
          </div>
          <div className="col-md-2 col-sm-2">
            {/* calling the method to generate the JSX of Rating icon */}
            {getResturantRate(props.index + 1)}
          </div>
        </div>

        {/* <div className="d-flex mb-2">
          <div className="resturant-card-names">
          <div className="card-title text-black resturant-name mb-0" title={shopDetail.name}>
              {shopDetail.name}
            </div>
            <div className="resturant-address"  title={shopDetail.address}>{shopDetail.address}</div>
          </div>
          <div className="pull-right float-right">
            {getResturantRate(props.index + 1)}
          </div>
          </div> */}

        <div className="card-body p-0 m-0 ">
          <div className="ratio ratio-16x9 ">
            <img
              src={shopDetail.photo && shopDetail.photo.pc.l}
              className="card-img-top"
            />
          </div>
        </div>

        <div className="mt-3 resturant-catch-line">
          {shopDetail && shopDetail.catch
            ? shopDetail.catch
            : shopDetail.genre && shopDetail.genre.catch
            ? shopDetail.genre.catch
            : ""}
        </div>
        <div className="row mb-2">
          {/* Find Out More Button : which will redirect the page to Details page. */}
          <div className="col-md-3 col-sm-3 my-auto d-flex ">
            {" "}
            <span>
              {" "}
              {shopDetail && shopDetail.parking != "なし" ? (
                <i
                  className="fa fa-solid  fa-1x fa-car "
                  title={"Parking Available"}
                ></i>
              ) : (
                <i
                  className="fa fa-solid text-muted fa-1x fa-car"
                  title={"Parking Not available"}
                ></i>
              )}
            </span>
            <span>
              {" "}
              {shopDetail && shopDetail.card == "利用可" ? (
                <i
                  className="fa fa-solid  fa-1x fa-credit-card-alt "
                  title={"Card Accepts"}
                ></i>
              ) : (
                <i
                  className="fa fa-solid text-muted fa-1x fa-credit-card-alt"
                  title={"Card will not Accepts"}
                ></i>
              )}
            </span>
          </div>
          <div className="col-md-9 col-sm-9">
            {" "}
            <button
              type="sumit"
              className="btn btn-primary text-white font-weight-bold pull-right"
              style={{ alignContent: "right" }}
              onClick={() => {
                moreDetails(shopDetail.id);
              }}
            >
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
