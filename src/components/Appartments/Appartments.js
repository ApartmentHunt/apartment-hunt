import React from "react";
import bath from "../../assets/bath 1.png";
import bed from "../../assets/bed 1.png";
import map from "../../assets/map-marker-alt-solid 1.png";
import img1 from "../../images/Rectangle 394.png";
import "./Appartment.css";

const Appartments = () => {
  return (
    <div>
      <div>
        <p className="p">House Rent</p>
        <p className="h">
          Discover the latest Rent <br />
          available today
        </p>
      </div>
      <div class="container-fluid">
        <div className="row div-holder">
          <div className="col-md-4 mb-5">
            <div class="card" style={{ width: "370px" }}>
              <img
                style={{ height: "209px" }}
                class="card-img-top img-fluid"
                src={img1}
                alt="Card cap"
              />
              <div class="card-body">
                <h5 class="cardTitle">Washington Avenue</h5>
                <p class="cardText">
                  {" "}
                  <span>
                    <img
                      style={{ width: "14px", marginRight: "8px" }}
                      src={map}
                      alt=""
                    />
                  </span>{" "}
                  Nasirabad H/S, Chattogram
                </p>
                <div className="cardText d-flex justify-content-between align-items-center">
                  <p class="cardText">
                    {" "}
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bed}
                        alt=""
                      />
                    </span>{" "}
                    3 Bedrooms
                  </p>
                  <p class="cardText">
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bath}
                        alt=""
                      />
                    </span>{" "}
                    2 Bathrooms
                  </p>
                </div>
                <div className="cardFooter d-flex justify-content-between align-items-center">
                  <p className="price">$194</p>
                  <a
                    href="#1"
                    class="btn btn-success float-right details-button"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "370px" }}>
              <img
                style={{ height: "209px" }}
                class="card-img-top img-fluid"
                src={img1}
                alt="Card cap"
              />
              <div class="card-body">
                <h5 class="cardTitle">Washington Avenue</h5>
                <p class="cardText">
                  {" "}
                  <span>
                    <img
                      style={{ width: "14px", marginRight: "8px" }}
                      src={map}
                      alt=""
                    />
                  </span>{" "}
                  Nasirabad H/S, Chattogram
                </p>
                <div className="cardText d-flex justify-content-between align-items-center">
                  <p class="cardText">
                    {" "}
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bed}
                        alt=""
                      />
                    </span>{" "}
                    3 Bedrooms
                  </p>
                  <p class="cardText">
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bath}
                        alt=""
                      />
                    </span>{" "}
                    2 Bathrooms
                  </p>
                </div>
                <div className="cardFooter d-flex justify-content-between align-items-center">
                  <p className="price">$194</p>
                  <a
                    href="#1"
                    class="btn btn-success float-right details-button"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "370px" }}>
              <img
                style={{ height: "209px" }}
                class="card-img-top img-fluid"
                src={img1}
                alt="Card cap"
              />
              <div class="card-body">
                <h5 class="cardTitle">Washington Avenue</h5>
                <p class="cardText">
                  {" "}
                  <span>
                    <img
                      style={{ width: "14px", marginRight: "8px" }}
                      src={map}
                      alt=""
                    />
                  </span>{" "}
                  Nasirabad H/S, Chattogram
                </p>
                <div className="cardText d-flex justify-content-between align-items-center">
                  <p class="cardText">
                    {" "}
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bed}
                        alt=""
                      />
                    </span>{" "}
                    3 Bedrooms
                  </p>
                  <p class="cardText">
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bath}
                        alt=""
                      />
                    </span>{" "}
                    2 Bathrooms
                  </p>
                </div>
                <div className="cardFooter d-flex justify-content-between align-items-center">
                  <p className="price">$194</p>
                  <a
                    href="#1"
                    class="btn btn-success float-right details-button"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "370px" }}>
              <img
                style={{ height: "209px" }}
                class="card-img-top img-fluid"
                src={img1}
                alt="Card cap"
              />
              <div class="card-body">
                <h5 class="cardTitle">Washington Avenue</h5>
                <p class="cardText">
                  {" "}
                  <span>
                    <img
                      style={{ width: "14px", marginRight: "8px" }}
                      src={map}
                      alt=""
                    />
                  </span>{" "}
                  Nasirabad H/S, Chattogram
                </p>
                <div className="cardText d-flex justify-content-between align-items-center">
                  <p class="cardText">
                    {" "}
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bed}
                        alt=""
                      />
                    </span>{" "}
                    3 Bedrooms
                  </p>
                  <p class="cardText">
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bath}
                        alt=""
                      />
                    </span>{" "}
                    2 Bathrooms
                  </p>
                </div>
                <div className="cardFooter d-flex justify-content-between align-items-center">
                  <p className="price">$194</p>
                  <a
                    href="#1"
                    class="btn btn-success float-right details-button"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "370px" }}>
              <img
                style={{ height: "209px" }}
                class="card-img-top img-fluid"
                src={img1}
                alt="Card cap"
              />
              <div class="card-body">
                <h5 class="cardTitle">Washington Avenue</h5>
                <p class="cardText">
                  {" "}
                  <span>
                    <img
                      style={{ width: "14px", marginRight: "8px" }}
                      src={map}
                      alt=""
                    />
                  </span>{" "}
                  Nasirabad H/S, Chattogram
                </p>
                <div className="cardText d-flex justify-content-between align-items-center">
                  <p class="cardText">
                    {" "}
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bed}
                        alt=""
                      />
                    </span>{" "}
                    3 Bedrooms
                  </p>
                  <p class="cardText">
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bath}
                        alt=""
                      />
                    </span>{" "}
                    2 Bathrooms
                  </p>
                </div>
                <div className="cardFooter d-flex justify-content-between align-items-center">
                  <p className="price">$194</p>
                  <a
                    href="#1"
                    class="btn btn-success float-right details-button"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "370px" }}>
              <img
                style={{ height: "209px" }}
                class="card-img-top img-fluid"
                src={img1}
                alt="Card cap"
              />
              <div class="card-body">
                <h5 class="cardTitle">Washington Avenue</h5>
                <p class="cardText">
                  {" "}
                  <span>
                    <img
                      style={{ width: "14px", marginRight: "8px" }}
                      src={map}
                      alt=""
                    />
                  </span>{" "}
                  Nasirabad H/S, Chattogram
                </p>
                <div className="cardText d-flex justify-content-between align-items-center">
                  <p class="cardText">
                    {" "}
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bed}
                        alt=""
                      />
                    </span>{" "}
                    3 Bedrooms
                  </p>
                  <p class="cardText">
                    <span>
                      <img
                        style={{ width: "24px", marginRight: "8px" }}
                        src={bath}
                        alt=""
                      />
                    </span>{" "}
                    2 Bathrooms
                  </p>
                </div>
                <div className="cardFooter d-flex justify-content-between align-items-center">
                  <p className="price">$194</p>
                  <a
                    href="#1"
                    class="btn btn-success float-right details-button"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appartments;
