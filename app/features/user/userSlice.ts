// features/user/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface User {
  id: string;
  username: string;
  // ... other properties
}

export const userSlice = createSlice({
  name: 'user',
  initialState: null as User | null,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      // Logic to login user
    },
    logout: (state) => {
      // Logic to logout user
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
