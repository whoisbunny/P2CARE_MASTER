import { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete, AiOutlineFileSearch } from "react-icons/ai";
import { Table } from "antd";

import {
  deleteAService,
  getAllServices,
  resetState,
} from "../../features/service/serviceSlice";
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
const SearchService = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [delId, setDelId] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (search ) {
      axios
        .get(`http://localhost:3001/service/searchservice/${search}`)
        .then((e) => setSearchResult(e.data?.data));
    }
    else {
         axios
           .get(`http://localhost:3001/service/allservice`)
           .then((e) => setSearchResult(e.data?.data));
    }
  }, [search]);

  console.log(search);
  console.log(searchResult);
  const deleteService = (e) => {
    setOpen(false);
    dispatch(deleteAService(e));
    setTimeout(() => {
      dispatch(getAllServices());
      // dispatch(resetState());
    }, 100);
  };

  const showModal = (e) => {
    setOpen(true);
    setDelId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,
      title: searchResult[i]?.title,
      description: searchResult[i]?.description,
      category: searchResult[i]?.category,

      status: (
        <>
          <div className="btn btn-outline-primary">
            {searchResult[i]?.status}
          </div>
        </>
      ),
      action: (
        <>
          <div className="d-flex  ">
            <Link
              to={`/admin/service/${searchResult[i]._id}`}
              className=" fs-4 text-danger bg-transparent border-0"
            >
              <BiEdit />
            </Link>
            <button
              onClick={() => showModal(searchResult[i]._id)}
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
      <div className="container-xxl mb-5">
        <div className="row justify-content-center">
          <div className="col-8 ">
            <div className="card px-4 py-5">
              <h3 className=" text-center my-4 py-3">Search Service</h3>
              <div className="input-group mb-3 ">
                <span className="input-group-text" id="basic-addon1">
                  <AiOutlineFileSearch />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sesrch Services"
                  aria-label="Username"
                  onChange={(e) => setSearch(e.target.value)}
                  aria-describedby="basic-addon1"
                />
              </div>

              <Table columns={columns} dataSource={data1} />
              <CustomModal
                title="Are you want to delete Service ?"
                centered
                hideModal={hideModal}
                open={open}
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
};

export default SearchService;
