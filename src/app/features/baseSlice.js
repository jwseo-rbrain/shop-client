import { createSlice } from "@reduxjs/toolkit";

const baseSlice = createSlice({
  name: "base",
  initialState: {
    user: {},
    token: null,
  },
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
    getToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { getUser, getToken } = baseSlice.actions;
export default baseSlice.reducer;
