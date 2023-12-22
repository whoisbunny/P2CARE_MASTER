import { useFormik } from "formik";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";

let schema = yup.object().shape({
  doctorName: "",
  doctorCode: "",
  departmentName: "",
  departmentCode: "",
  slug: "",
  location: "",
  description: "",
  shortDescription: "",
  experienceInfo: "",
  metaTitle: "",
  ogMetaTitle: "",
  metaDescription: "",
  ogMetaDescription: "",
  metaTags: "",
  price: "",
  image: "",
  availabileforappointment: "",
  hospital: "",
  status: "",
});
const AddBlog = () => {
  const formik = useFormik({
    initialValues: {
      doctorName: "",
      doctorCode: "",
      departmentName: "",
      departmentCode: "",
      slug: "",
      description: "",
      
      metaTitle: "",
      ogMetaTitle: "",
      metaDescription: "",
      ogMetaDescription: "",
      metaTags: "",
      price: "",
      image: "",
      availabileforappointment: "",
      hospital: "",
      status: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div>
        <h3 className="mb-4 title">Add New Blog Post</h3>
        <div>
          <form onSubmit={formik.handleSubmit} className="mb-4 ">
            <div className="row">
              <div className="col-12">
                <CustomInput
                  type="text"
                  label="Title "
                  name="title"
                  onChng={formik.handleChange("doctorName")}
                  onBlr={formik.handleBlur("doctorName")}
                  val={formik.values.doctorName}
                />
                <div className="error">
                  {formik.touched.doctorName && formik.errors.doctorName}
                </div>
              </div>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder=""
                  id="floatingTextarea"
                ></textarea>
                <label className="mx-3" htmlFor="floatingTextarea">
                  Content
                </label>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="P Author "
                  name="pAuthor"
                  onChng={formik.handleChange("departmentName")}
                  onBlr={formik.handleBlur("departmentName")}
                  val={formik.values.departmentName}
                />
                <div className="error">
                  {formik.touched.departmentName &&
                    formik.errors.departmentName}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor slug "
                  name="slug"
                  onChng={formik.handleChange("slug")}
                  onBlr={formik.handleBlur("slug")}
                  val={formik.values.slug}
                />
                <div className="error">
                  {formik.touched.slug && formik.errors.slug}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Blog Tags "
                  name="blogTags"
                  onChng={formik.handleChange("location")}
                  onBlr={formik.handleBlur("location")}
                  val={formik.values.location}
                />
                <div className="error">
                  {formik.touched.location && formik.errors.location}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Meta Tags "
                  name="metaTags"
                  onChng={formik.handleChange("metaTitle")}
                  onBlr={formik.handleBlur("metaTitle")}
                  val={formik.values.metaTitle}
                />
                <div className="error">
                  {formik.touched.metaTitle && formik.errors.metaTitle}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Meta Title "
                  name="metaTitle"
                  onChng={formik.handleChange("metaTitle")}
                  onBlr={formik.handleBlur("metaTitle")}
                  val={formik.values.metaTitle}
                />
                <div className="error">
                  {formik.touched.metaTitle && formik.errors.metaTitle}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Og Meta Title "
                  name="ogMEtaTitle"
                  onChng={formik.handleChange("ogMEtaTitle")}
                  onBlr={formik.handleBlur("ogMEtaTitle")}
                  val={formik.values.ogMEtaTitle}
                />
                <div className="error">
                  {formik.touched.ogMEtaTitle && formik.errors.ogMEtaTitle}
                </div>
              </div>

              <div className="col-6 ">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    style={{ height: "100px" }}
                    name="metaDescription"
                    onChng={formik.handleChange("metaDescription")}
                    onBlr={formik.handleBlur("metaDescription")}
                    val={formik.values.metaDescription}
                  ></textarea>
                  <label className="mx-3" htmlFor="floatingTextarea">
                    Meta Description
                  </label>
                </div>
                <div className="error">
                  {formik.touched.metaDescription &&
                    formik.errors.metaDescription}
                </div>
              </div>

              <div className="col-6 ">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    style={{ height: "100px" }}
                    name="ogMetaDescription"
                    onChng={formik.handleChange("ogMetaDescription")}
                    onBlr={formik.handleBlur("ogMetaDescription")}
                    val={formik.values.ogMetaDescription}
                  ></textarea>
                  <label className="mx-3" htmlFor="floatingTextarea">
                    Og Meta Description
                  </label>
                </div>
                <div className="error">
                  {formik.touched.ogMetaDescription &&
                    formik.errors.ogMetaDescription}
                </div>
              </div>

              <div className="col-6 ">
                <CustomInput
                  type="file"
                  label="Blog Image "
                  name="image"
                  onChng={formik.handleChange("image")}
                  onBlr={formik.handleBlur("image")}
                  val={formik.values.image}
                />
                <div className="error">
                  {formik.touched.image && formik.errors.image}
                </div>
              </div>

              <div className="col-6 ">
                <CustomInput
                  type="file"
                  label="Or Meta image "
                  name="image"
                  onChng={formik.handleChange("image")}
                  onBlr={formik.handleBlur("image")}
                  val={formik.values.image}
                />
                <div className="error">
                  {formik.touched.image && formik.errors.image}
                </div>
              </div>

              <div className="">
                <select
                  class="form-select"
                  name="selectCategory"
                  onChng={formik.handleChange("selectCategory")}
                  onBlr={formik.handleBlur("selectCategory")}
                  val={formik.values.selectCategory}
                  style={{ height: "60px" }}
                >
                  <option selected>Select Category</option>
                  <option value="1">One</option>
                </select>
                <div className="error">
                  {formik.touched.selectCategory &&
                    formik.errors.selectCategory}
                </div>
              </div>

              <div className="mt-2">
                <select
                  class="form-select"
                  name="status"
                  onChng={formik.handleChange("status")}
                  onBlr={formik.handleBlur("status")}
                  val={formik.values.status}
                  style={{ height: "60px" }}
                >
                  <option selected>Status</option>
                  <option value="1">Publish</option>
                  <option value="1">Draft</option>
                </select>
                <div className="error">
                  {formik.touched.status && formik.errors.status}
                </div>
              </div>

              <div className="p-3 w-full ">
                <button type="submit" className="btn btn-primary ">
                  Add New Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
