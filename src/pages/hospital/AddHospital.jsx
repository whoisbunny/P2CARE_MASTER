import { useFormik } from "formik";
import CustomInput from "../../components/CustomInput";
import * as yup from "yup";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

const AddDoctor = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      Name: "",
      image: "",
      openingTime: "",
      closingTime: "",
      status: "",
    },
    // validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="">
        <button
          className="ms-3 fs-2 btn  bg-transparent border-0"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
        </button>
      </div>

      <div className="container-xxl">
        <div className="title">
          <h3>Add Hospital</h3>
        </div>

        <form onSubmit={formik.handleSubmit} className="">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <CustomInput
                type="text"
                label="Hospital Name "
                name="hospitalname"
                onChng={formik.handleChange("hospitalname")}
                onBlr={formik.handleBlur("hospitalname")}
                val={formik.values.hospitalname}
              />
              <div className="error">
                {formik.touched.hospitalname && formik.errors.hospitalname}
              </div>
            </div>
            <div className="col-12">
              <CustomInput
                type="text"
                label="Hospital Address "
                name="hospitaladdress"
                onChng={formik.handleChange("hospitaladdress")}
                onBlr={formik.handleBlur("hospitaladdress")}
                val={formik.values.hospitaladdress}
              />
              <div className="error">
                {formik.touched.hospitaladdress &&
                  formik.errors.hospitaladdress}
              </div>
            </div>

            <div className="col-12">
              <label
                htmlFor="exampleFormControlTextarea4"
                className=" m-1 mt-3 py-2"
              >
                Hospital Description
              </label>{" "}
              <ReactQuill
                id="exampleFormControlTextarea4"
                theme="snow"
                name="description"
                onChange={formik.handleChange("description")}
                value={formik.values.description}
              />
              <div className="error">
                {formik.touched.description && formik.errors.description}
              </div>
            </div>
            {/* <div className="col-12 gap-5 justify-content-center d-flex"> */}
            <div className="col-6">
              <CustomInput
                type="time"
                label="Hospital Opning Time "
                name="openingtime"
                onChng={formik.handleChange("openingtime")}
                onBlr={formik.handleBlur("openingtime")}
                val={formik.values.openingtime}
              />
              <div className="error">
                {formik.touched.openingtime && formik.errors.openingtime}
              </div>
            </div>
            <div className="col-6 ">
              <CustomInput
                type="time"
                label="Hospital Closing Time "
                name="closingtime"
                onChng={formik.handleChange("closingtime")}
                onBlr={formik.handleBlur("closingtime")}
                val={formik.values.closingtime}
              />
              <div className="error">
                {formik.touched.closingtime && formik.errors.closingtime}
              </div>
            </div>
            {/* </div> */}
            <div className="col-12 form-group mb-3">
              <label
                htmlFor="exampleFormControlTextarea5"
                className=" m-1 mt-3"
              >
                Short Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea5"
                rows="3"
                name="shortdescription"
                onChange={formik.handleChange("shortdescription")}
                onBlur={formik.handleBlur("shortdescription")}
                value={formik.values.shortdescription}
              />
              <div className="error">
                {formik.touched.shortdescription &&
                  formik.errors.shortdescription}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddDoctor;
