import { Field, FieldArray, Formik } from "formik";
import CustomInput from "../..//components/CustomInput";
import * as yup from "yup";
import Select from "react-dropdown-select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allDoctorCategory } from "../../features/dCategory/dCategorySlice";

import { getAllHospitals } from "../../features/hospital/hospitalSlice";

let schema = yup.object().shape({
  doctorName: "",
  doctorCode: "",
  departmentName: "",
  departmentCode: "",
  designation: [],

  experties: [],
  slug: "",
  location: "",
  description: "",
  shortDescription: "",
  experienceInfo: [],
  awardAndAchivementsInfo: [],
  specialities: "",
  talkPublicationInfo: [],
  languageInfo: [],
  educationInfo: [],
  fellowShipInfo: [],
  metaTitle: "",
  ogMetaTitle: "",
  metaDescription: "",
  ogMetaDescription: "",
  metaTags: "",
  price: "",
  image: "",
  availabileforappointment: false,
  hospital: "",
  status: "",
});

const AddDoctor = () => {
  const DoctorCategory = useSelector((state) => state.dCategory?.dCategories);
  const AllHospitals = useSelector((state) => state.hospital?.AllHospitals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allDoctorCategory());
    dispatch(getAllHospitals());

  }, []);


  
  
  
  return (
    <>
      <Formik
        initialValues={{
          doctorName: "",
          doctorCode: "",
          departmentName: "",
          departmentCode: "",
          designation: [],
          experties: [], // doctor category mathi data lavine multiple select option lagavu

          slug: "",
          location: "",
          description: "",
          shortDescription: "",
          experienceInfo: [],
          specialities: "",
          awardAndAchivementsInfo: [],
          talkPublicationInfo: [],
          languageInfo: [],
          educationInfo: [],
          fellowShipInfo: [],
          metaTitle: "",
          ogMetaTitle: "",
          metaDescription: "",
          ogMetaDescription: "",
          metaTags: "",
          price: "",
          image: "",
          availabileforappointment: false,
          hospital: "",
          status: "",
        }}
        onSubmit={(values) => {
          const {
            doctorName,
            doctorCode,
            departmentName,
            departmentCode,
            designation,
            experties,
            experienceInfo,
            specialities,
            slug,
            location,
            description,
            shortDescription,
            awardAndAchivementsInfo,
            talkPublicationInfo,
            languageInfo,
            educationInfo,
            fellowShipInfo,
            image,
            availabileforappointment,
            hospital,
          } = values;
          console.log(values);
          const experties1 = [];
          const hospital1 = [];

          experties.forEach((element) => experties1.push(element?.name));
          hospital.forEach((element) => hospital1.push(element?.hospitalname));
          const formData = new FormData();
          formData.append("doctorName", doctorName);
          formData.append("doctorCode", doctorCode);
          formData.append("departmentName", departmentName);
          formData.append("departmentCode", departmentCode);
          formData.append("designation", designation);
          formData.append("experties", experties1);
          formData.append("specialities", specialities);
          formData.append("slug", slug);
          formData.append("location", location);
          formData.append("experienceInfo", experienceInfo);
          formData.append("description", description);
          formData.append("shortDescription", shortDescription);
          formData.append("awardAndAchivementsInfo", awardAndAchivementsInfo);
          formData.append("talkPublicationInfo", talkPublicationInfo);
          formData.append("languageInfo", languageInfo);
          formData.append("educationInfo", educationInfo);
          formData.append("fellowShipInfo", fellowShipInfo);
          formData.append("image", image);
          formData.append("availabileforappointment", availabileforappointment);
          formData.append("hospital", hospital1);
        }}
      >
        {(formik) => (
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
                        type="number"
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

                    <div className="col-12 ">
                      <div className="my-3">Add designation</div>
                      <FieldArray
                        name="designation"
                        render={(arrayHelpers) => {
                          return (
                            <>
                              <div className="row">
                                {formik.values.designation?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 0 && (
                                          <div className="float-end" key={i}>
                                            <button
                                              className="btn btn-danger"
                                              onClick={() =>
                                                arrayHelpers.remove(i)
                                              }
                                            >
                                              X
                                            </button>
                                          </div>
                                        )}

                                        <div className="form-group  ">
                                          <Field
                                            type="text"
                                            placeholder={`designation-${i + 1}`}
                                            className="form-control  mb-2"
                                            style={{ width: "95%" }}
                                            name={`designation.${i}`}
                                          />
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.designation.length + 1,
                                      []
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </>
                          );
                        }}
                      />
                      <div className="error">
                        {formik.touched.designation &&
                          formik.errors.designation}
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="my-3">Add experienceInfo</div>
                      <FieldArray
                        name="experienceInfo"
                        render={(arrayHelpers) => {
                          return (
                            <>
                              <div className="row">
                                {formik.values.experienceInfo?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 0 && (
                                          <div className="float-end" key={i}>
                                            <button
                                              className="btn btn-danger"
                                              onClick={() =>
                                                arrayHelpers.remove(i)
                                              }
                                            >
                                              X
                                            </button>
                                          </div>
                                        )}

                                        <div className="form-group  ">
                                          <Field
                                            type="text"
                                            placeholder={`experienceInfo-${
                                              i + 1
                                            }`}
                                            className="form-control  mb-2"
                                            style={{ width: "95%" }}
                                            name={`experienceInfo.${i}`}
                                          />
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.experienceInfo.length + 1,
                                      []
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </>
                          );
                        }}
                      />
                      <div className="error">
                        {formik.touched.experienceInfo &&
                          formik.errors.experienceInfo}
                      </div>
                    </div>

                    <div className="col-6">
                      {/* <div className="my-3">Select Experties</div> */}

                      <Select
                        name="experties"
                        labelField="name"
                        placeholder="Select Experties ..."
                        valueField="_id"
                        onChange={(e) => formik.setFieldValue("experties", e)}
                        className="form-control rounded p-3 mb-3"
                        multi
                        options={DoctorCategory}
                      />
                      <div className="error">
                        {formik.touched.experties && formik.errors.experties}
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
                        {formik.touched.description &&
                          formik.errors.description}
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
                      <select
                        name="specialities"
                        onChange={formik.handleChange("specialities")}
                        onBlur={formik.handleBlur("specialities")}
                        value={formik.values.specialities}
                        className="form-control form-select py-3 mb-3"
                      >
                        <option value="">Select specialities</option>
                        {DoctorCategory?.map((e, i) => {
                          return (
                            <>
                              <option key={i} value={e?.name}>
                                {e?.name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                      <div className="error">
                        {formik.touched.specialities &&
                          formik.errors.specialities}
                      </div>
                    </div>

                    <div className="col-12 ">
                      <div className="my-3">Add Award And AchivementsInfo</div>
                      <FieldArray
                        name="awardAndAchivementsInfo"
                        render={(arrayHelpers) => {
                          return (
                            <>
                              <div className="row">
                                {formik.values.awardAndAchivementsInfo?.map(
                                  (e, i) => {
                                    return (
                                      <>
                                        <div key={i}>
                                          {i > 0 && (
                                            <div className="float-end" key={i}>
                                              <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                  arrayHelpers.remove(i)
                                                }
                                              >
                                                X
                                              </button>
                                            </div>
                                          )}

                                          <div className="form-group  ">
                                            <Field
                                              type="text"
                                              placeholder={`awardAndAchivementsInfo-${
                                                i + 1
                                              }`}
                                              className="form-control  mb-2"
                                              style={{ width: "95%" }}
                                              name={`awardAndAchivementsInfo.${i}`}
                                            />
                                          </div>
                                        </div>
                                      </>
                                    );
                                  }
                                )}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.awardAndAchivementsInfo
                                        .length + 1,
                                      []
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </>
                          );
                        }}
                      />
                      <div className="error">
                        {formik.touched.awardAndAchivementsInfo &&
                          formik.errors.awardAndAchivementsInfo}
                      </div>
                    </div>

                    <div className="col-12 ">
                      <div className="my-3">Talk Publication Info</div>
                      <FieldArray
                        name="talkPublicationInfo"
                        render={(arrayHelpers) => {
                          return (
                            <>
                              <div className="row">
                                {formik.values.talkPublicationInfo?.map(
                                  (e, i) => {
                                    return (
                                      <>
                                        <div key={i}>
                                          {i > 0 && (
                                            <div className="float-end" key={i}>
                                              <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                  arrayHelpers.remove(i)
                                                }
                                              >
                                                X
                                              </button>
                                            </div>
                                          )}

                                          <div className="form-group  ">
                                            <Field
                                              type="text"
                                              placeholder={`Talk Publication Info-${
                                                i + 1
                                              }`}
                                              className="form-control  mb-2"
                                              style={{ width: "95%" }}
                                              name={`talkPublicationInfo.${i}`}
                                            />
                                          </div>
                                        </div>
                                      </>
                                    );
                                  }
                                )}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.talkPublicationInfo.length +
                                        1,
                                      []
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </>
                          );
                        }}
                      />
                      <div className="error">
                        {formik.touched.talkPublicationInfo &&
                          formik.errors.talkPublicationInfo}
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="my-3">Talk Language Info</div>
                      <FieldArray
                        name="languageInfo"
                        render={(arrayHelpers) => {
                          return (
                            <>
                              <div className="row">
                                {formik.values.languageInfo?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 0 && (
                                          <div className="float-end" key={i}>
                                            <button
                                              className="btn btn-danger"
                                              onClick={() =>
                                                arrayHelpers.remove(i)
                                              }
                                            >
                                              X
                                            </button>
                                          </div>
                                        )}

                                        <div className="form-group  ">
                                          <Field
                                            type="text"
                                            placeholder={`Talk Language Info-${
                                              i + 1
                                            }`}
                                            className="form-control  mb-2"
                                            style={{ width: "95%" }}
                                            name={`languageInfo.${i}`}
                                          />
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.languageInfo.length + 1,
                                      []
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </>
                          );
                        }}
                      />
                      <div className="error">
                        {formik.touched.languageInfo &&
                          formik.errors.languageInfo}
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="my-3"> Education Info</div>
                      <FieldArray
                        name="educationInfo"
                        render={(arrayHelpers) => {
                          return (
                            <>
                              <div className="row">
                                {formik.values.educationInfo?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 0 && (
                                          <div className="float-end" key={i}>
                                            <button
                                              className="btn btn-danger"
                                              onClick={() =>
                                                arrayHelpers.remove(i)
                                              }
                                            >
                                              X
                                            </button>
                                          </div>
                                        )}

                                        <div className="form-group  ">
                                          <Field
                                            type="text"
                                            placeholder={`Education Info-${
                                              i + 1
                                            }`}
                                            className="form-control  mb-2"
                                            style={{ width: "95%" }}
                                            name={`educationInfo.${i}`}
                                          />
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.educationInfo.length + 1,
                                      []
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </>
                          );
                        }}
                      />
                      <div className="error">
                        {formik.touched.educationInfo &&
                          formik.errors.educationInfo}
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="my-3"> FellowShip Info</div>
                      <FieldArray
                        name="fellowShipInfo"
                        render={(arrayHelpers) => {
                          return (
                            <>
                              <div className="row">
                                {formik.values.fellowShipInfo?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 0 && (
                                          <div className="float-end" key={i}>
                                            <button
                                              className="btn btn-danger"
                                              onClick={() =>
                                                arrayHelpers.remove(i)
                                              }
                                            >
                                              X
                                            </button>
                                          </div>
                                        )}

                                        <div className="form-group  ">
                                          <Field
                                            type="text"
                                            placeholder={`FellowShip Info-${
                                              i + 1
                                            }`}
                                            className="form-control  mb-2"
                                            style={{ width: "95%" }}
                                            name={`fellowShipInfo.${i}`}
                                          />
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.fellowShipInfo.length + 1,
                                      []
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </>
                          );
                        }}
                      />
                      <div className="error">
                        {formik.touched.fellowShipInfo &&
                          formik.errors.fellowShipInfo}
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
                        {formik.touched.ogMEtaTitle &&
                          formik.errors.ogMEtaTitle}
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
                        type="number"
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
                        label="Doctor Image "
                        accept="image/*"
                        name="image"
                        id="formFile"
                        onChng={(e) =>
                          formik.setFieldValue("image", e.target.files[0])
                        }
                      />{" "}
                      <div className="error">
                        {formik.touched.image && formik.errors.image}
                      </div>
                    </div>

                    <div className="col-6 d-flex">
                      <div className="form-check  form-switch ">
                        <input
                          className="form-check-input  "
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          name="availabileforappointment"
                          value={formik.values.availabileforappointment}
                          onChange={formik.handleChange(
                            "availabileforappointment"
                          )}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Availabile For Appointment
                        </label>
                      </div>
                      <div className="error">
                        {formik.touched.availabileforappointment &&
                          formik.errors.availabileforappointment}
                      </div>
                    </div>

                    <div className="col-6">
                      <Select
                        name="hospital"
                        labelField="hospitalname"
                        placeholder="Select hospital ..."
                        valueField="_id"
                        onChange={(e) => formik.setFieldValue("hospital", e)}
                        className="form-control rounded p-3 mb-3"
                        multi
                        options={AllHospitals}
                      />
                      <div className="error">
                        {formik.touched.hospital && formik.errors.hospital}
                      </div>
                    </div>

                    <div className="col-6">
                      <select
                        name="status"
                        onChange={formik.handleChange("status")}
                        onBlur={formik.handleBlur("status")}
                        value={formik.values.status}
                        className="form-control form-select py-3 mb-3"
                      >
                        <option value="">Select Status</option>
                        <option value="draft">Draft</option>
                        <option value="publish">Publish</option>
                      </select>
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
        )}
      </Formik>
    </>
  );
};

export default AddDoctor;
