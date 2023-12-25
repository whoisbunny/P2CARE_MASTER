import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import hospitalService from "./hospitalService";
const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const AddHospital = createAsyncThunk(
  "hospital/add",
  async (hospital, thunkAPI) => {
    try {
      return await hospitalService.addHospital(hospital);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAllHospitals = createAsyncThunk(
  "hospital/get-all",
  async ( thunkAPI) => {
    try {
      return await hospitalService.allHospital();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteAHospital = createAsyncThunk(
  "hospital/delete",
  async ( thunkAPI) => {
    try {
      return await hospitalService.deleteHospital();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddHospital.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddHospital.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.dCategory = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("New Hospital added successfully");
        }
      })
      .addCase(AddHospital.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(getAllHospitals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllHospitals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.AllHospitals = action.payload?.data;
      })
      .addCase(getAllHospitals.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(deleteAHospital.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAHospital.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.DeletedHospital = action.payload?.data;
        if(state.isSuccess === true) {
          toast.success('Successfully deleted')
        }
      })
      .addCase(deleteAHospital.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
export default hospitalSlice.reducer