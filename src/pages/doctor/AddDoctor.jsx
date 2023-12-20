import { useFormik } from "formik";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";

let schema = yup.object().shape({
  doctorName: "",
  doctorCode: "",
  departmentName: "",
  departmentCode: "",
  // designation[0]: "",
  // designation[1]: "",
  // designation[0]: "",
  // designation[1]: "",
  // experties[0]: "",
  // experties[1]: "",
  slug: "",
  location: "",
  description: "",
  shortDescription: "",
  experienceInfo: "",
  // awardAndAchivementsInfo[0]: "",
  // awardAndAchivementsInfo[1]: "",
  specialities: "",
  // talkPublicationInfo[0]: "",
  // talkPublicationInfo[1]: "",
  // languageInfo[0]: "",
  // languageInfo[1]: "",
  // educationInfo[0]: "",
  // educationInfo[1]: "",
  // fellowShipInfo[0]: "",
  // fellowShipInfo[1]: "",
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
const AddDoctor = () => {
  const formik = useFormik({
    initialValues: {
      doctorName: "",
      doctorCode: "",
      departmentName: "",
      departmentCode: "",
      // designation[0]: "",
      // designation[1]: "",
      // designation[0]: "",
      // designation[1]: "",
      // experties[0]: "",
      // experties[1]: "",
      slug: "",
      location: "",
      description: "",
      shortDescription: "",
      experienceInfo: "",
      // awardAndAchivementsInfo[0]: "",
      // awardAndAchivementsInfo[1]: "",
      specialities: "",
      // talkPublicationInfo[0]: "",
      // talkPublicationInfo[1]: "",
      // languageInfo[0]: "",
      // languageInfo[1]: "",
      // educationInfo[0]: "",
      // educationInfo[1]: "",
      // fellowShipInfo[0]: "",
      // fellowShipInfo[1]: "",
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
        <h3 className="mb-4 title">Add Doctor</h3>
        <div>
          <form onSubmit={formik.handleSubmit} className="mb-4 ">
            <div className="row">
              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor Name "
                  name="doctorName"
                  onChng={formik.handleChange("doctorName")}
                  onBlr={formik.handleBlur("doctorName")}
                  val={formik.values.doctorName}
                />
                <div className="error">
                  {formik.touched.doctorName && formik.errors.doctorName}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor Code "
                  name="doctorCode"
                  onChng={formik.handleChange("doctorCode")}
                  onBlr={formik.handleBlur("doctorCode")}
                  val={formik.values.doctorCode}
                />
                <div className="error">
                  {formik.touched.doctorCode && formik.errors.doctorCode}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor Dept. Name "
                  name="departmentName"
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
                  label="Doctor Dept. Code "
                  name="departmentCode"
                  onChng={formik.handleChange("departmentCode")}
                  onBlr={formik.handleBlur("departmentCode")}
                  val={formik.values.departmentCode}
                />
                <div className="error">
                  {formik.touched.departmentCode &&
                    formik.errors.departmentCode}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor designation"
                  // name="designation[0]"
                  // onChng={formik.handleChange("designation[0]")}
                  // onBlr={formik.handleBlur("designation[0]")}
                  // val={formik.values.designation[0]}
                />
                <div className="error">
                  {/* {formik.touched.designation[0] && formik.errors.designation[0]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor designation1 "
                  // name="designation[1]"
                  // onChng={formik.handleChange("designation[1]")}
                  // onBlr={formik.handleBlur("designation[1]")}
                  // val={formik.values.designation[1]}
                />
                <div className="error">
                  {/* {formik.touched.designation[1] && formik.errors.designation[1]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor experties "
                  // name="experties[0]"
                  // onChng={formik.handleChange("experties[0]")}
                  // onBlr={formik.handleBlur("experties[0]")}
                  // val={formik.values.experties[0]}
                />
                <div className="error">
                  {/* {formik.touched.experties[0] && formik.errors.experties[0]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor experties1 "
                  // name="experties[1]"
                  // onChng={formik.handleChange("experties[1]")}
                  // onBlr={formik.handleBlur("experties[1]")}
                  // val={formik.values.experties[1]}
                />
                <div className="error">
                  {/* {formik.touched.experties[1] && formik.errors.experties[1]} */}
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
                  label="Doctor location "
                  name="location"
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
                  label="Description "
                  name="description"
                  onChng={formik.handleChange("description")}
                  onBlr={formik.handleBlur("description")}
                  val={formik.values.description}
                />
                <div className="error">
                  {formik.touched.description && formik.errors.description}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Short Description "
                  name="shortDescription"
                  onChng={formik.handleChange("shortDescription")}
                  onBlr={formik.handleBlur("shortDescription")}
                  val={formik.values.shortDescription}
                />
                <div className="error">
                  {formik.touched.shortDescription &&
                    formik.errors.shortDescription}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Experience Info "
                  name="experienceInfo"
                  onChng={formik.handleChange("experienceInfo")}
                  onBlr={formik.handleBlur("experienceInfo")}
                  val={formik.values.experienceInfo}
                />
                <div className="error">
                  {formik.touched.experienceInfo &&
                    formik.errors.experienceInfo}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor specialities "
                  name="specialities"
                  onChng={formik.handleChange("specialities")}
                  onBlr={formik.handleBlur("specialities")}
                  val={formik.values.specialities}
                />
                <div className="error">
                  {formik.touched.specialities && formik.errors.specialities}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor award And Achivements Info "
                  // name="awardAndAchivementsInfo[0]"
                  // onChng={formik.handleChange("awardAndAchivementsInfo[0]")}
                  // onBlr={formik.handleBlur("awardAndAchivementsInfo[0]")}
                  // val={formik.values.awardAndAchivementsInfo[0]}
                />
                <div className="error">
                  {/* {formik.touched.awardAndAchivementsInfo[0] && formik.errors.awardAndAchivementsInfo[0]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor award And Achivements Info-1 "
                  // name="awardAndAchivementsInfo[1]"
                  // onChng={formik.handleChange("awardAndAchivementsInfo[1]")}
                  // onBlr={formik.handleBlur("awardAndAchivementsInfo[1]")}
                  // val={formik.values.awardAndAchivementsInfo[1]}
                />
                <div className="error">
                  {/* {formik.touched.awardAndAchivementsInfo[1] && formik.errors.awardAndAchivementsInfo[1]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor talk Publication Info"
                  // name="talkPublicationInfo[0]"
                  // onChng={formik.handleChange("talkPublicationInfo[0]")}
                  // onBlr={formik.handleBlur("talkPublicationInfo[0]")}
                  // val={formik.values.talkPublicationInfo[0]}
                />
                <div className="error">
                  {/* {formik.touched.talkPublicationInfo[0] && formik.errors.talkPublicationInfo[0]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor talk Publication Info-1"
                  // name="talkPublicationInfo[1]"
                  // onChng={formik.handleChange("talkPublicationInfo[1]")}
                  // onBlr={formik.handleBlur("talkPublicationInfo[1]")}
                  // val={formik.values.talkPublicationInfo[1]}
                />
                <div className="error">
                  {/* {formik.touched.talkPublicationInfo[1] && formik.errors.talkPublicationInfo[1]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor language Info"
                  // name="languageInfo[0]"
                  // onChng={formik.handleChange("languageInfo[0]")}
                  // onBlr={formik.handleBlur("languageInfo[0]")}
                  // val={formik.values.languageInfo[0]}
                />
                <div className="error">
                  {/* {formik.touched.languageInfo[0] && formik.errors.languageInfo[0]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor language Info-1"
                  // name="languageInfo[1]"
                  // onChng={formik.handleChange("languageInfo[1]")}
                  // onBlr={formik.handleBlur("languageInfo[1]")}
                  // val={formik.values.languageInfo[1]}
                />
                <div className="error">
                  {/* {formik.touched.languageInfo[1] && formik.errors.languageInfo[1]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor education Info "
                  // name="educationInfo[0]"
                  // onChng={formik.handleChange("educationInfo[0]")}
                  // onBlr={formik.handleBlur("educationInfo[0]")}
                  // val={formik.values.educationInfo[0]}
                />
                <div className="error">
                  {/* {formik.touched.educationInfo[0] && formik.errors.educationInfo[0]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor education Info-1 "
                  // name="educationInfo[1]"
                  // onChng={formik.handleChange("educationInfo[1]")}
                  // onBlr={formik.handleBlur("educationInfo[1]")}
                  // val={formik.values.educationInfo[1]}
                />
                <div className="error">
                  {/* {formik.touched.educationInfo[1] && formik.errors.educationInfo[1]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor fellowShip Info "
                  // name="fellowShipInfo[0]"
                  // onChng={formik.handleChange("fellowShipInfo[0]")}
                  // onBlr={formik.handleBlur("fellowShipInfo[0]")}
                  // val={formik.values.fellowShipInfo[0]}
                />
                <div className="error">
                  {/* {formik.touched.fellowShipInfo[0] && formik.errors.fellowShipInfo[0]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor fellowShip Info1 "
                  // name="fellowShipInfo[1]"
                  // onChng={formik.handleChange("fellowShipInfo[1]")}
                  // onBlr={formik.handleBlur("fellowShipInfo[1]")}
                  // val={formik.values.fellowShipInfo[1]}
                />
                <div className="error">
                  {/* {formik.touched.fellowShipInfo[1] && formik.errors.fellowShipInfo[1]} */}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="metaTitle "
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
                  label="ogMEtaTitle "
                  name="ogMEtaTitle"
                  onChng={formik.handleChange("ogMEtaTitle")}
                  onBlr={formik.handleBlur("ogMEtaTitle")}
                  val={formik.values.ogMEtaTitle}
                />
                <div className="error">
                  {formik.touched.ogMEtaTitle && formik.errors.ogMEtaTitle}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="metaDescription "
                  name="metaDescription"
                  onChng={formik.handleChange("metaDescription")}
                  onBlr={formik.handleBlur("metaDescription")}
                  val={formik.values.metaDescription}
                />
                <div className="error">
                  {formik.touched.metaDescription &&
                    formik.errors.metaDescription}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="ogMetaDescription "
                  name="ogMetaDescription"
                  onChng={formik.handleChange("ogMetaDescription")}
                  onBlr={formik.handleBlur("ogMetaDescription")}
                  val={formik.values.ogMetaDescription}
                />
                <div className="error">
                  {formik.touched.ogMetaDescription &&
                    formik.errors.ogMetaDescription}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="metaTags "
                  name="metaTags"
                  onChng={formik.handleChange("metaTags")}
                  onBlr={formik.handleBlur("metaTags")}
                  val={formik.values.metaTags}
                />
                <div className="error">
                  {formik.touched.metaTags && formik.errors.metaTags}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="price "
                  name="price"
                  onChng={formik.handleChange("price")}
                  onBlr={formik.handleBlur("price")}
                  val={formik.values.price}
                />
                <div className="error">
                  {formik.touched.price && formik.errors.price}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="file"
                  label="Dr. image "
                  name="image"
                  onChng={formik.handleChange("image")}
                  onBlr={formik.handleBlur("image")}
                  val={formik.values.image}
                />
                <div className="error">
                  {formik.touched.image && formik.errors.image}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Availabile for Appointment "
                  name="availabileforappointment"
                  onChng={formik.handleChange("availabileforappointment")}
                  onBlr={formik.handleBlur("availabileforappointment")}
                  val={formik.values.availabileforappointment}
                />
                <div className="error">
                  {formik.touched.availabileforappointment &&
                    formik.errors.availabileforappointment}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor hospital "
                  name="hospital"
                  onChng={formik.handleChange("hospital")}
                  onBlr={formik.handleBlur("hospital")}
                  val={formik.values.hospital}
                />
                <div className="error">
                  {formik.touched.hospital && formik.errors.hospital}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor status "
                  name="status"
                  onChng={formik.handleChange("status")}
                  onBlr={formik.handleBlur("status")}
                  val={formik.values.status}
                />
                <div className="error">
                  {formik.touched.status && formik.errors.status}
                </div>
              </div>

              <div className="p-3 w-full ">
                <button type="submit" className="btn btn-primary ">
                  Add Doctor
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
