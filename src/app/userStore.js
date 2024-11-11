import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    changeUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
