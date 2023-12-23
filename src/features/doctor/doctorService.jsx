import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const createNewDoctor = async (Data) => {
  const res = await axios.post(`${baseUrl}doctor/adddoctor`, Data, config);

  return res.data;
};

const getDoctors = async () => {
  const res = await axios.get(`${baseUrl}doctor/alldoctor`, config);

  return res.data;
};

// const deleteCategory = async (id) => {
//   const response = await axios.delete(
//     `${baseUrl}doctorcategory/deletecategory/${id}`,
//     config
//   );
//   return response.data;
// };
// const updateCategory = async (catData) => {
//   const response = axios.put(
//     `${baseUrl}doctorcategory/updatecategory/${catData.id}`,
//     catData.formData,
//     config
//   );
//   return response.data;
// };

const doctorService = {
  createNewDoctor,
  getDoctors,
  //   deleteCategory,
  //   updateCategory,
};

export default doctorService;
