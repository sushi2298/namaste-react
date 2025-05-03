import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: null,
        id: null
    },
    reducers: {
        updateUser: (state, action) => {
            state.id = action.payload.id;
            state.userName = action.payload.userName;
        },
        updateUserName: (state, action) => {
            state.userName = action.payload;
        }
    }
});

export const { updateUser, updateUserName } = userSlice.actions; // createSlice would create the actions based on reducers

export default userSlice.reducer;
