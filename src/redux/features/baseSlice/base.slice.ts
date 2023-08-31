import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getBase } from "./base.action";

export interface baseState {
  status?: "success" | "loading" | "failed" | number;
  message: string;
  data: any[];
}

const initialState: baseState = {
  status: undefined,
  message: "",
  data: [],
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBase.pending.type, (state: baseState) => {
      state.status = "loading";
    });
    builder.addCase(getBase.fulfilled, (state: baseState, action: PayloadAction<baseState>) => {
      state.status = "success";
      state.message = action.payload.message;
      state.data = action.payload.data;
    });
    builder.addCase(getBase.rejected, (state: baseState) => {
      state.status = "failed";
      state.data = [];
    });
  },
});

export default baseSlice.reducer;
