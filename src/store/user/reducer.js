import { createSlice } from "@reduxjs/toolkit";
import { addUser, getUser } from "./action";

export const userSlice = createSlice({
   name: "user",
   initialState: {
      loading: false,
      data: [],
   },
   reducers: {
      tambhauser: (state) => {},
   },
   extraReducers: (builder) => {
      builder.addCase(getUser.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(getUser.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
      });
      builder.addCase(getUser.rejected, (state) => {
         state.loading = false;
      });

      //   add user case
      builder.addCase(addUser.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(addUser.fulfilled, (state) => {
         state.loading = false;
         alert("Sukses add data");
      });
      builder.addCase(addUser.rejected, (state) => {
         state.loading = false;
      });
   },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
