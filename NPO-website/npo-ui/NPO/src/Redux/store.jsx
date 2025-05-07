import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice'
import welcomeReducer from './WelcomeSlice'
const store=configureStore({
    reducer:{
        user:userReducer,
        welcome:welcomeReducer,
    },
});
export default store;