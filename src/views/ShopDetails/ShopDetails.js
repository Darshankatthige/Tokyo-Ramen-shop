import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { getShopsByID } from "../../redux/actions/shops";
import "./shopDetails.css";

export const ShopDetails = () => {
  const dispatch = useDispatch(); //Declare a dispatch variable to dispatch the action
  const location = useLocation(); // Declared the location by using UseLocation to know the Routing / params Information.
  const id = location.state; // Declared the ID which is passed in Router Params
  const shopDetail = useSelector((state) => {
    return state.shops.shopByID; // UseSelector of ShopDetails state [Getting the ShopDetails state]
  });
  const loading = useSelector((state) => {
    return state.shops.loading; // UseSelector of loading state [Getting the loading state]
  });

  // Similar to componentDidMount:
  useEffect(() => {
    getShopByID(); // Calling getShopByID method on component did mount
  }, []);

  //Method to dispatch the api call Action
  const getShopByID = () => {
    dispatch(getShopsByID(id)); // getShopsByID is an action declare in action/index.js
  };
  const mapUrl = `https://maps.google.com/?q=${shopDetail.lat},${shopDetail.lng}`; // Declared the MAP URL and added latitude and longitude to URL

  return (
    <div className="container">
      <div className="card p-2 m-4">
        {loading ? (
          // Loader Component
          <Loader />
        ) : (
          <div className="">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content ">
                  {/* Shop Image */}
                  <div className="ratio ratio-4x3 active  mb-3" id="pic-1">
                    <img
                      src={
                        shopDetail && shopDetail.photo && shopDetail.photo.pc.l
                      }
                      className="rounded-2"
                    />
                  </div>
                  <center>
                    {/* Map Redirection Button */}
                    <a target="_blank" href={mapUrl}>
                      <button
                        type="sumit"
                        className="btn btn-primary justifly-content-center text-white "
                        style={{ alignContent: "right" }}
                      >
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Open In Google Map
                      </button>
                    </a>
                  </center>
                </div>
              </div>
              {/* Shop name and Address and its Catch copy line */}
              <div className="details col-md-6">
                <h3 className="shop-title">{shopDetail && shopDetail.name}</h3>
                <div className="">{shopDetail && shopDetail.address}</div>
                <p className="shop-description">
                  {shopDetail && shopDetail.catch}
                </p>

                <div className="row">
                  <div className="col-md-3">
                    <strong> Budget Price:</strong>
                  </div>
                  <div className="col-md-9">
                    {shopDetail && shopDetail.budget && shopDetail.budget.name}
                  </div>
                </div>

                <div className="">
                  <div className="row">
                    <div className="col-md-3">
                      <strong>Opens: </strong>
                    </div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.open}
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="row">
                    <div className="col-md-3">
                      <strong>Capacity: </strong>
                    </div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.capacity} 人
                    </div>
                  </div>
                </div>

                {/* Facility: Icon Representation */}
                <h5 className="sizes mt-2">Facilities:</h5>
                <div className=" row mb-2">
                  <div className="col-md-6 mb-2">
                    {shopDetail && shopDetail.wifi == "あり" ? (
                      <div className="d-flex">
                        {" "}
                        <i
                          className="fa fa-solid fa-2x fa-wifi"
                          title={"Wifi Available."}
                        />{" "}
                        <span className="ml-2 d-sm-block  my-auto">
                          Wifi Available.
                        </span>{" "}
                      </div>
                    ) : (
                      <div className="d-flex">
                        {" "}
                        <i
                          className="fa fa-solid fa-2x text-muted fa-wifi"
                          title={"Wifi Not Available"}
                        />
                        <span className="ml-2 d-sm-block text-muted my-auto ">
                          Wifi Not Available.
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    {shopDetail && shopDetail.tv == "あり" ? (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid fa-2x fa-television"
                          title={"Tv Available."}
                        />{" "}
                        <span className="ml-2 d-sm-block  my-auto">
                          TV Available.
                        </span>{" "}
                      </div>
                    ) : (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid fa-2x fa-television text-muted"
                          title={"TV Not Available."}
                        />{" "}
                        <span className="ml-2 d-sm-block text-muted my-auto">
                          TV Not Available.
                        </span>{" "}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    {shopDetail && shopDetail.parking != "なし" ? (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid  fa-2x fa-car "
                          title={"Parking Available"}
                        ></i>
                        <span className="ml-2 my-auto">Parking Available.</span>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid text-muted fa-2x fa-car"
                          title={"No Parking"}
                        ></i>{" "}
                        <span className="text-muted ml-2  my-auto">
                          Parking Not available.
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    {shopDetail && shopDetail.karaoke != "なし" ? (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid fa-2x fa-music"
                          title={"Karaoke Available"}
                        />
                        <span className="ml-2 my-auto">Karaoke Available.</span>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid fa-2x text-muted fa-music"
                          title={"Karaoke Not Available"}
                        />
                        <span className="text-muted ml-2  my-auto">
                          Karake Not available.
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    {shopDetail && shopDetail.non_smoking != "全面禁煙" ? (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid fa-2x  fa-fire"
                          title={"Smoking Allowed"}
                        />
                        <span className="ml-2 my-auto">Smoking Allowed.</span>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid fa-2x text-muted fa-fire"
                          title={"Smoking Not Allowed"}
                        />
                        <span className="text-muted ml-2  my-auto">
                          Smoking Not Allowed.
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    {shopDetail && shopDetail.pet != "不可" ? (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid fa-2x fa-paw"
                          title={"Pets are Allowed."}
                        />
                        <span className="ml-2 d-sm-block  my-auto">
                          Pets are Allowed.
                        </span>{" "}
                      </div>
                    ) : (
                      <div className="d-flex">
                        {" "}
                        <i
                          className="fa fa-solid fa-2x text-muted fa-paw"
                          title={"Pets Not Allowed"}
                        />
                        <span className="ml-2 d-sm-block text-muted my-auto ">
                          Pets Not Allowed.
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 mb-2">
                    {shopDetail && shopDetail.english != "なし" ? (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid fa-2x fa-language"
                          title={"Staff Supports English."}
                        />
                        <span className="ml-2 d-sm-block  my-auto">
                          Staff Supports English.
                        </span>{" "}
                      </div>
                    ) : (
                      <div className="d-flex">
                        {" "}
                        <i
                          className="fa fa-solid fa-2x text-muted fa-language"
                          title={"Staffs Dont know English"}
                        />
                        <span className="ml-2 d-sm-block text-muted my-auto ">
                          Staffs Dont know English.
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="col-md-6 mb-2">
                    {shopDetail && shopDetail.private_room != "なし" ? (
                      <div className="d-flex">
                        <i
                          className="fa fa-solid fa-2x fa-home"
                          title={"Private Room Available."}
                        />
                        <span className="ml-2 d-sm-block  my-auto">
                          Private Room Available.
                        </span>{" "}
                      </div>
                    ) : (
                      <div className="d-flex">
                        {" "}
                        <i
                          className="fa fa-solid fa-2x text-muted fa-home"
                          title={" Private Rooms Not Available."}
                        />
                        <span className="ml-2 d-sm-block text-muted my-auto ">
                          Private Rooms Not Available.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {/* other Facilities */}
                <h5 className="sizes">Other Facilities:</h5>
                <div className="icons">
                  <div className="row mb-1">
                    <div className="col-md-4">Childers</div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.child}
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="col-md-4">Course</div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.course}
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="col-md-4">Free Drinks</div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.free_drink}
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="col-md-4">Free Food</div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.free_food}
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="col-md-4">Lunch</div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.lunch}
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="col-md-4">Mid Night</div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.midnight}
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="col-md-4">Mobile Access</div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.mobile_access}
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="col-md-4">Private Me</div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.private_room}
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="col-md-4">Closes</div>
                    <div className="col-md-8">
                      {shopDetail && shopDetail.close}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
