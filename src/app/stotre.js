import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../features/patient/patientSlice";
import authReducer from "../features/auth/authSlice";
import dCategoryReducer from "../features/dCategory/dCategorySlice";
import doctorReducer from "../features/doctor/doctorSlice";
import serviceCategoryReducer from "../features/serviceCategory/sCategorySlice";
import serviceReducre from "../features/service/serviceSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
    dCategory: dCategoryReducer,
    doctor: doctorReducer,
    sCategory: serviceCategoryReducer,
    service: serviceReducre,
  },
});
