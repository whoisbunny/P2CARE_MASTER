import {  Table } from "antd";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";

import {
  allDoctorCategory,
  deleteDoctorCategory,
  resetState,
} from "../../features/dCategory/dCategorySlice.jsx";

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




const DoctorCategory = () => {
  const [open, setOpen] = useState(false);
  const [delCatId, setDelCatId] = useState("");
  const dispatch = useDispatch();

  const dCategory = useSelector((state) => state?.dCategory?.dCategories);

  useEffect(() => {
    dispatch(allDoctorCategory());
    dispatch(resetState());
  }, []);

  const deleteDCategory = (e) => {
    dispatch(deleteDoctorCategory(e));
    setTimeout(() => {
      dispatch(allDoctorCategory());
    }, 100);
    setOpen(false);
  };

  const showModal = (e) => {
    setOpen(true);
    setDelCatId(e);
  };

  const data1 = [];
  for (let i = 0; i < dCategory?.length; i++) {
    data1.push({
      key: i + 1,
      name: dCategory[i]?.name,
      status: dCategory[i]?.status,
      action: (
        <>
          <div className="d-flex  ">
            <Link
              to={`/admin/doctor-category/${dCategory[i]._id}`}
              className=" fs-4 text-danger bg-transparent border-0"
            >
              <BiEdit />
            </Link>
            <button
              onClick={() => showModal(dCategory[i]._id)}
              className="ms-3 fs-4 text-danger bg-transparent border-0"
            >
              <AiFillDelete />
            </button>
          </div>
        </>
      ),
    });
  }

  return (
    <>
      <div className="container-xxl mb-4">
        <div className="row ">
          <div className="col-sm-12 mb-4">
            <div className="card p-5">
              <h3 className=" title text-center mb-3 ">All Category</h3>
              <div className="d-flex w-full  justify-content-end px-4 py-3">
                <Link className="btn btn-primary" to={`/admin/doctor-category`}>
                  Add New Category
                </Link>
              </div>
              <Table columns={columns} dataSource={data1} />
              <CustomModal
                title="Are you want to delete category ?"
                centered
                open={open}
                performAction={() => {
                  deleteDCategory(delCatId);
                }}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCategory;
