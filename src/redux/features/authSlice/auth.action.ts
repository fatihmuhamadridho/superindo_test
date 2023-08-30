import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authLoginProps } from "../../../../server/controllers/auth.controller";
import { instance } from "@/libs/instance";

const apiClient = instance({ baseURL: "/api" });

export const getProfile = createAsyncThunk("auth/getProfile", async () => {
  try {
    const response = await apiClient.get("/profile");
    return { status: response.status, data: response.data };
  } catch (error: any) {
    return { status: error.response.status, data: error.response.data };
  }
});

export const postLogin = createAsyncThunk("auth/login", async (payload: authLoginProps) => {
  try {
    const response = await axios.post("/api/auth/login", payload);
    return { status: response.status, data: response.data };
  } catch (error: any) {
    return { status: error.response.status, data: error.response.data };
  }
});
