import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getAllProductCategory } from "./productCategory.action";
import { productCategoryModelProps } from "../../../../server/models/productCategory.model";

export interface productCategoryState {
  status?: "success" | "loading" | "failed" | number;
  message: string;
  data: productCategoryModelProps[];
}

const initialState: productCategoryState = {
  status: undefined,
  message: "",
  data: [],
};

export const productCategorySlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllProductCategory.pending.type, (state: productCategoryState) => {
      state.status = "loading";
    });
    builder.addCase(
      getAllProductCategory.fulfilled.type,
      (state: productCategoryState, { payload }: PayloadAction<{ data: productCategoryState }>) => {
        state.status = "success";
        state.message = payload.data.message;
        state.data = payload.data.data;
      }
    );
    builder.addCase(getAllProductCategory.rejected, (state: productCategoryState) => {
      state.status = "failed";
      state.data = [];
    });
  },
});

export default productCategorySlice.reducer;
