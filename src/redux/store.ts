import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import appStateReducer from './appState/appStateSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
