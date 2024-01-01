import { useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../features/patient/patientSlice";
import { getAllDoctors } from "../features/doctor/doctorSlice";
import { getAllHospitals } from "../features/hospital/hospitalSlice";
import { getAllServices } from "../features/service/serviceSlice";
import { GetAllBlogs } from "../features/blog/blogSlice";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPatients());
    dispatch(getAllDoctors());
    dispatch(getAllHospitals());
    dispatch(getAllServices());
    dispatch(GetAllBlogs());

  }, [])
  
  
  const patientState = useSelector((state) =>state.patient?.Patients)
  const doctorState = useSelector((state) => state?.doctor?.allDoctors);
  const hospitalState = useSelector((state) => state?.hospital?.AllHospitals);
  const serviceState = useSelector((state) => state?.service?.Services);
  const blogState = useSelector((state) => state?.blog?.AllBlogs);
  return (
    <div className="dashbord">
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex  align-items-center  row">
        <Link
          to={"all-patients"}
          className="col-4 mb-3 text-dark text-decoration-none"
        >
          <div className="d-flex  justify-content-around gap-4 align-items-center flex-grow-1 bg-white p-3 roudned-3">
            <h2>
              <BiUser></BiUser>
            </h2>
            <div>
              <h2 className="text-center">
                {patientState ? patientState.length : 0}
              </h2>
              <p className="desc"> Total Patients</p>
            </div>
          </div>
        </Link>
        <Link
          to={"all-doctors"}
          className="col-4 mb-3 text-dark text-decoration-none"
        >
          <div className="d-flex  justify-content-around gap-4 align-items-center flex-grow-1 bg-white p-3 roudned-3">
            <h2>
              <BiUser></BiUser>
            </h2>
            <div>
              <h2 className="text-center">
                {doctorState ? doctorState.length : 0}
              </h2>
              <p className="desc">Total Doctor</p>
            </div>
          </div>
        </Link>
        <Link
          to={"all-hospital"}
          className="col-4 mb-3 text-dark text-decoration-none"
        >
          <div className="d-flex  justify-content-around gap-4 align-items-center flex-grow-1 bg-white p-3 roudned-3">
            <h2>
              <BiUser></BiUser>
            </h2>
            <div>
              <h2 className="text-center">
                {hospitalState ? hospitalState.length : 0}
              </h2>
              <p className="desc">Total Hospital</p>
            </div>
          </div>
        </Link>
        <Link
          to={"all-blog"}
          className="col-4 mb-3 text-dark text-decoration-none"
        >
          <div className="d-flex  justify-content-around gap-4 align-items-center flex-grow-1 bg-white p-3 roudned-3">
            <h2>
              <BiUser />
            </h2>
            <div>
              <h2 className="text-center">
                {blogState ? blogState.length : 0}
              </h2>
              <p className="desc">Total Blogs</p>
            </div>
          </div>
        </Link>
        <Link
          to={"service-list"}
          className="col-4 mb-3 text-dark text-decoration-none"
        >
          <div className="d-flex  justify-content-around gap-4 align-items-center flex-grow-1 bg-white p-3 roudned-3">
            <h2>
              <BiUser></BiUser>
            </h2>
            <div>
              <h2 className="text-center">
                {serviceState ? serviceState.length : 0}
              </h2>
              <p className="desc">Total Services</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
