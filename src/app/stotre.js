import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../features/patient/patientSlice";
import authReducer from "../features/auth/authSlice";
import dCategoryReducer from "../features/dCategory/dCategorySlice";
import doctorReducer from "../features/doctor/doctorSlice";
import serviceCategoryReducer from "../features/serviceCategory/sCategorySlice";
import serviceReducer from "../features/service/serviceSlice";
import hospitalReducer from "../features/hospital/hospitalSlice";
import timeReducer from "../features/time/timeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
    dCategory: dCategoryReducer,
    doctor: doctorReducer,
    sCategory: serviceCategoryReducer,
    service: serviceReducer,
    hospital: hospitalReducer,
    time: timeReducer,
  },
});
