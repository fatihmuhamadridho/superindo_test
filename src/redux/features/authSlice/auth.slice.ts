import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getProfile, postLogin } from "./auth.action";

export interface authState {
  status?: "success" | "loading" | "failed" | number;
  message: string;
  data?: any;
  access_token?: string;
  initializing: boolean;
  authenticated: boolean;
}

const initialState: authState = {
  status: undefined,
  message: "",
  data: undefined,
  initializing: true,
  authenticated: false,
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    offInitializiing: (state: authState) => {
      state.initializing = false;
    },
    onLogout: (state: authState) => {
      state.data = undefined;
      state.authenticated = false;
      localStorage.removeItem("access_token");
    },
  },
  extraReducers: builder => {
    // GET PROFILE
    builder.addCase(getProfile.pending.type, (state: authState) => {
      state.status = "loading";
    });
    builder.addCase(
      getProfile.fulfilled.type,
      (state: authState, { payload }: PayloadAction<authState>) => {
        state.status = "success";
        state.message = payload.message;
        state.data = payload.data;
        state.initializing = false;

        if (payload.status === 200) state.authenticated = true;
      }
    );
    builder.addCase(getProfile.rejected, (state: authState) => {
      state.status = "failed";
      state.data = undefined;
      state.initializing = false;
      state.authenticated = false;
      localStorage.removeItem("access_token");
    });

    // POST LOGIN
    builder.addCase(postLogin.pending.type, (state: authState) => {
      state.status = "loading";
    });
    builder.addCase(
      postLogin.fulfilled.type,
      (state: authState, { payload }: PayloadAction<authState>) => {
        state.status = "success";
        state.message = payload.message;
        state.access_token = payload.data;

        state.authenticated = true;
        localStorage.setItem("access_token", payload?.data);
      }
    );
    builder.addCase(postLogin.rejected, (state: authState) => {
      state.status = "failed";
      state.data = undefined;
    });
  },
});

export const { offInitializiing, onLogout } = authSlice.actions;
export default authSlice.reducer;
