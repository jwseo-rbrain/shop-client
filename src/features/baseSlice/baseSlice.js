import { createSlice } from "@reduxjs/toolkit";

const baseSlice = createSlice({
  name: "base",
  // 유저 정보, 메뉴 정보 저장
  initialState: {
    user: {},
    menu: [],
    theme: JSON.parse(localStorage.getItem("theme")) ?? "light",
  },
  reducers: {
    setUser: (state, actions) => {
      localStorage.setItem("token", actions.payload.token);
      localStorage.setItem("user", JSON.stringify(actions.payload));
      localStorage.setItem("role", JSON.stringify(actions.payload.roleNm));
      state.user = actions.payload;
    },
    setMenu: (state, actions) => {
      localStorage.setItem("menu", JSON.stringify(actions.payload));
      state.menu = actions.payload;
    },
    setTheme: (state, actions) => {
      localStorage.setItem("theme", JSON.stringify(actions.payload));
      state.theme = actions.payload;
    },
  },
});

export const { setUser, setMenu, setTheme } = baseSlice.actions;
export default baseSlice.reducer;
