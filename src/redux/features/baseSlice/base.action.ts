import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBase = createAsyncThunk("base/getBase", async () => {
  try {
    const response = { data: [] };
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});
