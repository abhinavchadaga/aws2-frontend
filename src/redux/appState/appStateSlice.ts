import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum AppStage {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  TRAINING = 'TRAINING',
}

export interface AppStateState {
  stage: AppStage;
}

const initialState: AppStateState = {
  stage: AppStage.LOGIN,
};

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAppState: (state: AppStateState, action: PayloadAction<AppStage>) => ({
      ...state,
      stage: action.payload,
    }),
  },
});

export const { setAppState } = appStateSlice.actions;
export default appStateSlice.reducer;
