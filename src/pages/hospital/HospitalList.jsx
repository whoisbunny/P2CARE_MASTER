// import { useFormik } from "formik";
// import { useState } from "react";

import { Field, FieldArray, Form, Formik, useFormik } from "formik";

// const HospitalList = () => {
//   const [val, setval] = useState([]);

//   const handleAdd = () => {
//     const abc = [...val, []];
//     setval(abc);
//   };
//   const handleChange = (e, i) => {
//     const inputData = [...val];
//     inputData[i] = e.target.value;
//     setval(inputData);
//   };

//   const handleDelete = (i) => {
//     const deletevalue = [...val];
//     deletevalue.splice(i, 1);
//     setval(deletevalue);
//   };

//   console.log(val);

//   const formik = useFormik({
//     initialValues: {
//       doctorName: [],
//     },
//     onSubmit: (values) => {
//       console.log(values);
//       const formData = new FormData();
//       formData.append("doctorName", val);
//     },
//   });

//   return (
//       <div>
//       <form onSubmit={formik.handleSubmit}>
//         <button onClick={() => handleAdd()} type="button">
//           Add
//         </button>

//         {val.map((data, i) => {
//           return (
//             <>
//               <div key={i}>
//                 <input
//                   type="text"
//                   name="doctorName"
//                   value={data}
//                   onChange={(e) => handleChange(e, i)}
//                 />

//                 <button onClick={() => handleDelete(i)}>delete</button>
//               </div>
//             </>
//           );
//         })}

//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// };

// export default HospitalList;

const HospitalList = () => {
  
  return (
    <>
      <Formik
        initialValues={{ emp: [] }}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <>
            <form onSubmit={formik.handleSubmit}>
              <h3>data review</h3>
              <FieldArray
                name="emp"
                render={(arrayHelpers) => {
                  return (
                    <>
                      <div>
                        {formik.values.emp.map((e, i) => {
                          return (
                            <>
                              <div key={i}>
                                <div className="float-end">
                                  <button
                                    className="btn btn-danger"
                                    onClick={(i) => arrayHelpers.remove(i)}
                                  >
                                    X
                                  </button>
                                </div>
                                <div className="form-group">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    name={`emp.${i}`}
                                  />
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            arrayHelpers.insert(formik.values.emp.length + 1)
                          }
                        >
                          add
                        </button>
                      </div>
                    </>
                  );
                }}
              />

              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </>
         )} 
      </Formik>
    </>
  );
};

export default HospitalList;
