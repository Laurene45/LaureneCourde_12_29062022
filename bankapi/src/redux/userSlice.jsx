import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'app',
  initialState: {
    token: null,
    firstName:'',
    lastName:'',
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      //console.log(action.payload);

    },
    logout: (state) => {
      state.token = null;
  
    },

    setProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },

   


  },
});

const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

export { userActions, userReducer };
