import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/instance";
import { URL } from "../../services/urlConstants";

export const getUser = createAsyncThunk(
   "user/getUser",
   async (param, thunkAPI) => {
      try {
         const { data } = await instance.get(URL.USERS);

         return new Promise((resolve) => {
            setTimeout(() => {
               resolve(data);
            }, 1000);
         });
      } catch (error) {
         console.log(error);
      }
   }
);

export const addUser = createAsyncThunk("user/addUser", async (params) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         localStorage.setItem(JSON.stringify(params));
         resolve();
      }, 1000);
   });
});
