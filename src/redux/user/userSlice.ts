import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../api/apiSlice';

export interface UserState {
  username: string;
}

const initialState: UserState = {
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state: UserState, action: PayloadAction<User>) => ({
      ...state,
      username: action.payload.username,
    }),
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
