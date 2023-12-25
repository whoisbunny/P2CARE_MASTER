import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { baseUrl } from "../../utils/baseUrl";

const addHospital = async (hospital) => {
  const res = await axios.post(
    `${baseUrl}hospital/addhospital`,
    hospital,
    config
  );

  return res.data;
};
const allHospital = async () => {
  const res = await axios.get(
    `${baseUrl}hospital/allhospital`,
    
    config
  );

  return res.data;
};
const deleteHospital = async () => {
  const res = await axios.get(
    `${baseUrl}hospital/allhospital`,
    
    config
  );

  return res.data;
};


const hospitalService = {
  addHospital,
  allHospital,
  deleteHospital,
};
export default hospitalService;