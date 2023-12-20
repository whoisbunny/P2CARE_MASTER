import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import doctorService from "./doctorService";
const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// export const createDoctor = createAsyncThunk(
//   "doctor/add",
//   async (Data, thunkAPI) => {
//     //  console.log(catData);
//     try {
//       return await doctorService.doctorCategory(Data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const getAllDoctors = createAsyncThunk(
  "doctor/getAllDoctors",
  async (thunkAPI) => {
    try {
      return await doctorService.getDoctors();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const resetState = createAction("Reset_all");

export const doctorSlice = createSlice({
  name: "doctorCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(createDoctor.pending, (state) => {
    //   state.isLoading = true;
    // }),
    //   builder.addCase(createDoctor.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.isError = false;

    //     state.dCategory = action.payload?.data;
    //     if (state.isSuccess === true) {
    //       toast.success("Doctors Category Created");
    //     }
    //   }),
    //   builder.addCase(createDoctor.rejected, (state) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.isSuccess = false;
    //   });
    builder.addCase(getAllDoctors.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getAllDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.allDoctors = action.payload?.data;
      }),
      builder.addCase(getAllDoctors.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
        },
});

export default doctorSlice.reducer;
