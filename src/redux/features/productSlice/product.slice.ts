import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAllProduct } from "./product.action";

export interface productState {
  status?: "success" | "loading" | "failed" | number;
  message: string;
  data: any[];
}

const initialState: productState = {
  status: undefined,
  message: "",
  data: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllProduct.pending.type, (state: productState) => {
      state.status = "loading";
    });
    builder.addCase(
      getAllProduct.fulfilled.type,
      (state: productState, { payload }: PayloadAction<{ data: productState }>) => {
        state.status = "success";
        state.message = payload.data.message;
        state.data = payload.data.data;
      }
    );
    builder.addCase(getAllProduct.rejected, (state: productState) => {
      state.status = "failed";
      state.data = [];
    });
  },
});

export default productSlice.reducer;
