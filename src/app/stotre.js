import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../features/patient/patientSlice";
import authReducer from "../features/auth/authSlice";
import dCategoryReducer from "../features/dCategory/dCategorySlice";
import doctorReducer from "../features/doctor/doctorSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
    dCategory: dCategoryReducer,
    doctor: doctorReducer,
  },
});
