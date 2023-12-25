
// const HospitalList = () => {
//   return (
//     <>
    
    
    
    
    
    
//     </>
//   )
// }

// export default HospitalList





import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { IoArrowBack } from "react-icons/io5";
import { deleteAHospital, getAllHospitals, resetState } from "../../features/hospital/hospitalSlice";

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
  // {
  //   title: "Image",
  //   dataIndex: "image",
  //   sorter: (a, b) => a.name.length - b.name.length,
  // },
  {
    title: "Opning Time",
    dataIndex: "opningTime",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Closing Time",
    dataIndex: "closingTime",
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

const BookDoctorList = () => {
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getAllHospitals());
    dispatch(resetState());
  }, []);
  const hospitalState = useSelector((state) => state.hospital.AllHospitals);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [delId, setdelId] = useState("");

  const deleteHosp = (e) => {
    dispatch(deleteAHospital(e));
    setTimeout(() => {
      dispatch(getAllHospitals());

    }, 100);

    setOpen(false);
  };
  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < hospitalState?.length; i++) {
    data1.push({
      key: i + 1,
      name: hospitalState[i].hospitalname,
      // image: hospitalState[i].,
      opningTime: hospitalState[i].openingtime,
      closingTime: hospitalState[i].closingtime,

      status: (
        <>
          <div className="btn btn-outline-primary">
            {hospitalState[i]?.status}
          </div>
        </>
      ),
      action: (
        <>
          <Link
            className=" fs-3 text-danger"
            to={`/admin/hospital/${hospitalState[i]?._id}`}
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => showModal(hospitalState[i]._id)}
            className="ms-3 fs-3 text-danger bg-transparent border-0"
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const showModal = (e) => {
    setOpen(true);
    setdelId(e);
  };

  return (
    <>
      
      <div className="mt-3">
        <div className="header d-flex mb-3 justify-content-between">
          <h2 className="text-header">All Hospitals</h2>
          <Link to={`/admin/hospital`} className="btn btn-primary mb-3">
            Add New 
          </Link>
        </div>

        <div
          className="header d-flex mb-3"
          // style={{ display: "inline-block" }}
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
          performAction={() => {
            deleteHosp(delId);
          }}
          title="Are you sure you want to delete ?"
        />
      </div>
    </>
  );
};

export default BookDoctorList;
