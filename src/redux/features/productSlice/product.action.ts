import { instance } from "@/libs/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiClient = instance({ baseURL: "/api" });

export const getAllProduct = createAsyncThunk("product/getAllProduct", async () => {
  try {
    const response = await apiClient.get("/product");
    return { status: response?.status, data: response.data };
  } catch (error: any) {
    return { status: error.response.status, data: error.response.data };
  }
});
