import { useFormik } from "formik";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const MyImage = (await import("../assets/images/pages/login-v2.svg")).default;
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

let schema = yup.object().shape({
 
  Email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  Password: yup.string().required("Password is Required"),
});
const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const authState = useSelector((state) =>state.auth)
  const {isSuccess} = authState
  const navigate = useNavigate()
  const dispatch = useDispatch()
  if(isSuccess === true) {
    navigate('/admin');
  }
  else{
    navigate('/')
  }

  const formik = useFormik({
    initialValues: {
      
      Email: "",
    
      Password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
     
      dispatch(login(values));
    },
  });

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

          <form className="form-group mt-3" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              {/* <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="admin@gmail.com"
              /> */}
              <CustomInput
                type="text"
                label="Enater Email "
                name="email"
                onChng={formik.handleChange("Email")}
                onBlr={formik.handleBlur("Email")}
                val={formik.values.Email}
              />
            </div>
            <CustomInput
              type="password"
              label="Enater Password "
              name="password"
              onChng={formik.handleChange("Password")}
              onBlr={formik.handleBlur("Password")}
              val={formik.values.Password}
            />

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
