import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token') || '', 
    user: JSON.parse(localStorage.getItem('user')) || {},
    isAdmin: JSON.parse(localStorage.getItem('isAdmin'))||false,
  },
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAdmin=action.payload.user.email === 'admin@example.com';
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('isAdmin',JSON.stringify(state.isAdmin));
    },

    logout: (state) => {
      state.token = '';
      state.user = {};
      state.isAdmin=false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('isAdmin');
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
