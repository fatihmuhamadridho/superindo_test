import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice/auth.slice";
import productCategoryReducer from "./features/productCategorySlice/productCategory.slice";
import productReducer from "./features/productSlice/product.slice";
import transactionReducer from "./features/transactionSlice/transaction.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    productCategory: productCategoryReducer,
    product: productReducer,
    transaction: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
