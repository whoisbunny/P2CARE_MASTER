import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../components/CustomModal";
import { useState } from "react";
import { useFormik } from "formik";
import { Table } from "antd";

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
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const AddBlogCategory = () => {
  const [open, setOpen] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < 1; i++) {
    data1.push({
      key: i + 1,
      name: "raam",
      email: "raam",
      username: "raam",
      action: (
        <>
          <Link
            //   to={`/admin/blog-category/${bCatState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-2 fs-3 text-danger bg-transparent border-0"
            // onClick={() => showModal(bCatState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const formik = useFormik({
    initialValues: {},
    // validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mt-3">
      <div
        className="header d-inline-flex mb-3"
        style={{ display: "inline-block" }}
      >
        <h2 className="text-header">All Hospital</h2>
        <button
          className="btn btn-primary mb-3"
          style={{ marginLeft: "55.5rem" }}
        >
          Add Hospital
        </button>
      </div>
      <div className="dropdown my-3">
        <button
          className="btn btn-outlined border col-md-2 dropdown-toggle"
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
        {/* <div className="my-3"> */}
        <form className="d-flex mb-2" role="search">
          <h6 className="form-label mt-2" style={{ marginLeft: "55rem" }}>
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
        {/* </div> */}
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
  );
};

export default AddBlogCategory;
