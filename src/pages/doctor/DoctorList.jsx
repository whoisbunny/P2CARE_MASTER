import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteADoctor, getAllDoctors, resetState } from "../../features/doctor/doctorSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },


  {
    title: "Code",
    dataIndex: "code",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Image",
    dataIndex: "image",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Appointment Status ",
    dataIndex: "appointmentStatus",
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

const DoctorList = () => {


  const allDoctors = useSelector((state) => state?.doctor?.allDoctors);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(resetState());

  }, []);
   const [open, setOpen] = useState(false);
   const [delDoc, setdelDoc] = useState('')





   const showModal = (e) => {
     setOpen(true);
     setdelDoc(e);
   };

   const hideModal = () => {
     setOpen(false);
   };


   const data1 = [];
   for (let i = 0; i < allDoctors?.length; i++) {
     data1.push({
       key: i + 1,
       code: allDoctors[i]?.doctorCode,
       name: allDoctors[i]?.doctorName,
       image: (
         <>
           <img src={allDoctors[i]?.image} alt="" />
         </>
       ),
       price: allDoctors[i]?.price,
       appointmentStatus: allDoctors[i]?.availabileforappointment ? (
         <div className="btn btn-success">Yes</div>
       ) : (
         <div className="btn btn-danger">No</div>
       ),
       status: (
         <>
           <div className="btn btn-outline-primary">
             {allDoctors[i]?.status}
           </div>
         </>
       ),
       action: (
         <>
           <Link
             to={`/admin/doctor/${allDoctors[i]?._id}`}
             className=" fs-3 text-danger"
           >
             <BiEdit />
           </Link>
           <button
             className="ms-3 fs-3 text-danger bg-transparent border-0"
             onClick={() => showModal(allDoctors[i]?._id)}
           >
             <AiFillDelete />
           </button>
         </>
       ),
     });
   }
   const deleteDoctor = (e) => {
     dispatch(deleteADoctor(e));
     setOpen(false);
     setTimeout(() => {
       dispatch(getAllDoctors());
       dispatch(resetState())
     }, 100);
   };
   return (
     <div>
       <h3 className="mb-4 title px-5">All Doctors</h3>
       <div>
         <Table columns={columns} dataSource={data1} />
       </div>
       <CustomModal
         hideModal={hideModal}
         open={open}
           performAction={() => {
             deleteDoctor(delDoc);
           }}
         title="Are you sure you want to delete this blog category?"
       />
     </div>
   );

};

export default DoctorList;
