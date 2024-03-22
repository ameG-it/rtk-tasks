import { createSlice, createAsyncThunk, isAction } from "@reduxjs/toolkit";
import axios from "axios";
import { initialStateLogin } from "../../type";

const apiUrl = "http://localhost:8000/";

export const fetchAsyncLogin = createAsyncThunk("login/post", async (auth) => {
  const res = await axios.post(`${apiUrl}authen/jjwt/create`, auth, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
});

const initialState: initialStateLogin = {
  loginUser: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    editUsername: (state, action) => {
      if (state.loginUser) {
        state.loginUser.authen.username = action.payload;
      }
    },
    editusername: (state, action) => {
      if (state.loginUser) {
        state.loginUser.authen.password = action.payload;
      }
    },
    toggleMode: (state, action) => {
      if (state.loginUser) {
        state.loginUser.isLoginView = !state.loginUser.isLoginView;
      }
    },
  },
});
