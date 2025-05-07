import { createSlice } from '@reduxjs/toolkit';

const welcomeSlice = createSlice({
  name: 'welcome',
  initialState:{
    showWelcome :true,
  },
  reducers: {
    hideWelcome: (state) => {
      state.showWelcome = false;
    },
  },
});

export const { hideWelcome } = welcomeSlice.actions;
export default welcomeSlice.reducer;
