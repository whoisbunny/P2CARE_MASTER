import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const MyImage = (await import("../assets/images/login-v2.svg")).default;
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { IoMail } from "react-icons/io5";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="container">
      <div className="row ">
        {/* Image Component */}
        <div className="col-md-8 border-end">
          <img src={MyImage} className="img-fluid" alt="Banner Image" />
        </div>
        {/* Login Form component */}
        <div className="col-md-4" style={{ marginTop: "6.5rem" }}>
          <h4
            className="h4"
            style={{ fontFamily: "sans-serif", justifyContent: "flex-start" }}
          >
            Welcome to Vuexy!👋
          </h4>
          <p className="#">
            Please Sign-in to your account and start the <br /> adventure
          </p>
          <div
            className="alert alert-info"
            role="alert"
            style={{ color: "blue" }}
          >
            Admin : admin@gmail.com | admin{" "}
            {/* <button
              className="btn btn-info"
              style={{ borderRadius: "25px", marginLeft: "5rem" }}
              data-bs-toggle="tooltip"
              // data-bs-placement="top"
              data-bs-title="Login Info"
            >
              ?
            </button> */}
            <br />
            Client : client@gmail.com | client
          </div>
          <form className="form-group mt-3" method="post">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="admin@gmail.com"
              />
            </div>
            <div className="password-field my-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Enter password"
                className="form-control"
                id="exampleInputPassword1"
              />
              {/* <button onClick={toggleVisibility}>
                {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button> */}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <div className="d-grid col-12 mx-auto">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
            <div>
              <p className="text-center mt-3">
                New our plateform ?{" "}
                <span className="text-primary">create an account</span>
              </p>
              <p className="mt-3 text-center">
                ____________________ Or ____________________
              </p>
              <div
                className="grid gap-5"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FaFacebookSquare /> <GiHummingbird /> <IoMail /> <FaGithub />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
