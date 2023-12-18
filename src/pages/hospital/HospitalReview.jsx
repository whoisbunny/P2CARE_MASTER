import { Table } from "antd";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Hospital",
    dataIndex: "hospital",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "User",
    dataIndex: "user",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Rating",
    dataIndex: "rating",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Message",
    dataIndex: "message",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const HospitalReview = () => {
  const [open, setOpen] = useState(false);
  const [blogCatId, setblogCatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setblogCatId(e);
  };
  const editModal = (e) => {
    setOpen(true);
    console.log(e);
  }

  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < 4; i++) {
    data1.push({
      key: i + 1,
      name: "raam",
      email: "raam",
      username: "raam",
      action: (
        <>
          <Link
            //   to={`/admin/blog-category/${bCatState[i]._id}`}
            onClick={(e) => editModal(e)}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal()}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteBlogCategory = (e) => {
    // dispatch(deleteABlogCat(e));
    setOpen(false);
    console.log(e);
    // setTimeout(() => {
    //   dispatch(getCategories());
    // }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title px-5">All Hospital Reviews</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
          performAction={() => {
            deleteBlogCategory(blogCatId);
          }}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default HospitalReview;
