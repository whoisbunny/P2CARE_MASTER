import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useState } from "react";
import { useFormik } from "formik";
import { Table } from "antd";
import CustomInput from "../../components/CustomInput";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Time",
    dataIndex: "time",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BookDoctor = () => {
  const [open, setOpen] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {},
  });

  const data1 = [];
  for (let i = 0; i < 1; i++) {
    data1.push({
      key: i + 1,
      time: "raam",
      status: "raam",
      // username: "raam",
      action: (
        <>
          <Link
            //   to={`/admin/blog-category/${bCatState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            // onClick={() => showModal(bCatState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="text-header">All Booking Doctor</h2>
          <div className="dropdown my-3">
            <button
              className="btn btn-outlined border col-md-3 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Bulk Action
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>{" "}
            <button className="btn btn-primary">Apply</button>
          </div>
          <div
            className="header d-inline-flex mb-3"
            style={{ display: "inline-block" }}
          >
            <h6 className="text-responsive mt-2">Show</h6>
            <form className="d-flex mb-2" role="search">
              <h6 className="form-label mt-2" style={{ marginLeft: "20rem" }}>
                Search:
              </h6>
              <input
                className="form-control"
                style={{ marginLeft: "5px" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div>
            <Table
              className="table table-responsive"
              columns={columns}
              dataSource={data1}
            />
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

        {/* Add New */}
        <div className="col mx-1">
          <h2 className="text-header">Add New</h2>
          <div className="col-6 my-2">
            <CustomInput
              type="text"
              label="Time "
              // name="doctorCode"
              // onChng={formik.handleChange("doctorCode")}
              // onBlr={formik.handleBlur("doctorCode")}
              // val={formik.values.doctorCode}
            />
            <div className="error">
              {formik.touched.doctorCode && formik.errors.doctorCode}
            </div>
          </div>
          <div className="col-6">
            <select
              className="form-select form-select-lg mb-3"
              aria-label="Large select"
            >
              <option selected>Status</option>
              <option value="1">Public</option>
              <option value="2">Draft</option>
            </select>
          </div>
          <div className="p-2 w-full ">
            <button type="submit" className="btn btn-primary ">
              Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDoctor;
