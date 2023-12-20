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
});
const AddDoctor = () => {
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
      passwordconfirm:'',
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
          <form onSubmit={formik.handleSubmit} className="   mb-4   ">
            <div className="row">

            
            <div className="col-6">
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
            </div>
            <div className="col-6">
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
            </div>
            <div className="col-6">
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
            </div>
            <div className="col-6">
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
            </div>
            
            <div className="p-3 w-full ">
              <button type="submit" className="btn btn-primary ">
                Add Petient
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
