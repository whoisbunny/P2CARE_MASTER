import { useFormik } from "formik";
import CustomInput from "../../components/CustomInput";
import * as yup from "yup";

let schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  username: yup.string().required("Username is Required"),
  phone: yup.number().required("Phone Number is Required"),
  zipcode: yup.number().required("Zipcode is Required"),
  city: yup.number().required("City is Required"),
  country: yup.number().required("Country is Required"),
  state: yup.number().required("State is Required"),
  address: yup.string().required("address is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
  passwordconfirm: yup.string().required("Confirm Password is Required"),
});
const AddPetient = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      zipcode: "",
      address: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div>
        <h3 className="mb-4 title">Add Petient</h3>
        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="d-flex mb-4 flex-column"
          >
            <CustomInput
              type="text"
              label="Enater Name "
              name="name"
              onChng={formik.handleChange("name")}
              onBlr={formik.handleBlur("name")}
              val={formik.values.name}
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>
            <CustomInput
              type="text"
              label="Enater Username "
              name="username"
              onChng={formik.handleChange("username")}
              onBlr={formik.handleBlur("username")}
              val={formik.values.username}
            />
            <div className="error">
              {formik.touched.username && formik.errors.username}
            </div>
            <CustomInput
              type="text"
              label="Email Address"
              id="email"
              name="email"
              onChng={formik.handleChange("email")}
              onBlr={formik.handleBlur("email")}
              val={formik.values.email}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>

            <CustomInput
              type="number"
              label="Enter Phone Number"
              name="phone"
              onChng={formik.handleChange("phone")}
              onBlr={formik.handleBlur("phone")}
              val={formik.values.phone}
            />
            <div className="error">
              {formik.touched.phone && formik.errors.phone}
            </div>

            <CustomInput
              type="text"
              label="Enter Zip Code"
              name="zipcode"
              onChng={formik.handleChange("zipcode")}
              onBlr={formik.handleBlur("zipcode")}
              val={formik.values.zipcode}
            />
            <div className="error">
              {formik.touched.zipcode && formik.errors.zipcode}
            </div>

            <CustomInput
              type="text"
              label="Enter Address"
              name="address"
              onChng={formik.handleChange("address")}
              onBlr={formik.handleBlur("address")}
              val={formik.values.address}
            />
            <div className="error">
              {formik.touched.address && formik.errors.address}
            </div>
            <CustomInput
              type="password"
              label="Enter password"
              name="password"
              onChng={formik.handleChange("password")}
              onBlr={formik.handleBlur("password")}
              val={formik.values.password}
            />
            <div className="error">
              {formik.touched.password && formik.errors.password}
            </div>
            <CustomInput
              type="password"
              label="Enter Confirm password"
              name="passwordconfirm"
              onChng={formik.handleChange("passwordconfirm")}
              onBlr={formik.handleBlur("passwordconfirm")}
              val={formik.values.passwordconfirm}
            />
            <div className="error">
              {formik.touched.passwordconfirm && formik.errors.passwordconfirm}
            </div>
            <div className="p-3 w-full">
              <button type="submit" className="btn btn-primary ">
                Add Petient
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPetient;
