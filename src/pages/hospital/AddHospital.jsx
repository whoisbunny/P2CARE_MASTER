import { useFormik } from "formik";
import CustomInput from "../../components/CustomInput";
import * as yup from "yup";

const AddDoctor = () => {
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

      <div>
        <h3 className="mb-4 title">Add Hospital</h3>
        <div>
          <form onSubmit={formik.handleSubmit} className="mb-4 ">
            <div className="row">
              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Name "
                  name="Name"
                  onChng={formik.handleChange("Name")}
                  onBlr={formik.handleBlur("Name")}
                  val={formik.values.Name}
                />
                <div className="error">
                  {formik.touched.Name && formik.errors.Name}
                </div>
              </div>

              <div className="col-4 mb-3">
                <CustomInput
                  type="file"
                  label="Enter image "
                  name="image"
                  accept="image/*"
                  id="formFile"
                  // onChng={(e) =>
                  //   formik.setFieldValue("image", e.target.files[0])
                  // }
                />
                <div className="error">
                  {formik.touched.image && formik.errors.image}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Opening Time"
                  name="opentime"
                  onChng={formik.handleChange("opentime")}
                  onBlr={formik.handleBlur("opentime")}
                  val={formik.values.opentime}
                />
                <div className="error">
                  {formik.touched.opentime &&
                    formik.errors.opentime}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Closing Time"
                  name="closetime"
                  onChng={formik.handleChange("closetime")}
                  onBlr={formik.handleBlur("closetime")}
                  val={formik.values.closetime}
                />
                <div className="error">
                  {formik.touched.closetime &&
                    formik.errors.closetime}
                </div>
              </div>

              <div className="col-4 mb-3 ">
                <select
                  name="status"
                  className="form-control form-select py-3 "
                  // onChange={formik.handleChange("status")}
                  // onBlur={formik.handleBlur("status")}
                  // value={formik.values.status}
                >
                  <option selected>Select Status</option>
                  <option value="draft">Draft</option>
                  <option value="publish">Publish</option>
                </select>
                <div className="error">
                  {formik.touched.status && formik.errors.status}
                </div>
              </div>

              <div className="p-3 w-full ">
                <button type="submit" className="btn btn-primary ">
                  Add Hospital
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
