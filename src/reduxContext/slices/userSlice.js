import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        /**
         * @returns - sets the user to null state
         */
        deleteUser: (state) => {
            state.user = null;
        }, 
        /** 
         * @param {String} user.email - email of the logged in user
         */
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }
});

export const { deleteUser, setUser } = userSlice.actions

export default userSlice.reducer;