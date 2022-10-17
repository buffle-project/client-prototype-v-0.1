import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        username: null,
        email: null,
    }
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        /**
         * @returns - sets the user to null state
         */
        deleteUser: (state) => {
            state.user.username = null;
            state.user.email = null;
        }, 
        /** 
         * @param {String} user.username - username of the logged in user
         * @param {String} user.email - email of the logged in user
         */
        setUser: (state, action) => {
            let username = action.payload.username;
            let email = action.payload.email;
            state.user.username = username;
            state.user.email = email;
        },
    }
});

export const { deleteUser, setUser } = userSlice.actions

export default userSlice.reducer;