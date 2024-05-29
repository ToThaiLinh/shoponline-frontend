import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    access_token: ''
  },
  reducers: {
    updateUser: (state, action) => {
        const {name, email, access_token} = action.payload;
        state.name = name || email;
        state.email = email;
        state.access_token = access_token
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions

export default userSlice.reducer