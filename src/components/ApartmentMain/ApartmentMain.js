import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import house1 from "../../house/Rectangle 394.png";
import house3 from "../../house/Rectangle 398.png";
import house4 from "../../house/Rectangle 404.png";
import house2 from "../../house/Rectangle 405.png";
import NavBar from "../NavBar/NavBar";
import "./ApartmentMain.css";

const ApartmentMain = () => {
  const { register, handleSubmit, errors } = useForm();
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const history = useHistory();
  const onSubmitEvent = () => {
    const formData = new FormData();
    formData.append("name", info.name);
    formData.append("desc", info.desc);
    formData.append("email", info.email);
    formData.append("service", info.service);
    formData.append("price", info.price);

    fetch("", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
    history.push("/userService");
  };

  const { _id } = useParams();
  const [house, setHouse] = useState([]);

  useEffect(() => {
    fetch(`${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setHouse(data);
      });
  }, [_id]);
  return (
    <div>
      <NavBar></NavBar>
      <div className="detailsSec d-flex justify-content-center align-items-center">
        <h1>Apartment</h1>
      </div>
      <div className="container mt-3 mb-3">
        <div className="row text-dark">
          <div className="col-md-8">
            <div className="row subSecDetail">
              <div className="ml-md-3 mr-3 col-xs-2 mb-3">
                <img src={house1} alt="" />
              </div>
              <div className="mr-3 col-xs-2">
                <img src={house2} alt="" />
              </div>
              <div className="mr-3 col-xs-2">
                <img src={house3} alt="" />
              </div>
              <div className="mr-3 col-xs-2">
                <img src={house4} alt="" />
              </div>
            </div>
            <br />
            <h3>
              {" "}
              <b>Family Apartment Three </b>
            </h3>
            <p>
              300 sq-ft, bedroom, Semi-furnished, Luxurious, South-facing
              Apartment for Rent in{" "}
            </p>

            <h4 className="mt-4">
              <b>Pricing Details -</b>
            </h4>
            <p>Rent/Month : $ (negotiable)</p>
            <p>Service Charge : /= Tk per month</p>
            <p>Security Deposit : month's rent</p>
            <p>Flat Release Policy : months earlier notice required</p>

            <h4 className="mt-4">
              <b>Property Details -</b>
            </h4>
            <p>
              Address and Area : <br />
              Flat Size : 3000 Sq Feet. <br />
              Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit){" "}
              <br />
              Room Category : Large Bed Rooms with 3 Verandas, Spacious Drawing,
              Dining and Family Living Room, Highly Decorated Kitchen with Store
              Room and Servant room with attached Toilet. <br />
              Facilities : 1 Modern Lift, All Modern Amenities and Semi
              Furnished. <br />
              Additional Facilities : a. Electricity with full generator load,
              b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s
              Accommodation, d. Community Conference Hall, e. Roof Top
              Beautified Garden and Grassy Ground, f. Cloth Hanging facility
              with CC camera <br />
            </p>
          </div>

          <div className="col-md-4 form-bg">
            <div className="adminService p-4">
              <form action="" onSubmit={handleSubmit(onSubmitEvent)}>
                <section className="orderServe mt-1">
                  <div className="mb-3">
                    <input
                      style={{ border: "none" }}
                      onBlur={handleBlur}
                      className="w-100 mx-auto form-control"
                      value="Palace"
                      name="service"
                      placeholder="Service"
                      ref={register({ required: true })}
                    />
                    {errors.eventName && (
                      <span className="error">Service name is required</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <input
                      style={{ border: "none" }}
                      onBlur={handleBlur}
                      className="w-100 mx-auto form-control"
                      name="name"
                      placeholder="Full Name"
                      ref={register({ required: true })}
                    />
                    {errors.eventName && (
                      <span className="error">Name is required</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <input
                      style={{ border: "none" }}
                      onBlur={handleBlur}
                      className="w-100 mx-auto form-control"
                      name="email"
                      placeholder="Your Email Address"
                      ref={register({ required: true })}
                    />
                    {errors.eventName && (
                      <span className="error">Email is required</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <textarea
                      style={{ height: "120px", width: "100%", border: "none" }}
                      onBlur={handleBlur}
                      className="w-100 mx-auto form-control"
                      name="desc"
                      placeholder="Message"
                      ref={register({ required: true })}
                    />
                    {errors.eventName && (
                      <span className="error">Description is required</span>
                    )}
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <input
                        style={{ border: "none" }}
                        onBlur={handleBlur}
                        className="w-100 form-control"
                        value="Price"
                        name="price"
                        placeholder="Price"
                        ref={register({ required: true })}
                      />
                      {errors.eventName && (
                        <span className="error">Price is required</span>
                      )}
                    </div>

                    <div className="col-md-6"></div>
                  </div>

                  <p className="text-danger text-center">
                    Please make sure you have clicked all the input tab before
                    submitting
                  </p>
                  <button
                    style={{ fontSize: "12px" }}
                    className="btn btn-warning w-100 p-3"
                    type="submit"
                  >
                    Request Booking
                  </button>
                </section>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentMain;
