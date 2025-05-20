import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

// register
export const registerUserAction = createAsyncThunk(
  "/auth/register",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

// login
export const loginUserAction = createAsyncThunk(
  "/auth/login",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

// logout
export const logoutUser = createAsyncThunk(
  "/auth/logout",

  async () => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

// check authentication
export const checkAuthAction = createAsyncThunk("/auth/checkauth", async () => {
  const response = await axios.get(
    "http://localhost:5000/api/auth/check-auth",
    {
      withCredentials: true,
      headers: {
        "Cache-Control": "no-store,no-cache,must-revalidate,proxy-revalidate",
      },
    }
  );
  return response.data;
});

// login and register extrareducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserAction.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUserAction.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.user = action.payload.success ? action.payload : null;
        state.isAuthenticated = action.payload.success ? true : false;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.user = action.payload.success ? action.payload : null;
        state.isAuthenticated = action.payload.success ? true : false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
