import { deleteAService, getAllServices, resetState } from "../../features/service/serviceSlice"
import { Table } from "antd";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Descriptions",
    dataIndex: "description",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Category",
    dataIndex: "category",
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



const ServiceList = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getAllServices())
    dispatch(resetState())
  },[])
  
  const [open, setOpen] = useState(false);
  const [delId, setDelId] = useState("");

  const Services = useSelector((state) => state?.service?.Services);


  

const hideModal = () => {
  setOpen(false);
};


  const deleteService = (e) => {
    dispatch(deleteAService(e));
    setTimeout(() => {
      dispatch(getAllServices());
    dispatch(resetState());

    }, 100);
    setOpen(false);
  };

  const showModal = (e) => {
    setOpen(true);
    setDelId(e);
  };

  const data1 = [];
  for (let i = 0; i < Services?.length; i++) {
    data1.push({
      key: i + 1,
      title: Services[i]?.title,
      description: Services[i]?.description,
      category: Services[i]?.category,

      status:  (
        <>
          <div className="btn btn-outline-primary">{Services[i]?.status}</div>
        </>
      ),
      action: (
        <>
          <div className="d-flex  ">
            <Link
              to={`/admin/service/${Services[i]._id}`}
              className=" fs-4 text-danger bg-transparent border-0"
            >
              <BiEdit />
            </Link>
            <button
              onClick={() => showModal(Services[i]._id)}
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
              <h3 className=" text-center mb-3 ">All Services</h3>
              <div className="d-flex w-full  justify-content-end px-4 py-3">
                <Link className="btn btn-primary" to={`/admin/service`}>
                  Add New Category
                </Link>
              </div>
              <Table columns={columns} dataSource={data1} />
              <CustomModal
                title="Are you want to delete Service ?"
                centered
                open={open}
                hideModal={hideModal}
                performAction={() => {
                  deleteService(delId);
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
}

export default ServiceList