import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import doctorService from "./doctorService";
const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const createDoctor = createAsyncThunk(
  "doctor/add",
  async (Data, thunkAPI) => {
    
    try {
      return await doctorService.createNewDoctor(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
export const deleteADoctor = createAsyncThunk(
  "doctor/delete",
  async (id, thunkAPI) => {
    try {
      return await doctorService.deleteDoctor(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateDoctor = createAsyncThunk(
  "doctor/update",
  async (drData, thunkAPI) => {
    try {
      return await doctorService.updateDoctor(drData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createDoctor.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(createDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.NewDoctor = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Doctors Added successfully");
        }
      }),
      builder.addCase(createDoctor.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
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

    builder.addCase(deleteADoctor.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(deleteADoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.deletedDoctor = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Doctor deleted successfully");
        }
      }),
      builder.addCase(deleteADoctor.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(updateDoctor.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(updateDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.updatedDoctor = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Doctor Updated successfully");
        }
      }),
      builder.addCase(updateDoctor.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default doctorSlice.reducer;
