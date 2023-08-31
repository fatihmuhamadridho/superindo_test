import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getAllTransaction } from "./transaction.action";
import { transactionModelProps } from "../../../../server/models/transaction.model";

export interface transactionState {
  status?: "success" | "loading" | "failed" | number;
  message: string;
  data: transactionModelProps[];
}

const initialState: transactionState = {
  status: undefined,
  message: "",
  data: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllTransaction.pending.type, (state: transactionState) => {
      state.status = "loading";
    });
    builder.addCase(
      getAllTransaction.fulfilled.type,
      (state: transactionState, action: PayloadAction<{ data: transactionState }>) => {
        state.status = "success";
        state.message = action.payload.data.message;
        state.data = action.payload.data.data;
      }
    );
    builder.addCase(getAllTransaction.rejected, (state: transactionState) => {
      state.status = "failed";
      state.data = [];
    });
  },
});

export default transactionSlice.reducer;
