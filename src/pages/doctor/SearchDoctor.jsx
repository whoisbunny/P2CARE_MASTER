import { Table } from "antd";
import React, { useState } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { BiEdit } from "react-icons/bi";
// import { Link } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { useFormik } from "formik";
import { FaSearch } from "react-icons/fa";
import CustomModal from "../../components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "User Name",
    dataIndex: "username",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const SearchDoctor = () => {
  const [open, setOpen] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];

  const formik = useFormik({
    initialValues: {
      doctorName: "",
      category: "",
      minFee: "",
      maxFee: "",
      selectAppointmentDay: "",
    },
    // validationSchema: schema,
    // onSubmit: (values) => {
    //   console.log(values);
    // },
  });

  return (
    <div>
      <h1 className="text-heading">Search Doctor</h1>
      <form className="inline-form mb-4 row" action="/doctors" method="get">
        <div className="col-2">
          <CustomInput
            type="text"
            label="Doctor Name "
            name="doctorName"
            // onChng={formik.handleChange("doctorName")}
            // onBlr={formik.handleBlur("doctorName")}
            // val={formik.values.doctorName}
          />
          {/* <div className="error">
            {formik.touched.doctorName && formik.errors.doctorName}
          </div> */}
        </div>
        <div className="col-2">
          <CustomInput
            type="text"
            label="category"
            name="category"
            // onChng={formik.handleChange("doctorName")}
            // onBlr={formik.handleBlur("doctorName")}
            // val={formik.values.doctorName}
          />
          {/* <div className="error">
            {formik.touched.doctorName && formik.errors.doctorName}
          </div> */}
        </div>
        <div className="col-2">
          <CustomInput
            type="text"
            label="Min Fee "
            name="minFee"
            // onChng={formik.handleChange("doctorName")}
            // onBlr={formik.handleBlur("doctorName")}
            // val={formik.values.doctorName}
          />
          {/* <div className="error">
            {formik.touched.doctorName && formik.errors.doctorName}
          </div> */}
        </div>
        <div className="col-2">
          <CustomInput
            type="text"
            label="Max Fee "
            name="maxFee"
            // onChng={formik.handleChange("doctorName")}
            // onBlr={formik.handleBlur("doctorName")}
            // val={formik.values.doctorName}
          />
          {/* <div className="error">
            {formik.touched.doctorName && formik.errors.doctorName}
          </div> */}
        </div>

        <div className="col-2">
          <div class="dropdown">
            <CustomInput
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              type="button"
              label="Select Appointment Day "
              name="maxFee"
              // onChng={formik.handleChange("doctorName")}
              // onBlr={formik.handleBlur("doctorName")}
              // val={formik.values.doctorName}
            >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
              </ul>
            </CustomInput>
          </div>
        </div>
        <div className="col-2 " style={{ marginTop: "15px" }}>
          <button
            className="btn btn-lg btn-primary"
            // style={{ alignItems: "center" }}
          >
            <FaSearch /> Search
          </button>
          {/* <div className="error">
            {formik.touched.doctorName && formik.errors.doctorName}
          </div> */}
        </div>
      </form>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        //   performAction={() => {
        //     deleteBlogCategory(blogCatId);
        //   }}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default SearchDoctor;
